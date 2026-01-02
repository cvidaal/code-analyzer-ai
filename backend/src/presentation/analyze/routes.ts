import { Router } from "express";
import { AnalyzeController } from "./controller";

export class AnalyzeRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new AnalyzeController();

    router.post("/", controller.analyze);

    return router;
  }
}
