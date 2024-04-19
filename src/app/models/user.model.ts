export interface IUser {
  email: string;
  password: string;
  fullName: string;
  registedDay: Date;
}

export type TypeAuthState = 'authenticated' | 'not-authenticated';