import * as servicioNotas from "../services/notes-services.js";

// PENDIENTE ENVIAR CODIGOS DE ESTADO ERRONEOS CORRECTOS EN CADA FUNCIÓN

  export function crearNota(req, res, next) {
    try{
      servicioNotas.crearNota(req.body.nombreArchivo, req.body.contenido);
      res.status(200).send("Nota creada");
    } catch(error){
      console.log(error);
      next(error);
    }
  }

  export function leerNota(req, res, next) {
    const { nombreArchivo } = req.params;
    try{
      const nota = servicioNotas.leerNota(nombreArchivo);
      res.status(200).send(nota);
    } catch(error){
      error.status = 404;
      error.message = `Note with name ${nombreArchivo} not found`
      next(error);
    }
  }

  export function actualizarNota(req, res, next) { 
    try{
      servicioNotas.actualizarNota(req.body.nombreArchivo, req.body.contenido);
      res.status(200).send("Nota actualizada");
    } catch(error) {
      console.log(error);
      next(error);
    }
  }

  export function borrarNota(req, res, next) {
    try{
      servicioNotas.borrarNota(req.params.nombreArchivo);
      res.status(200).send("Nota borrada");
    } catch(error){
      console.log(error);
      next(error);
    }
  }

  export function listarNotas(req, res, next) {
    try{
      const notas = servicioNotas.listarNotas();
      res.status(200).send(notas);
    } catch(error){
      console.log(error);
      next(error);
    }
  }
