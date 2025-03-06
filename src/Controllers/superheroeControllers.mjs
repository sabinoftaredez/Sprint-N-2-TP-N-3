import mongoose from 'mongoose';
import { obtenerSuperheroePorId, buscarSuperheroePorAtributo, obtenerSuperheroeMayoresDe30, obtenerTodosLosSuperheroe } from '../Services/superheroeService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroe } from '../View/responseView.mjs';
export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
// Verificar si el ID es un ObjectId válido (Recomendación de la AI para utilizar el id de la base de datos de MongoDB).
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: 'ID no válido' });
        }
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({ message: 'Superhéroe no encontrado' });
        }
        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).send(superheroeFormateado);
        } catch (error) {
            res.status(500).send({ message: 'Error al obtener superhéroe por ID', error: error.message });
    }        
}
export async function buscarSuperheroePorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroe = await buscarSuperheroePorAtributo(atributo, valor);
        if (superheroe.length === 0) {
            return res.status(404).send({ message: 'Superhéroes no encontrados' });
        }
        const superheroeFormateados = renderizarListaSuperheroe(superheroe);
        res.status(200).send(superheroeFormateados);
    } catch (error) {
        res.status(500).send({ message: 'Error al buscar superhéroes por atributo', error: error.message });
   }
}
export async function obtenerSuperheroeMayoresDe30Controller(req, res) {
    try {
        const superheroe = await obtenerSuperheroeMayoresDe30();
        if (superheroe.length === 0) {
            return res.status(404).send({ message: 'Superhéroes no encontrados' });
        }
        const superheroeFormateados = renderizarListaSuperheroe(superheroe);
        res.status(200).send(superheroeFormateados);
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener superhéroes mayores de 30 años', error: error.message });
   }
}
export async function obtenerTodosLosSuperheroeController(req, res) {
    try {
        const superheroe = await obtenerTodosLosSuperheroe();
        if (superheroe.length === 0) {
            return res.status(404).send({ message: 'Superhéroes no encontrados' });
        }
        const superheroeFormateados = renderizarListaSuperheroe(superheroe);
        res.status(200).send(superheroeFormateados);
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener todos los superhéroes', error: error.message });
    }
}