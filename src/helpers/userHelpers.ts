import { IncomingMessage } from "http";
import dbType from "../types/dbType";

const usersPathRegExp = /^\/users\//;
const validationUuidRegExp =
  /^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/i;

export const getUserId = (req: IncomingMessage) =>
  (req.url || "").replace(usersPathRegExp, "");

export const haveUserId = (req: IncomingMessage) => getUserId(req).length > 0;

export const isUserIdValid = (userId: string) =>
  validationUuidRegExp.test(userId);

export const getUser = (db: dbType, userId: string) =>
  db.find((elem) => elem.id === userId);
