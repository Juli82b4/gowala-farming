import { useLocalStorage } from "@uidotdev/usehooks"; 
// Importing useLocalStorage hook to manage data in the local storage in a reactive way.

import { createContext, useEffect } from "react"; 
// Importing createContext to create the authentication context and useEffect for side effects in function components.

import { jwtDecode } from "jwt-decode"; 
// Importing jwtDecode function to decode the JWT token and extract user information.

import { useNavigate, useLocation } from "react-router-dom"; 
// Importing hooks from react-router-dom to handle navigation and to get the current location (URL path).

export const AuthContext = createContext(); 
// Creating the AuthContext to share authentication-related data throughout the app.

export const AuthContextProvider = ({ children }) => { 
  // AuthContextProvider is a wrapper component that provides authentication-related state to the rest of the application.
  
  const [auth, saveAuth] = useLocalStorage("auth", {}); 
  // useLocalStorage hook is used to persist `auth` state (which holds the token) in local storage.
  // `saveAuth` is the function to update this state in local storage.

  const [user, setUser] = useLocalStorage("user", {}); 
  // useLocalStorage hook to persist `user` state (which holds the user info) in local storage.

  const location = useLocation(); 
  // useLocation hook provides access to the current location object, which includes the current pathname.

  const navigate = useNavigate(); 
  // useNavigate hook is used to programmatically navigate to different routes in the app.

  useEffect(() => { 
    // useEffect hook is used to run side-effects based on changes in dependencies.
    // This effect checks if the user is authorized when the page changes.

    const checkUser = async () => { 
      // The checkUser function checks if the user is logged in and their token is valid.

      if (
        location.pathname.includes("backoffice") &&
        !location.pathname.includes("login")
      ) {
        // If the current path includes "backoffice" but not "login", check if the user has a valid token.

        if (auth.token !== undefined) { 
          // If there is a token saved in the `auth` state (meaning the user has logged in previously), make an API request to check if the token is still valid.
          let response = await fetch("http://localhost:3042/auth/token", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${auth.token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: auth.token }),
          });

          let result = await response.json(); 
          // Parse the response data to check if the token is valid.

          if (result.message === "Token Expired") {
            // If the token is expired, clear the auth and user data, and navigate to the login page.
            saveAuth({});
            setUser({});
            return navigate("/login");
          } else {
            setUser(result.data); 
            // If the token is valid, set the user data.
          }
        } else {
          return navigate("/login"); 
          // If there's no token, navigate to the login page.
        }
      }
    };

    checkUser(); 
    // Call the checkUser function when the component mounts or when the location/pathname or token changes.
  }, [location.pathname, auth.token, navigate, saveAuth]); 
  // Dependencies: effect runs when these values change.

  const token = auth.token ? auth.token : ""; 
  // If there is a valid token, use it. Otherwise, use an empty string.

  const signedIn = auth.token !== undefined; 
  // Boolean value indicating if the user is signed in (based on the presence of a token).

  const signIn = async (email, password) => { 
    // signIn function handles the user login by sending an API request with the user's credentials (email & password).
    
    let response = await fetch("http://localhost:3042/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    let result = await response.json(); 
    // Parse the response data from the server.

    const user = jwtDecode(result.data.token); 
    // Decode the token received from the server to extract the user information.

    saveAuth({ token: result.data.token }); 
    // Save the received token in local storage.

    setUser(user); 
    // Save the decoded user data in local storage.

    navigate("/backoffice"); 
    // After a successful login, navigate to the backoffice (protected route).

    return user; 
    // Return the user data for further use.
  };

  const getUser = () => { 
    // getUser function retrieves the current user from the decoded token.
    return token !== "" ? jwtDecode(token) : {}; 
    // If there's a token, decode it and return the user data. Otherwise, return an empty object.
  };

  const signOut = () => { 
    // signOut function logs out the user by clearing the token and user data from local storage.
    saveAuth({}); 
    setUser({}); 
  };

  const value = { token, user, getUser, signIn, signOut, signedIn }; 
  // The `value` object contains all the functions and state that will be provided to the context consumers.

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; 
  // Wrapping the children components with the AuthContext.Provider so they can access the auth-related state and functions.
};
