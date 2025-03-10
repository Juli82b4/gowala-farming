import { useContext } from "react"; 
// Importing the `useContext` hook from React. This hook allows us to access the value provided by a context.

import { AuthContext } from "./AuthContext"; 
// Importing the `AuthContext`, which holds the authentication-related data and functions, from the AuthContext file.

export const useAuthContext = () => useContext(AuthContext); 
// Creating a custom hook `useAuthContext` that uses `useContext` to access the value of the `AuthContext`.
// This custom hook makes it easier to access authentication data like the token and user info in any component that needs it.
