import express from "express";
import { createServer } from "http"

// Socket.io
import { Server } from "socket.io";

const app = express();
const server = createServer(app)
const io = new Server(server);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));
app.set("view engine", "ejs")

app.get("/chat", (req, res) => {
    res.render("chat")
})

io.on("connection", (socket) => {
    socket.on("chat-message", (msg) => {
        if (socket.data.username && msg) {
            socket.broadcast.emit("message", {
                message: msg,
                user: socket.data.username,
            });
        }
    });

    socket.on("login", (msg) => {
        socket.data = { username: msg };
        socket.broadcast.emit("newuser", msg);
    });

    socket.on("typing", (typing) => {
        socket.broadcast.emit("typingnow", { typing, username: socket.data.username });
    });
});
server.listen(3000, () => {
    console.log("Application started at 3000")
})