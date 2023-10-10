import * as fs from 'node:fs';
import * as readline from 'node:readline';

// 1. Realizar programa que reciba por argumentos el nombre de un fichero e imprima su contenido

try{
    const contenidoArchivo = fs.readFileSync("C:/Users/selut/Documents/GitHub/DAW/segundo/entornoServidor/NodeJS/06-nodejs-native/ficheroDePrueba.txt", 'utf8');
    console.log(contenidoArchivo);
} catch (msg){
    console.log('No existe o no se puede leer este archivo.');
}

// 2. Descomponer una URL extrayendo: protocol, ipAdress, subDomain, domainName, folderTree, targetFile, argumentsFile.

function decomposeUrl(url) {
    try {
        const url = new URL(url);
        const domainParts = url.hostname.split('.');

        let protocol = url.protocol.replace(':', '');
        let ipAdress = null;
        let subDomain = null;
        let domainName = null;
        let folderTree = null;
        let targetFile = null;
        let argumentsFile = null;

        // IP address validation
        const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
        if (ipRegex.test(url.hostname)) {
            ipAdress = url.hostname;
        } else if (domainParts.length > 1) { // Guard against invalid domains like 'jsfiddle.net:80'
            subDomain = domainParts.length > 2 ? domainParts[0] : null;
            domainName = subDomain 
                ? domainParts.slice(1).join('.') 
                : domainParts.join('.');
        }

        // Folder tree, target file, and arguments file
        const pathParts = url.pathname.split('/').filter(p => p);
        folderTree = pathParts.length > 1 ? pathParts.slice(0, -1) : null;
        targetFile = pathParts.length > 0 ? pathParts[pathParts.length - 1] : null;
        argumentsFile = url.search ? url.search : null;

        return {
            protocol,
            ipAdress,
            subDomain,
            domainName,
            folderTree,
            targetFile,
            argumentsFile,
        };
    } catch (e) {
        console.error("Invalid URL provided", url);
        return null;
    }
}

console.log(decomposeUrl("https://www.google.com/search/test.js?ok=1"));

/*
3. Crear un editor de notas con Nodejs

• Tendrá un menú que permita:

1. Crear nueva nota
2. Editar nota existente
3. Eliminar nota
• Cada nota será un fichero de texto, con extensión .note
• Para editar una nota, habrá que imprimir la lista de notas disponibles y seleccionar una
• Cuando se está escribiendo una nota, ha de permitir continuar su edición hasta introducir dos
veces seguidas una linea en blanco.
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function createNote() {
    rl.question('Ingrese el nombre de la nota: ', (name) => {
        rl.question('Escriba su nota (para finalizar, presione "enter" dos veces): \n', function saveNote(content) {
            if (content.trim() === '') {
                rl.question('Está seguro que desea terminar la edición? (s/n): ', (answer) => {
                    if (answer.toLowerCase() === 's') {
                        rl.close();
                    } else {
                        rl.question('\nContinúe escribiendo su nota:\n', saveNote);
                    }
                });
            } else {
                fs.appendFileSync(`notes/${name}.note`, content + '\n');
                rl.question('', saveNote);
            }
        });
    });
}

function editNote() {
    fs.readdir('notes', (err, files) => {
        if (err) throw err;
        console.log('Seleccione una nota para editar: ');
        files.forEach((file, index) => {
            console.log(`${index + 1}. ${file}`);
        });
        rl.question('Número: ', (number) => {
            const fileName = files[number - 1];
            fs.readFile(`notes/${fileName}`, 'utf8', (err, data) => {
                if (err) throw err;
                console.log(`\nContenido actual de la nota:\n${data}`);
                rl.question('\nAñada más contenido a la nota:\n', (newContent) => {
                    fs.appendFileSync(`notes/${fileName}`, '\n' + newContent);
                    console.log('Nota actualizada.');
                    rl.close();
                });
            });
        });
    });
}

function deleteNote() {
    fs.readdir('notes', (err, files) => {
        if (err) throw err;
        console.log('Seleccione una nota para eliminar: ');
        files.forEach((file, index) => {
            console.log(`${index + 1}. ${file}`);
        });
        rl.question('Número: ', (number) => {
            const fileName = files[number - 1];
            fs.unlink(`notes/${fileName}`, (err) => {
                if (err) throw err;
                console.log('Nota eliminada.');
                rl.close();
            });
        });
    });
}

function mainMenu() {
    console.log('Seleccione una opción: ');
    console.log('1. Crear nueva nota');
    console.log('2. Editar nota existente');
    console.log('3. Eliminar nota');
    rl.question('Opción: ', (option) => {
        switch (option) {
            case '1':
                createNote();
                break;
            case '2':
                editNote();
                break;
            case '3':
                deleteNote();
                break;
            default:
                console.log('Opción no válida.');
                rl.close();
        }
    });
}

mainMenu();