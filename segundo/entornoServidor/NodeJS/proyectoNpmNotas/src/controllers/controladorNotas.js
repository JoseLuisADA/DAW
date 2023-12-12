import * as servicioNotas from "../services/notes-services.js";

// PEDNIENTE ENVIAR CODIGOS DE ESTADO ERRONEOS CORRECTOS EN CADA FUNCIÓN

  export function crearNota(req, res) {
    try{
      servicioNotas.crearNota(req.body.nombreArchivo, req.body.contenido);
      res.status(200).send("Nota creada");
    } catch(error){
      console.log(error);
      next(error);
    }
  }

  export function leerNota(req, res, next) {
    try{
      const nota = servicioNotas.leerNota(req.params.nombreArchivo);
      res.status(200).send(nota);
    } catch(error){
      error.status(404);
      next(error);
    }
  }

  export function actualizarNota(req, res) { 
    try{
      servicioNotas.actualizarNota(req.body.nombreArchivo, req.body.contenido);
      res.status(200).send("Nota actualizada");
    } catch(error) {
      console.log(error);
      next(error);
    }
  }

  export function borrarNota(req, res) {
    try{
      servicioNotas.borrarNota(req.params.nombreArchivo);
      res.status(200).send("Nota borrada");
    } catch(error){
      console.log(error);
      next(error);
    }
  }

  export function listarNotas(req, res) {
    try{
      const notas = servicioNotas.listarNotas();
      res.status(200).send(notas);
    } catch(error){
      console.log(error);
      next(error);
    }
  }
