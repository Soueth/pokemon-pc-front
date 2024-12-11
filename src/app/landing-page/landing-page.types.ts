export const SignTypes = ['sign-up', 'login'] as const;
export type SignTypes = typeof SignTypes[number];

export interface ILogin {
    email: string;
    password: string;
}

export interface ISignUp {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}