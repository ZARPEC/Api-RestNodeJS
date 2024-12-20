import { AgregarCliente } from "../../models/cliente/clienteModel.js";
import bcrypt from "bcryptjs";

export async function agregarCliente(req, res) {
    try{
        const nit = req.body.nit;
        const nombre_comercial = req.body.nombre_comercial;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const email = req.body.email;
        const rol_fk = req.body.rol_fk;
        const estado_fk = req.body.estado_fk;
        const nombreUsuario = req.body.nombreUsuario;
        const apellido = req.body.apellido;
        const pass = req.body.pass;
        const fechaNaciemiento = req.body.fechaNaciemiento;

        const salt = 10;
        
        bcrypt.hash(pass,salt,async (err,hash)=>{
            if(err){
                console.log(err);
                res.status(500).send("Ha ocurrido un error al crear la contraseaña");
            }else{
                const result = await AgregarCliente(
                    nit,
                    nombre_comercial,
                    direccion,
                    telefono,
                    email,
                    rol_fk,
                    estado_fk,
                    nombreUsuario,
                    apellido,
                    hash,
                    fechaNaciemiento
                );
                res.status(200).json(result);
            }
        });
    }
catch(err){
        console.log(err);
        res.status(500).send("Error al agregar el cliente");
    } 
}