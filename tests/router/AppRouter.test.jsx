import { render } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";

describe("Tests in <AppRouter/>", () => {
  test("It should show the login page", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Sneyder",
      },
      logout: jest.fn(),
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter></AppRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );
  });
});
