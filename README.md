# .gitignore

## ¿Qué es?

Es un archivo local que generalmente se coloca en el directorio raíz de un proyecto. También puedes crear un archivo global .gitignore, y cualquier entrada en ese archivo se ignorará en todos tus repositorios de Git.

Para crear un archivo .gitignore local, crea un archivo de texto y asígnale el nombre ".gitignore" (recuerda incluir el . al principio). Luego, edita este archivo según sea necesario. Cada nueva línea debe incluir un archivo o carpeta adicional que quieras que Git lo ignore.

## Simbología :

`*` se utiliza como una coincidencia comodín.

`/` se usa para ignorar las rutas relativas al archivo .gitignore.

`#` es usado para agregar comentarios

## Ejemplos :

### Ignora archivos del sistema Mac : 
.DS_store

### Ignora la carpeta node_modules :
node_modules

### Ignora todos los archivos de texto :
*.txt

### Ignora los archivos relacionados a API keys :
.env

### Ignora archivos de configuración SASS :
.sass-cache




