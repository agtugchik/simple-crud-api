export type userDb = {
  id: string;
  username: string;
  age: number;
  hobbies: Array<string>;
};

export type dbType = Array<userDb>;

export type userRes = {
  username: string;
  age: number;
  hobbies: Array<string>;
};