export interface LoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
    // rememberMe: ...;
    // firstName: string;
    // lastName: string;
}
