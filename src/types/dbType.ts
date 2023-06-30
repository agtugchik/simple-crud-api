type user = {
  id: string;
  username: string;
  age: number;
  hobbies: Array<string>;
};

type dbType = Array<user>;

export default dbType;
