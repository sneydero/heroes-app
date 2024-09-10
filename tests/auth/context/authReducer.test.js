import { authReducer, types } from "../../../src/auth";

describe("Test in authReducer", () => {
  test("It should return the default state", () => {
    const { logged } = authReducer({ logged: false }, {});
    expect(logged).toBe(false);
  });

  test("It should login the user", () => {
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name: "Sneyder Ospina",
      },
    };
    const { logged, user } = authReducer({ logged: false }, action);
    expect(logged).toBe(true);
    expect(user).toBe(action.payload);
  });

  test("It should logout the user", () => {
    const action = {
      type: types.logout,
    };
    const { logged, user } = authReducer({ logged: true }, action);
    expect(logged).toBe(false);
    expect(user).toBe(undefined);
  });
});
