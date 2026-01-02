import { Request, Response } from "express";

export class AnalyzeController {
  constructor() {}

  analyze(req: Request, res: Response) {
    return res.json("Analyze");
  }
}
