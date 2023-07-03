import getHandler from "./modules/getHandler";
import { IncomingMessage, ServerResponse } from "http";
jest.mock("./helpers/db", () => []);

describe("API Methods Test", () => {
  test("GET /users should return an empty array", () => {
    let endMessage = "";
    const setEndMessage = (message: any) => {
      endMessage += message;
    };
    const req = { url: "/users" };
    const res = {
      statusCode: 0,
      setHeader: (
        name: string,
        value: string | number | readonly string[]
      ) => {},
      end: (chunk: any, cb?: (() => void) | undefined) => {
        setEndMessage(chunk);
      },
    };
    getHandler(
      req as IncomingMessage,
      res as ServerResponse<IncomingMessage> & {
        req: IncomingMessage;
      }
    );
    expect(JSON.parse(endMessage)).toStrictEqual([]);
    expect(res.statusCode).toEqual(200);
  });

  test("GET /users/1 should return error 'Invalid User Id'", () => {
    let endMessage = "";
    const setEndMessage = (message: any) => {
      endMessage += message;
    };
    const req = { url: "/users/1" };
    const res = {
      statusCode: 0,
      setHeader: (
        name: string,
        value: string | number | readonly string[]
      ) => {},
      end: (chunk: any, cb?: (() => void) | undefined) => {
        setEndMessage(chunk);
      },
    };
    getHandler(
      req as IncomingMessage,
      res as ServerResponse<IncomingMessage> & {
        req: IncomingMessage;
      }
    );
    expect(endMessage).toEqual("Invalid User Id");
    expect(res.statusCode).toEqual(400);
  });

  test("GET /users/123e4567-e89b-12d3-a456-426655440000 should return error 'User doesnt exist'", () => {
    let endMessage = "";
    const setEndMessage = (message: any) => {
      endMessage += message;
    };
    const req = { url: "/users/123e4567-e89b-12d3-a456-426655440000" };
    const res = {
      statusCode: 0,
      setHeader: (
        name: string,
        value: string | number | readonly string[]
      ) => {},
      end: (chunk: any, cb?: (() => void) | undefined) => {
        setEndMessage(chunk);
      },
    };
    getHandler(
      req as IncomingMessage,
      res as ServerResponse<IncomingMessage> & {
        req: IncomingMessage;
      }
    );
    expect(endMessage).toEqual("User doesnt exist");
    expect(res.statusCode).toEqual(404);
  });

  test("GET /sad should return error 'Non-existing GET endpoint'", () => {
    let endMessage = "";
    const setEndMessage = (message: any) => {
      endMessage += message;
    };
    const req = { url: "/sad" };
    const res = {
      statusCode: 0,
      setHeader: (
        name: string,
        value: string | number | readonly string[]
      ) => {},
      end: (chunk: any, cb?: (() => void) | undefined) => {
        setEndMessage(chunk);
      },
    };
    getHandler(
      req as IncomingMessage,
      res as ServerResponse<IncomingMessage> & {
        req: IncomingMessage;
      }
    );
    expect(endMessage).toEqual("Non-existing GET endpoint");
    expect(res.statusCode).toEqual(404);
  });
});
