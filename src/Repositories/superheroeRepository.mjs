import superheroe from "../Models/superheroe.mjs";
import IRepository from "./IRepository.mjs";
class SuperheroeRepository extends IRepository {
    async obtenerPorId(id) {
        return await superheroe.findById(id);
    }
    async obtenerTodos() {
        return await superheroe.find();
    }
    async buscarPorAtributo(atributo, valor) {
        return await superheroe.find({ [atributo]: valor });
    }
    async obtenerMayoresDe30() {
        return await superheroe.find({ edad: { $gt: 30 } });
    }
}
export default new SuperheroeRepository();