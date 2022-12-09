# Git

## ¿Qué es?

Es un software de control de versiones diseñado pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente. 

Su propósito es llevar registro de los cambios en archivos de PC incluyendo coordinar el trabajo que varias personas realizan sobre archivos compartidos en un repositorio de código.

El diseño de Git mantiene una enorme cantidad de código distribuida y gestionada por mucha gente, que incide en numerosos detalles de rendimiento, y de la necesidad de rapidez en una primera implementación.

## Entre las características más relevantes se encuentran:

* Fuerte apoyo al desarrollo no lineal, por ende rapidez en la gestión de ramas y mezclado de diferentes versiones. Git incluye herramientas específicas para navegar y visualizar un historial de desarrollo no lineal.

+ Gestión distribuida. Git le da a cada programador una copia local del historial del desarrollo entero, y los cambios se propagan entre los repositorios locales. 

- Los cambios se importan como ramas adicionales y pueden ser fusionados en la misma manera que se hace con la rama local.

* Almacenamiento de la información menos pesada debido al guardado de cambios y no de archivos completos.

+ Los almacenes de información pueden publicarse.

- Gestión eficiente de proyectos grandes, dada la rapidez de gestión de diferencias entre archivos, entre otras mejoras de optimización de velocidad de ejecución.

* Compatibilidad con una amplia gama de herramientas de desarrollo.

## Repositorio :

Existen muchas órdenes de git que nos sirven para realizar diferentes funcionalidades:

`git init` Esto crea un subdirectorio nuevo llamado .git, el cual contiene todos los archivos necesarios del repositorio – un esqueleto de un repositorio de Git. Todavía no hay nada en tu proyecto que esté bajo seguimiento.

`git fetch` Descarga los cambios realizados en el repositorio online. Comprueba el estado del repositorio local en comparación con el repositorio online.

`git merge` Impacta en la rama en la que te encuentras los cambios realizados.

`git pull` Unifica los comandos fetch y merge en un único comando.

`git commit` Confirma los cambios realizados. El “mensaje” generalmente se usa para asociar al commit una breve descripción de los cambios realizados.

`git push` Sube la rama al servidor remoto.

`git status` Muestra el estado actual de la rama, como los cambios que hay sin commitear.


## .gitignore

### ¿Qué es?

Es un archivo local que generalmente se coloca en el directorio raíz de un proyecto. También puedes crear un archivo global .gitignore, y cualquier entrada en ese archivo se ignorará en todos tus repositorios de Git.

Para crear un archivo .gitignore local, crea un archivo de texto y asígnale el nombre ".gitignore" (recuerda incluir el . al principio). Luego, edita este archivo según sea necesario. Cada nueva línea debe incluir un archivo o carpeta adicional que quieras que Git lo ignore.

### Simbología :

`*` se utiliza como una coincidencia comodín.

`/` se usa para ignorar las rutas relativas al archivo .gitignore.

`#` es usado para agregar comentarios

### Ejemplo de como se vería un documento .gitignore :

#### #Ignora archivos del sistema Mac : 
.DS_store

#### #Ignora la carpeta node_modules :
node_modules

#### #Ignora todos los archivos de texto :
*.txt

#### #Ignora los archivos relacionados a API keys :
.env

#### #Ignora archivos de configuración SASS :
.sass-cache




