import { Request, Response } from 'express';
import pool from '../database'; //acceso a la base de datos
class VentasController {
    public async mostrarVentas(req: Request, res: Response): Promise<void> {
        const respuesta = await pool.query('SELECT * FROM ventas');
        res.json(respuesta);
    }

    public async ventaUsuario(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM ventas WHERE id_usuario = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'No tiene compras el usuario' });
    }
    //aqui va el crud
    public async ingresaVenta(req: Request, res: Response): Promise<void> {

        const parametross = {
            id_usuario: req.body.id_usuario,
            id_juego: req.body.id_juego,
            precio_juego: req.body.precio_juego,
            fecha_compra: new Date() // Utiliza new Date() para obtener la fecha actual
          };
          
          const consulta = 'INSERT INTO ventas SET ?';

        var resp = await pool.query(consulta, [parametross]);
        const parametros = req.body;
        resp = await pool.query('UPDATE ventas SET precio_juego = (SELECT precio FROM juegos WHERE id_juego = ?) WHERE id_usuario = ? AND id_juego = ?', [parametros.id_juego, parametros.id_usuario, parametros.id_juego]);
        const parametrosBiblio = {
            id_usuario: parametros.id_usuario,
            id_juego: parametros.id_juego,
            fecha_compra: parametros.fecha_compra
        }
        resp = await pool.query("INSERT INTO biblioteca set ?", [parametrosBiblio])
        resp = await pool.query('UPDATE biblioteca SET precio_juego = (SELECT precio FROM juegos WHERE id_juego = ?) WHERE id_usuario = ? AND id_juego = ?', [parametros.id_juego, parametros.id_usuario, parametros.id_juego]);
        res.json(resp);

        //res.json(null);
    }
    /*public async actualizarUsuario(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        //console.log(req.params);
        console.log(id);
        const resp = await pool.query("UPDATE usuario set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
        //res.json(null);
    }*/

    public async eliminarVenta(req: Request, res: Response): Promise<void> {
        const { codigo } = req.params;
        const resp = await pool.query(`DELETE FROM ventas WHERE codigo = ${codigo}`);
        res.json(resp);
    }

    public async totalPagado(req: Request, res: Response): Promise<void> {
        const { id_usuario } = req.params;
        const resp = await pool.query(`SELECT id_usuario,SUM(precio_juego) AS Total FROM ventas WHERE id_usuario = ${id_usuario}`);
        res.json(resp);
    }

}
export const ventasController = new VentasController();