import * as servicioNotas from "../services/notes-services.js";

  export function crearNota(req, res) {
    try{
      servicioNotas.crearNota(req.body.nombreArchivo, req.body.contenido);
    } catch(error){
      console.log(error);
    }
  }

  export function leerNota(req, res, next) {
    try{
      const nota = servicioNotas.leerNota(req.params.nombreArchivo);
    } catch(error){
      error.status = 404;
      console.log(error);
      next(error);
      
    }
  }

  export function actualizarNota(req, res) {
    try{
      servicioNotas.actualizarNota(req.body.nombreArchivo, req.body.contenido);
    } catch(error) {
      console.log(error);
    }
  }

  export function borrarNota(req, res) {
    try{
      servicioNotas.borrarNota(req.params.nombreArchivo);
    } catch(error){
      console.log(error);
    }
  }

  export function listarNotas(req, res) {
    try{
      servicioNotas.listarNotas();
    } catch(error){
      console.log(error);
    }
  }
