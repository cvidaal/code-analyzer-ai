import { Router } from "express";
import { AnalyzeRoutes } from "./analyze/routes";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/analyze", AnalyzeRoutes.routes);
    router.use("/api/auth", AuthRoutes.routes);

    return router;
  }
}
