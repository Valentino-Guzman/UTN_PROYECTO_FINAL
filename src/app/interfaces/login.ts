export interface Ilogin{
    email: string;
    password: string;
}

export interface ILoginResponse {
    statusCode: number;
    message: string;
    token: string;
}