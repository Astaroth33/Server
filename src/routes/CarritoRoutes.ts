import { Router } from 'express';
import { carritoController } from '../controllers/CarritoController';
import { validarToken } from '../middleware/auth';

class CarritoRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/mostrarCarritos/',validarToken,carritoController.mostrar_carritos);
        this.router.get('/carritoUsuario/:id_usuario',validarToken,carritoController.carritoUsuario);
        this.router.post('/agregaACarrito/',validarToken,carritoController.agregaACarrito);
        this.router.get('/totalAPagar/:id_usuario',validarToken,carritoController.totalAPagar);
        this.router.delete('/eliminarProducto/:id',validarToken,carritoController.eliminarProducto);
    }
}
const carritoRoutes= new CarritoRoutes();
export default carritoRoutes.router;