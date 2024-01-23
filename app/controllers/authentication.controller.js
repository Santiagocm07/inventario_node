import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import { connection } from "../conexion.js";

dotenv.config();

export const usuarios = [{
    user: "santi",
    email: "santi07@algo.com",
    password: "$2a$05$azyZTWEF.qocq4Nq.suJx.OYcoVUaCIwpqT0jHRINy8yen3hr5WD6"
}]

//función para crear nuevos usuarios
async function crearUsuarios(datos) {
    try {
      const sql = "INSERT INTO usuario VALUES (?, ?, ?, ?)";
      const values = ["", datos.user, datos.email, datos.password];
  
      connection.query(sql, values, (error, results) => {
        if (error) {
          console.error(error);
        } else {
          console.log(results);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

async function register(req, res) {
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
  
    if (!user || !email || !password) {
      return res
        .status(400)
        .send({ status: "Error", message: "Los campos estan incompletos" });
    }
  
    const usuarioARevisar = usuarios.find((usuario) => usuario.user === user);
    console.log(usuarioARevisar);
    if (usuarioARevisar) {
      return res
        .status(400)
        .send({ status: "Error", message: "Este usuario ya existe" });
    }
    const salt = await bcryptjs.genSalt(5);
    const hashPassword = await bcryptjs.hash(password, salt);
    const nuevoUsuario = {
      user,
      email,
      password: hashPassword,
    };
    crearUsuarios(nuevoUsuario);
    //   usuarios.push(nuevoUsuario);
    console.log(nuevoUsuario);
  
    return res.status(201).send({
      status: "ok",
      message: "Usuario ${nuevoUsuario.user} agregado",
      redirect: "/",
    });
  }

  

async function login(req,res){
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    if(!user || !password){
        return res.status(400).send({status:"Error",message:"Los campos estan incompletos"})
    }
    const usuarioARevisar = usuarios.find(usuario => usuario.user === user);
    if(!usuarioARevisar){
        return res.status(400).send({status:"Error",message:"Error durante login"})
    }
    const loginCorrecto = await bcryptjs.compare(password,usuarioARevisar.password);
    if(!loginCorrecto){
    return res.status(400).send({status:"Error",message:"Error durante login"})
    }
    const token = jsonwebtoken.sign(
        {user:usuarioARevisar.user},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRATION});

        const cookieOption = {
            expires: new Date (Date.now () + process.env.JWT_COOKIE_EXPIRES *24 *60 *60 *1000),
            Path: "/"
        }
        res.cookie("jwt",token,cookieOption);
        res.send({status:"ok",message:"Usuario loggeado",redirect:"/admin"})
}

/*async function register(req,res){
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    if(!user || !email || !password){
        return res.status(400).send({status:"Error",message:"Los campos estan incompletos"})
    }
    const usuarioARevisar = usuarios.find(usuario => usuario.user === user);
    if(usuarioARevisar){
        return res.status(400).send({status:"Error",message:"Este usuario ya existe"})
    }
    const salt = await bcryptjs.genSalt(5);
    const hashPassword = await bcryptjs.hash(password,salt);
    const nuevoUsuario ={
        user, email, password: hashPassword
    }
    usuarios.push(nuevoUsuario);
    console.log(usuarios);
    return res.status(201).send({status:"ok",message: `Usuario ${nuevoUsuario.user} agregado`,redirect:"/"})
}*/

export const methods = {
    login,
    register
}


