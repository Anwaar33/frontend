export const environment = {
  production: false,

  // Base URL for all REST API calls (AuthController, GameController)
  apiUrl: 'http://localhost:5229/api',

  // SignalR hub endpoint for real-time game + chat
  hubUrl: 'http://localhost:5229/gamehub'
};
