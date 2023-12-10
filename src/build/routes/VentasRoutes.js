"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VentasController_1 = require("../controllers/VentasController");
const auth_1 = require("../middleware/auth");
class VentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/',(req,res) => res.send('probando ruta'));
        this.router.get('/mostrarVentas/', auth_1.validarToken, VentasController_1.ventasController.mostrarVentas);
        this.router.get('/ventaUsuario/:id', auth_1.validarToken, VentasController_1.ventasController.ventaUsuario);
        this.router.get('/totalPagado/:id_usuario', auth_1.validarToken, VentasController_1.ventasController.totalPagado);
        this.router.post('/ingresaVenta/', auth_1.validarToken, VentasController_1.ventasController.ingresaVenta);
        this.router.delete('/eliminarVenta/:codigo', auth_1.validarToken, VentasController_1.ventasController.eliminarVenta);
    }
}
const ventasRoutes = new VentasRoutes();
exports.default = ventasRoutes.router;
