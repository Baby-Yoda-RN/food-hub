export type THandleLogin = (email: string, password: string) => Promise<{
    token:  string | undefined
}>;
