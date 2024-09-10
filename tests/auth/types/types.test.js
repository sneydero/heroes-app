import { types } from "../../../src/auth";

describe("Test in types", () => {
  test("It should return these types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
