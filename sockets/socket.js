const { io } = require("../index");

io.on("connection", (client) => {
  console.log("Cliente conectado");

  client.on("mensaje", (payload) => {
    console.log(payload);
    io.emit("mensaje", { admin: "nuevo mensaje" });
  });

  client.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});
