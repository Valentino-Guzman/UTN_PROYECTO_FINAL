export interface Login {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: {
        id: number;
        rol: string;
        name: string;
      };
}