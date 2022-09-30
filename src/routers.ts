import { Router } from "express";
import prestamosRouter from "@modules/prestamos/prestamos.routes";
import saldosRouter from "@modules/saldos/saldos.routes";

const router = Router();

router.use("/prestamos", prestamosRouter);
router.use("/saldos", saldosRouter);

const mainRouter = Router();
mainRouter.use("/api/v1", router);

export default mainRouter;
