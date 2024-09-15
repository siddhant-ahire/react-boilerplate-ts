export type AuthStatus = {
  isAuthenticated: boolean;
  userId: string | null;
};

export type LoginPayload = {
  user_email: string;
  user_password: string;
};

export type RegisterPayload = {
  user_name: string;
  user_email: string;
  user_password: string;
};

export type ForgotPasswordPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  new_password: string;
  token: string;
};

export type GoogleLoginPayload = {
  token: string;
};
