import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Test in <PrivateRoute/>", () => {
    test("It should show the children if it is authenticated", () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
              id: "ABC",
              name: "New User",
            },
          };
  
      render(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <PrivateRoute>
                    <h1>This is a private route</h1>
                </PrivateRoute>
            </MemoryRouter>
        </AuthContext.Provider>
      );
  
      screen.debug();
      expect(screen.getByText("This is a private route")).toBeTruthy();
      expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman");
    });
  
    
  });
  