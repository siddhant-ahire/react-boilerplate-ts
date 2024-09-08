export type AuthStatus = {
  isAuthenticated: boolean;
  userId: string | null;
};

export type LoginPayload = {
  user_email: string;
  user_password: string;
};

export type GoogleLoginPayload = {
  token: string;
};
