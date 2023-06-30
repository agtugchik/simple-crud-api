import { IncomingMessage } from "http";
import { dbType, userDb, userRes } from "../types/dbTypes";

const usersPathRegExp = /^\/users\//;
const validationUuidRegExp =
  /^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/i;

export const getUserId = (req: IncomingMessage) =>
  (req.url || "").replace(usersPathRegExp, "");

export const haveUserId = (req: IncomingMessage) =>
  usersPathRegExp.test(req.url || "") && getUserId(req).length > 0;

export const isUserIdValid = (userId: string) =>
  validationUuidRegExp.test(userId);

export const getUser = (db: dbType, userId: string) =>
  db.find((elem) => elem.id === userId);

export const isUserObjectValid = (obj: userRes) => {
  const validateNameRegExp = /^[a-z0-9]{3,20}$/i;
  return (
    typeof obj.username === "string" &&
    typeof obj.age === "number" &&
    Array.isArray(obj.hobbies) &&
    validateNameRegExp.test(obj.username) &&
    obj.hobbies.every((v) => typeof v === "string")
  );
};

export const updateUser = (db: dbType, userId: string, userObject: userRes) => {
  const index = db.findIndex((e) => e.id === userId);
  const updatedUser: userDb = { id: userId, ...userObject };
  db[index] = updatedUser;
  return updatedUser;
};

export const deleteUser = (db: dbType, userId: string) => {
  const index = db.findIndex((e) => e.id === userId);
  db.splice(index, 1);
};
