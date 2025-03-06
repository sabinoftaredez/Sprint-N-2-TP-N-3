import superheroeRepository from "../Repositories/superheroeRepository.mjs";
// Rutas GET.
// Obtener Superhéroe por ID.
export async function obtenerSuperheroePorId(id) {
    return await superheroeRepository.obtenerPorId(id);
}
// Buscar Superhéroe por Atributo.
export async function buscarSuperheroePorAtributo(atributo, valor) {
    return await superheroeRepository.buscarPorAtributo(atributo, valor);
}
// Obtener Superhéroes mayores de 30 años.
export async function obtenerSuperheroeMayoresDe30() {
    return await superheroeRepository.obtenerMayoresDe30();
}
// Obtener todos los Superhéroes.
export async function obtenerTodosLosSuperheroe() {
    return await superheroeRepository.obtenerTodos();
}