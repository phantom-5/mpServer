const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const socketIo = require("socket.io");

app = express();
app.use(express.json());


const httpServer = createServer(app)
const io = socketIo(httpServer)

app.use(cors({origin:'*'}));


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
