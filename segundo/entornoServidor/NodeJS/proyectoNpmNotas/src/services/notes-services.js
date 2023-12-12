import * as fs from "fs";
import path from "path";
import Nota from "../models/notaModelo.js";

export function crearNota(nombreArchivo, contenido) {
    const nota = new Nota(nombreArchivo, contenido);
    const filePath = path.join("./notas", `${nota.nombreArchivo}.note`);
    fs.writeFileSync(filePath, nota.contenido);
}

export function leerNota(nombreArchivo) {
    const directorioNotas = path.join("./notas");
    const notaPath = path.join(directorioNotas, `${nombreArchivo}.note`);
    return fs.readFileSync(notaPath, "utf-8");
}

export function actualizarNota(nombreArchivo, contenido) {
    const filePath = path.join("./notas", `${nombreArchivo}.note`);    
    fs.writeFileSync(filePath, contenido);
}

export function borrarNota(nombreArchivo) {
    const filePath = path.join("./notas", `${nombreArchivo}.note`);    
    fs.unlinkSync(filePath);
}

export function listarNotas() {
    const directorioNotas = path.resolve("./notas");
    const archivos = fs.readdirSync(directorioNotas);
    const notas = archivos.filter((file) => file.endsWith(".note"));
    return notas.length > 0 ? notas : "No hay notas creadas";
}
