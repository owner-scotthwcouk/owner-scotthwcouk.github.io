export const msalConfig = {
  auth: {
    clientId: "de999f0d-e0cb-43ae-b9bb-76b3dfefe016", // Replace with your Application (client) ID from Azure
    authority: "https://login.microsoftonline.com/common",
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  }
};

export const loginRequest = {
  scopes: ["User.Read"]
};
