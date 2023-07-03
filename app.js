let autosImportados = require("./autos");

const concesionaria = {
  /* completar */
  autos: autosImportados,
  buscarAuto: function holaVero (patente) {
    let encontrado = this.autos.find(function (item) {
      return item.patente === patente;
    });
    if (encontrado) {
      return encontrado;
    } else return null;
  },
  venderAuto: function (patente) {
    let encontrado = this.buscarAuto(patente);
    if (encontrado) {
      encontrado.vendido = true;
    }
  },
  autosParaLaVenta: function () {
    let autosNoVendidos = this.autos.filter((auto) => auto.vendido === false); // [{},{}]
    return autosNoVendidos;
  },
};

let var1 = concesionaria.autosParaLaVenta();
