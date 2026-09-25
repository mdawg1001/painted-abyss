import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PALETTE } from '../src/artPalette';
import {
 DRY_FIELD, WATER_FIELD, SLAM_FIELD, SLAM_HOLD,
 createGradeClock, resetGradeClock, stepFrameGrade, gradeField, gradeDensity, gradeSlam,
 waterSheet, practicalColor, GRADE_LIGHTS,
} from '../src/frameGrade';

test('dry air, underwater, and the relic trap are three separate fields', () => {
 const clock = createGradeClock();
 assert.equal(stepFrameGrade(clock, false, true, 0.016), 'dry');
 assert.equal(gradeField('dry'), DRY_FIELD);
 const under = createGradeClock();
 assert.equal(stepFrameGrade(under, false, false, 0.016), 'water');
 assert.equal(gradeField('water'), WATER_FIELD);
 assert.notEqual(DRY_FIELD, WATER_FIELD);
 assert.notEqual(WATER_FIELD, SLAM_FIELD);
 assert.notEqual(DRY_FIELD, SLAM_FIELD);
});

test('water is one blue-green, not a navy ramp', () => {
 const r = (WATER_FIELD >> 16) & 0xff;
 const g = (WATER_FIELD >> 8) & 0xff;
 const b = WATER_FIELD & 0xff;
 assert.ok(r < 0x40, 'red stays low so the field is not ivory or pink');
 assert.ok(g > 0x70 && b > 0x70, 'green and blue carry the field');
 assert.ok(Math.abs(g - b) < 0x30, 'one hue, not a teal-to-navy pair');
});

test('relic flood slams red, then cuts back with no mixed field', () => {
 const clock = createGradeClock();
 assert.equal(stepFrameGrade(clock, true, true, 0), 'slam');
 assert.equal(clock.slamLeft, SLAM_HOLD);
 assert.equal(gradeSlam('slam'), 1);
 assert.equal(gradeField('slam'), SLAM_FIELD);
 assert.equal(gradeDensity('slam'), 0.05);
 // This sample is still the slam. The hold is consumed at the end of the call.
 assert.equal(stepFrameGrade(clock, true, false, SLAM_HOLD), 'slam');
 assert.equal(clock.slamLeft, 0);
 // Next sample is fully water. Not a blend of red and blue-green.
 assert.equal(stepFrameGrade(clock, true, false, 0.016), 'water');
 assert.equal(gradeField('water'), WATER_FIELD);
 assert.equal(gradeSlam('water'), 0);
 assert.equal(waterSheet('water'), WATER_FIELD);
 assert.equal(waterSheet('slam'), SLAM_FIELD);
 // Still latched — a later frame of the same flood does not restart the slam.
 assert.equal(stepFrameGrade(clock, true, true, 0.016), 'dry');
 assert.equal(practicalColor('dry'), PALETTE.amber);
 assert.equal(practicalColor('slam'), SLAM_FIELD);
});

test('a fresh dive can slam again', () => {
 const clock = createGradeClock();
 stepFrameGrade(clock, true, true, SLAM_HOLD + 1);
 resetGradeClock(clock);
 assert.equal(stepFrameGrade(clock, true, true, 0), 'slam');
});

test('grade lights cut between fields', () => {
 assert.notEqual(GRADE_LIGHTS.dry.sun, GRADE_LIGHTS.water.sun);
 assert.equal(GRADE_LIGHTS.slam.sun, SLAM_FIELD);
 assert.equal(GRADE_LIGHTS.slam.sky, SLAM_FIELD);
 assert.equal(GRADE_LIGHTS.water.sky, WATER_FIELD);
 assert.equal(GRADE_LIGHTS.dry.sky, DRY_FIELD);
});
