import express from "express";
import cookieParser from "cookie-parser";

//Fix para __direname
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { methods as authentication } from "./controllers/authentication.controller.js";
import { methods as authorization } from "./middlewares/authorization.js";

//server
const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en el puerto",app.get("port"));

//Configuración
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cookieParser());

//Rutas
app.get("/",authorization.soloPublico,(req,res)=> res.sendFile( __dirname + "/pages/home.html"));
app.get("/login",authorization.soloPublico,(req,res)=> res.sendFile( __dirname + "/pages/login.html"));
app.get("/register",authorization.soloPublico,(req,res)=> res.sendFile( __dirname + "/pages/register.html"));
app.get("/sidebar",authorization.soloPublico,(req,res)=> res.sendFile( __dirname + "/pages/sidebar.html"));
app.get("/admin",authorization.soloAdmin,(req,res)=> res.sendFile( __dirname + "/pages/admin/admin.html"));
app.get("/tbl_producto",authorization.soloPublico,(req,res)=> res.sendFile( __dirname + "/pages/tbl_producto.html"));
app.get("/crearProducto",authorization.soloPublico,(req,res)=> res.sendFile( __dirname + "/pages/crearProducto.html"));
app.post("/api/login",authentication.login);
app.post("/api/register",authentication.register);