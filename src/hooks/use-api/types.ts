export type Response<T> = { data: T; error: string | null };
export type OnError = (message: string) => void;
