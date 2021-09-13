const {response, request} = require('express');

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.status(400).json( {
        ok: true, //esta opcion es opcional
        msg: 'put API - Controller',
        id
    })
}

const usuariosDelete = ( req, res = response ) => {
   
    res.json( {
        ok: true, //esta opcion es opcional
        msg: 'delete API - Controller'
    } );
    
}

const usuariosGet = ( req = request, res = response ) => {

    const {q, nombre = "No name", apikey, page= 1, limit} = req.query;
   
    res.json( {
        ok: true, //esta opcion es opcional
        msg: 'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit,
    } );
    
}

const usuariosPatch = ( req, res = response ) => {
   
    res.json( {
        ok: true, //esta opcion es opcional
        msg: 'delete API - Controller'
    } );
    
}

const usuariosPost = ( req, res = response ) => {

    const {nombre, edad} = req.body;
   
    res.json( {
        ok: true, //esta opcion es opcional
        msg: 'Post API - Controller',
        nombre,
        edad
    } );
    
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosDelete,
    usuariosPut,
}

 






