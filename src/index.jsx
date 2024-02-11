// import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

// import { useLocation } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Auth0Provider
        domain="dev-lwg87s1hofw27zst.us.auth0.com"
        clientId="9zIm0OCLQIRb8HOJdqenwYKf9qpaCdXR"
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <App />
    </Auth0Provider>
);
