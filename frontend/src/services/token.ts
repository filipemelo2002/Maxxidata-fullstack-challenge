export const getToken = (): string => localStorage.getItem('@Token') || '';

export const saveToken = (token: string): void =>
  localStorage.setItem('@Token', token);
