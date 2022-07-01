import { LoggedUser } from '@src/store/slices/current/types';

export type Response = { data: LoggedUser | null; error: string | null };
export type OnError = (message: string) => void;
