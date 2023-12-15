import * as servicioNotas from "../services/notes-services.js";

  export function crearNota(req, res, next) {
    try{
      if(req.body.nombreArchivo !== undefined && req.body.contenido !== undefined && req.body.nombreArchivo !== '' && req.body.contenido !== ''){
        servicioNotas.crearNota(req.body.nombreArchivo, req.body.contenido);
        res.status(200).send("Nota creada");
      } else {
        throw Error;
      }
    } catch(error){
      console.log(error);
      error.status = 400;
      
      if(!req.body.nombreArchivo && !req.body.contenido){
        error.message = 'No se ha especificado ni el nombre de la nota ni su contenido'
      } else if(!req.body.nombreArchivo){
        error.message = 'No se ha especificado el nombre de la nota'
      } else if(!req.body.contenido){
        error.message = 'No se ha especificado el contenido de la nota'
      }

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
      error.message = `La nota ${nombreArchivo} no ha sido encontrada`;
      next(error);
    }
  }

  export function actualizarNota(req, res, next) { 
    try{
      servicioNotas.actualizarNota(req.params.nombreArchivo, req.body.contenido);
      res.status(200).send("Nota actualizada");
    } catch(error) {
      console.log(error);
      error.status = 404;
      error.message = `La nota ${req.params.nombreArchivo} no existe`;
      next(error);
    }
  }

  export function borrarNota(req, res, next) {
    try{
      servicioNotas.borrarNota(req.params.nombreArchivo);
      res.status(200).send("Nota borrada");
    } catch(error){
      console.log(error);
      error.status = 404;
      error.message = `La nota ${req.body.nombreArchivo} no existe`;
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
