const app=require("http").createServer();
const io= module.exports.io= require("socket.io")(app);
const PORT=process.env.PORT || 5000;
const SocketManger=require("./SocketManager");
io.on("connection",SocketManger);
app.listen(PORT,()=>{
    console.log("conection on port :" + PORT);
})