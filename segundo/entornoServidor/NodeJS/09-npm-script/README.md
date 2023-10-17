```json
{
  "name": "09-npm-script",
  "version": "1.0.0", // ,hjhkjh
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js",
    "clear:modules": "rimraf **/node_modules",
    "clear:locks": "rimraf **/package-lock.json",
    "clear": "npm run clear:test && npm run clear:locks && npm run clear:modules",
    "date": "echo %date%", 
    "crear:js": "node -e \"require('fs').writeFileSync('files/' + process.argv[1] + '.js', '', 'utf8');\"",
    "crear:carpeta": "node -e \"require('fs').mkdirSync('files/' + process.argv[1], { recursive: true });\"",
    "borrar": "node -e \"const fs = require('fs'), path = require('path'); function deleteFolderRecursive(p) { if (fs.existsSync(p)) { fs.readdirSync(p).forEach((file, index) => { const curPath = path.join(p, file); if (fs.lstatSync(curPath).isDirectory()) { deleteFolderRecursive(curPath); } else { fs.unlinkSync(curPath); } }); fs.rmdirSync(p); } } deleteFolderRecursive('files');\"",
    "borrar:js": "node -e \"const fs = require('fs'), path = require('path'); const dir = 'files'; fs.readdirSync(dir).forEach(file => { if (path.extname(file) === '.js') { fs.unlinkSync(path.join(dir, file)); } });\"",
    "imprimir:azul": "node --input-type=module -e \"import chalk from 'chalk'; console.log(chalk.blue(process.argv[1]));\"",
    "imprimir:rojo": "node --input-type=module -e \"import chalk from 'chalk'; console.log(chalk.red(process.argv[1]));\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## Scripts

- **`crear:js`** (Crea un archivo js con el nombre que pasemos como argumento) 
  - `npm run create:js -- nombreArchivo`

- **`crear:carpeta`** (Crea una carpeta con el nombre que pasemos como argumento) 
  - `npm run create:carpeta -- nombreCarpeta`

- **`borrar`** (Borra la carpeta files) 
  - `npm run borrar`

- **`borrar:js`** (Borra los archivos .js de la carpeta files) 
  - `npm run borrar:js`

- **`imprimir:azul`** (Imprime en azul el argumento que le pasemos) 
  - `npm run imprimir:azul -- "Tu texto aquí"`

- **`imprimir:rojo`** (Imprime en rojo el argumento que le pasemos) 
  - `npm run imprimir:rojo -- "Tu texto aquí"`

- **`imprimir:verde`** (Imprime en verde el argumento que le pasemos) 
  - `npm run imprimir:verde -- "Tu texto aquí"`

