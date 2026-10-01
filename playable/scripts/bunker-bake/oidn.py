"""Minimal ctypes binding to Intel Open Image Denoise 2 (the copy that ships inside Blender)."""
import ctypes, os
import numpy as np

OIDN_FORMAT_FLOAT3 = 3


def _lib(blender_lib_dir):
    return ctypes.CDLL(os.path.join(blender_lib_dir, 'libOpenImageDenoise.so'))


def denoise_lightmap(rgb, blender_lib_dir, kind=b'RTLightmap'):
    """Denoise a float RGB lightmap (H, W, 3) with OIDN (HDR). Falls back to the RT filter when the
    library was built without lightmap weights (Blender's copy is)."""
    try:
        return _denoise(rgb, blender_lib_dir, kind)
    except RuntimeError:
        if kind == b'RT':
            raise
        return _denoise(rgb, blender_lib_dir, b'RT')


def _denoise(rgb, blender_lib_dir, kind):
    L = _lib(blender_lib_dir)
    L.oidnNewDevice.restype = ctypes.c_void_p
    L.oidnNewFilter.restype = ctypes.c_void_p
    L.oidnGetDeviceError.restype = ctypes.c_int
    for f in ('oidnCommitDevice', 'oidnCommitFilter', 'oidnExecuteFilter', 'oidnReleaseFilter', 'oidnReleaseDevice'):
        getattr(L, f).argtypes = [ctypes.c_void_p]
    L.oidnSetSharedFilterImage.argtypes = [ctypes.c_void_p, ctypes.c_char_p, ctypes.c_void_p, ctypes.c_int, ctypes.c_size_t, ctypes.c_size_t, ctypes.c_size_t, ctypes.c_size_t, ctypes.c_size_t]
    L.oidnSetFilterBool.argtypes = [ctypes.c_void_p, ctypes.c_char_p, ctypes.c_bool]
    L.oidnGetDeviceError.argtypes = [ctypes.c_void_p, ctypes.POINTER(ctypes.c_char_p)]
    dev = L.oidnNewDevice(1)  # OIDN_DEVICE_TYPE_CPU
    L.oidnCommitDevice(dev)
    h, w, _ = rgb.shape
    src = np.ascontiguousarray(rgb, dtype=np.float32)
    dst = np.empty_like(src)
    flt = L.oidnNewFilter(dev, kind)
    L.oidnSetSharedFilterImage(flt, b'color', src.ctypes.data, OIDN_FORMAT_FLOAT3, w, h, 0, 0, 0)
    L.oidnSetSharedFilterImage(flt, b'output', dst.ctypes.data, OIDN_FORMAT_FLOAT3, w, h, 0, 0, 0)
    if kind == b'RT':
        L.oidnSetFilterBool(flt, b'hdr', True)
    L.oidnCommitFilter(flt)
    L.oidnExecuteFilter(flt)
    msg = ctypes.c_char_p()
    if L.oidnGetDeviceError(dev, ctypes.byref(msg)):
        raise RuntimeError('OIDN: ' + (msg.value or b'').decode())
    L.oidnReleaseFilter(flt)
    L.oidnReleaseDevice(dev)
    return dst
