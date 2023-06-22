
/* eslint-disable */
// Migration: update profile fields
import { beforeEach, describe, expect } from "@jest/globals";
import migration from "./migration.js";
import models from '../../../modules/models.js';

describe("Migration: update profile fields", () => {
  beforeEach(async () => {
    await setupFixtures([
      `${__dirname}/fixtures.js`,
    ]);
  });

  it("should update values of the given filter", async () => {
    await migration.up();

    const profiles = await models.profiles.find({});

    expect(profiles[0].birthdate).toBeDefined();
    expect(profiles[0].birthdate).toEqual(new Date('1990-01-01'));
    expect(profiles[0].tutorial.done_birthdate).toBe(true);

    expect(profiles[1].birthdate).not.toBeDefined();
    expect(profiles[1].tutorial?.done_birthdate).not.toBeDefined();
  });
});
