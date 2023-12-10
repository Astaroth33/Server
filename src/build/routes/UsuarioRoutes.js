"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = require("../controllers/UsuarioController");
const auth_1 = require("../middleware/auth");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/',(req,res) => res.send('probando ruta'));
        this.router.get('/mostrarTodosUsuarios/', auth_1.validarToken, UsuarioController_1.usuariosController.mostrar_todos_usuarios);
        this.router.get('/obtenerUsuario/:id', auth_1.validarToken, UsuarioController_1.usuariosController.listOne);
        this.router.post('/crearUsuario/', auth_1.validarToken, UsuarioController_1.usuariosController.createUsuario);
        this.router.put('/actualizarUsuario/:id', auth_1.validarToken, UsuarioController_1.usuariosController.actualizarUsuario);
        this.router.delete('/eliminarUsuario/:id', auth_1.validarToken, UsuarioController_1.usuariosController.eliminarUsuario);
        this.router.post('/ValidarUsuario/', auth_1.validarToken, UsuarioController_1.usuariosController.ValidarUsuario);
        //this.router.get('/listarUsuariosRol/:id',usuariosController.listarUsuariosRol);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
