export interface UserState {
  username: string;
  email: string;
  password: string;
}

export const initialState: UserState = {
  username: '',
  email: '',
  password: '',
};
