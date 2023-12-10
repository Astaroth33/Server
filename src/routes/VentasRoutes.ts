import { Router } from 'express';
import { ventasController } from '../controllers/VentasController';
import { validarToken } from '../middleware/auth';

class VentasRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        //this.router.get('/',(req,res) => res.send('probando ruta'));
        this.router.get('/mostrarVentas/',validarToken,ventasController.mostrarVentas);
        this.router.get('/ventaUsuario/:id',validarToken,ventasController.ventaUsuario);
        this.router.get('/totalPagado/:id_usuario',validarToken,ventasController.totalPagado);
        this.router.post('/ingresaVenta/',validarToken,ventasController.ingresaVenta);
        this.router.delete('/eliminarVenta/:codigo',validarToken,ventasController.eliminarVenta);

    }
}
const ventasRoutes= new VentasRoutes();
export default ventasRoutes.router;