"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JuegosControllers_1 = require("../controllers/JuegosControllers");
const auth_1 = require("../middleware/auth");
class JuegosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarJuegos/', auth_1.validarToken, JuegosControllers_1.juegosController.mostrar_juegos);
        this.router.get('/juegosPlataforma/:plataforma', auth_1.validarToken, JuegosControllers_1.juegosController.juegos_plataforma);
        this.router.post('/insertaJuego/', auth_1.validarToken, JuegosControllers_1.juegosController.insertaJuego);
        this.router.put('/actualizarJuego/:id', auth_1.validarToken, JuegosControllers_1.juegosController.actualizarJuego);
        this.router.delete('/eliminarJuego/:id', auth_1.validarToken, JuegosControllers_1.juegosController.eliminarJuego);
    }
}
const juegosRoutes = new JuegosRoutes();
exports.default = juegosRoutes.router;
