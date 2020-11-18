const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const
    completado = {
        demand: false,
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea (True/False)'
    };

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de un por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}