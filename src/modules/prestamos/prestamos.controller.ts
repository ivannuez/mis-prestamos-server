import { NextFunction, Request, Response } from "express";
import {
  PrestamosDestroyer,
  PrestamosFinder,
  PrestamosSaver,
  PrestamosUpdater,
} from "./services";
import { ErrorHandler } from "@middlewares/error_handler";

/**
 * Return all entities
 * @param req
 * @param res
 * @param next
 */
export async function index(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const finder = new PrestamosFinder();
    const r = await finder.findAll();
    res.status(200).send(r);
  } catch (error) {
    next(new ErrorHandler(503, "Error al obtener los datos"));
  }
}

/**
 * Return one instance of entity
 * @param req
 * @param res
 * @param next
 */
export async function show(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { id } = req.params;
    const finder = new PrestamosFinder();
    const r = await finder.findOne(id);
    res.status(200).send(r);
  } catch (error) {
    next(error);
  }
}

/**
 * Save an entity
 * @param req
 * @param res
 * @param next
 */
export async function store(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const saver = new PrestamosSaver();
    const r = await saver.store(req.body);
    res.status(200).send(r);
  } catch (error) {
    next(error);
  }
}

/**
 * Update an entity
 * @param req
 * @param res
 * @param next
 */
export async function update(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { id } = req.params;
    const updater = new PrestamosUpdater();
    const r = await updater.update(id, req.body);
  } catch (error) {
    next(error);
  }
}

/**
 * Destroy one instance of an entity
 * @param req
 * @param res
 * @param next
 */
export async function destroy(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { id } = req.params;
    const destroyer = new PrestamosDestroyer();
    const r = await destroyer.delete(id);
  } catch (error) {
    next(error);
  }
}
