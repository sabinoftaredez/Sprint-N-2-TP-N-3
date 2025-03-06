import express from 'express';
import {
    obtenerSuperheroePorIdController,
    buscarSuperheroePorAtributoController,
    obtenerSuperheroeMayoresDe30Controller,
    obtenerTodosLosSuperheroeController
} from '../Controllers/superheroeControllers.mjs';
const superheroeRoutes = express.Router();
superheroeRoutes.get('/superheroes/mayoresDe30', obtenerSuperheroeMayoresDe30Controller);
superheroeRoutes.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroePorAtributoController);
superheroeRoutes.get('/superheroes', obtenerTodosLosSuperheroeController);
superheroeRoutes.get('/superheroes/:id', obtenerSuperheroePorIdController);
export { superheroeRoutes };