"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarritoController_1 = require("../controllers/CarritoController");
const auth_1 = require("../middleware/auth");
class CarritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarCarritos/', auth_1.validarToken, CarritoController_1.carritoController.mostrar_carritos);
        this.router.get('/carritoUsuario/:id_usuario', auth_1.validarToken, CarritoController_1.carritoController.carritoUsuario);
        this.router.post('/agregaACarrito/', auth_1.validarToken, CarritoController_1.carritoController.agregaACarrito);
        this.router.get('/totalAPagar/:id_usuario', auth_1.validarToken, CarritoController_1.carritoController.totalAPagar);
        this.router.delete('/eliminarProducto/:id', auth_1.validarToken, CarritoController_1.carritoController.eliminarProducto);
    }
}
const carritoRoutes = new CarritoRoutes();
exports.default = carritoRoutes.router;
