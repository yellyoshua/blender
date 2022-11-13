
/* eslint-disable */
// Migration: users_update
import { afterAll, beforeEach, describe } from "@jest/globals";

afterAll(closeOpenHandles);

describe("Migration: users_update", () => {
  beforeEach(async () => {
    await setupFixtures([
      `${__dirname}/fixtures.js`,
    ]);
  });

  it("should update values of the given filter", async () => {
    expect(true).toBe(true);
  });
});
