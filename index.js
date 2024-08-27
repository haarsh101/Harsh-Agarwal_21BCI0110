const http=require("http")
const express=require("express")
const app=express()
const server=http.createServer(app)
const port=5000
const path=require("path")
const Server=require("socket.io")
const io=new Server(server)
io.on('connection',(client)=>{
    socket.on("message",(message)=>{
        io.emit("message",message)
    })
    console.log('person B connected',socket.id)
});
app.use(express.static(path.resolve("./public")))
app.get("/",(req,res)=>{
    return res.sendFile("/public/index.html")
})
server.listen(port,()=>console.log(`Server started at ${port}`))


