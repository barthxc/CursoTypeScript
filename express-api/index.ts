import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(401).json({
    ok: false,
    msg: "No hay token en la petición",
  });
});

app.listen(port, () => {
  console.log(`Puesto escuchando en http://localhost:${port}`);
});
