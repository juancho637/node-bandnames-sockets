const { io } = require("../index");
const Band = require("../models/band");
const Bands = require("../models/bands");

const bands = new Bands();

bands.addBand(new Band("banda1"));
bands.addBand(new Band("banda2"));
bands.addBand(new Band("banda3"));
bands.addBand(new Band("banda4"));

io.on("connection", (client) => {
  console.log("Cliente conectado");

  client.emit("active-bands", bands.getBands());

  client.on("vote-band", (band) => {
    bands.voteBand(band.id);
    io.emit("active-bands", bands.getBands());
  });

  client.on("add-band", (band) => {
    bands.addBand(new Band(band.name));
    io.emit("active-bands", bands.getBands());
  });

  client.on("delete-band", (band) => {
    bands.deleteBand(band.id);
    io.emit("active-bands", bands.getBands());
  });

  client.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});
