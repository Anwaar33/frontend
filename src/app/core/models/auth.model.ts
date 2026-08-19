// Request body for POST /api/auth/register
export interface RegisterRequest {
  username: string;
  password: string;
}

// Request body for POST /api/auth/login
export interface LoginRequest {
  username: string;
  password: string;
}

// Response returned by both register and login
export interface AuthResponse {
  token: string;
  username: string;
}
