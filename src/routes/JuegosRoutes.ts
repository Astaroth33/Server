import { Router } from 'express';
import { juegosController } from '../controllers/JuegosControllers';
import { validarToken } from '../middleware/auth';

class JuegosRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/mostrarJuegos/',validarToken,juegosController.mostrar_juegos);
        this.router.get('/juegosPlataforma/:plataforma',validarToken,juegosController.juegos_plataforma);
        this.router.post('/insertaJuego/',validarToken,juegosController.insertaJuego);
        this.router.put('/actualizarJuego/:id',validarToken,juegosController.actualizarJuego);
        this.router.delete('/eliminarJuego/:id',validarToken,juegosController.eliminarJuego);
    }
}
const juegosRoutes= new JuegosRoutes();
export default juegosRoutes.router;