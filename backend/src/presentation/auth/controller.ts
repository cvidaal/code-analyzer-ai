import { Request, Response } from "express";

export class AuthController {
  constructor() {}

  login(req: Request, res: Response) {
    return res.json("Login");
  }
}
