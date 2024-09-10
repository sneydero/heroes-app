import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";

describe("Test in <PublicRoute/>", () => {
  test("It should show the children if it is not authenticated", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>This is a public route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("This is a public route")).toBeTruthy();
  });

  test("It should browse if it is authenticated", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>This is a public route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("This is a public route")).toBeTruthy();
  });
});
