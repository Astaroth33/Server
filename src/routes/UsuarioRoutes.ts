import { Router } from 'express';
import { usuariosController } from '../controllers/UsuarioController';
import { validarToken } from '../middleware/auth';

class UsuarioRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        //this.router.get('/',(req,res) => res.send('probando ruta'));
        this.router.get('/mostrarTodosUsuarios/',validarToken,usuariosController.mostrar_todos_usuarios);
        this.router.get('/obtenerUsuario/:id',validarToken,usuariosController.listOne);
        this.router.post('/crearUsuario/',validarToken,usuariosController.createUsuario);
        this.router.put('/actualizarUsuario/:id',validarToken,usuariosController.actualizarUsuario);
        this.router.delete('/eliminarUsuario/:id',validarToken,usuariosController.eliminarUsuario);
        this.router.post('/ValidarUsuario/',validarToken,usuariosController.ValidarUsuario);
        //this.router.get('/listarUsuariosRol/:id',usuariosController.listarUsuariosRol);
    }
}
const usuarioRoutes= new UsuarioRoutes();
export default usuarioRoutes.router;