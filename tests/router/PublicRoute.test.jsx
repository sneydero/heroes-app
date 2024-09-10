import { render, screen } from "@testing-library/react";
import { PublicRoute } from "../../src/router/PublicRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";

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
      logged: true,
      user: {
        id: "ABC",
        name: "New User",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>This is a public route</h1>
                </PublicRoute>
              }
            />

            <Route path="marvel" element={<h1>This is marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("This is marvel")).toBeTruthy();
  });
});
