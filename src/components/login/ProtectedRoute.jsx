import { Navigate } from "react-router-dom"; 
// Importing the `Navigate` component from react-router-dom, which is used to programmatically navigate to different routes.

const ProtectedRoute = ({ isAllowed, redirectTo = "/login", children }) => { 
  // ProtectedRoute component that checks if a user is allowed to access a route.
  // It takes three props:
  // - `isAllowed`: A boolean that determines if the user has access to the route.
  // - `redirectTo`: The route to redirect the user if they are not allowed (defaults to "/login").
  // - `children`: The child components that will be rendered if the user is allowed.

  if (!isAllowed) {
    // If `isAllowed` is false, meaning the user does not have permission to access the route,
    return <Navigate to={redirectTo} />; 
    // Redirect the user to the `redirectTo` path (default is "/login").
  }

  // If `isAllowed` is true, meaning the user has permission to access the route,
  return children; 
  // Render the children components passed to ProtectedRoute (i.e., the protected content).
};

export default ProtectedRoute; 
// Exporting the ProtectedRoute component so it can be used in other parts of the application.
