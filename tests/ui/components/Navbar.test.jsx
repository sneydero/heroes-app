import { render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";

jest.mock("../../../src/auth/context/AuthContext");

describe("Test in <Navbar/>", () => {

  const contextValue = {
    logged: true,
    user: {
      id: "ABC",
      name: "Sneyder",
    },
    logout: jest.fn()
  };

  beforeEach(() => jest.clearAllMocks());

   test("It should show the user name logged", () => { 
      
      render(
      
       <AuthContext.Provider value={contextValue}>
         <MemoryRouter> 
          
              <Navbar/> 
         
          </MemoryRouter>  
        </AuthContext.Provider>            
      );
    });
    screen.debug();
    
  });
  