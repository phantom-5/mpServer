const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");

app = express();
app.use(express.json());
app.use(cors());

const httpServer = createServer(app)
const io = new Server(httpServer,{
    cors:{origin:'*'},
    transports: ['websocket','polling']
})


app.get('/',async(req,res)=>{
    res.json({success:'Endpoint Works!'})
})

io.on('connection',(socket)=>{
    socket.on('From Phone',(...msg)=>{
        console.log('From Phone',...msg)
    })
    socket.on('Accelerometer Reading',(...msg)=>{
        console.log('AR',...msg)
    })
})

const PORT = process.env.PORT || 5000; //use PORT not port
httpServer.listen(PORT, () => {
  console.log("Listening...");
});
