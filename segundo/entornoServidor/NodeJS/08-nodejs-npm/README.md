npm init -y es para crear un package.json con los valores por defecto

Como comparar repositorios :

- Por fecha de creación  
- Cantidad de descargas semanales
- Que tenga licencia MIT que es de libre uso
- El tamaño
- Los Issues en el github 
- Fecha de actualización
- Cuantas Dependency tiene
- Cuantas Dependents tiene, que significa cuantos proyectos reconocidos utilizan ese repositorio 
- Utilizar un comparador npm (npm trends por ejemplo)

Al instalar un repositorio, en las dependencies del .json, quitar el ^ de la version de cada una de ellas para evitar actualizaciones automaticas y estropeen el codigo.

Se genera un package-lock.json que contiene TODA la información sobre lo que se ha instalado y ahí no modificamos nada, este archivo
es interesante para mantener un control de las versiones,

npm ci instala todos los paquetes con las mismas versiones que aparezcan en el package-lock.json

Si ponemos npm install [modulo que vamos a instalar]  

Si ponemos npm install (instala todas las dependencias que aparecen en el package.json)

Cuando cambiamos manualmente las versiones del package.json, tenemos que poner npm install para que las instale

Una version desglosada sería 1(mayo).2(patch).1(minor)

Para usar import en vez de required para usar librerias, en el package.json, hay que poner "type": "module",

Con el npm install -D  instalamos modulos en otra rama (develop) donde van a estar los modulos que vamos a usar para programar y no para que el proyecto funcione.

Con npx (modulo) (archivo.js) podemos usar modulos sin necesidad de instalarlos a modo de previsualización pero también se puede usar los instalados.

modulo faker te genera datos aleatorios como por ejemplo un nombre, un correo electronico, etc

lodash te da métodos adicionales o con otro tipo de algoritmo para los diferentes tipos para a lo mejor facilitar las cosas.

luxon 

bycript encripta texto

winston es para controlar los logs

eslint es para corregir el código (tabulaciones, puntos y coma faltantes)

axios es para hacer peticiones a APIS

para ejecutar un proyecto node es  node (nombreArchivo.js)

para ejecutar un script que hemos creado en el package.json, hay que poner en la terminal npm run (nombreScript)

para ejecutar el script start o test, no es necesario poner run, directamente valdría npm start o npm test

