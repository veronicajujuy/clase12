let autosImportados = require("./autos");

const concesionaria = {
  /* completar */
  autos: autosImportados,
  buscarAuto: function (patente) {
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
    let autosDisponibles = this.autos.filter(function (item) {
      return item.vendido === false;
    });
    return autosDisponibles;
  },
  autosNuevos: function () {
    let autosDisponibles = this.autosParaLaVenta();
    let autosNuevos = autosDisponibles?.filter(function (item) {
      return item.km < 100;
    });
    return autosNuevos;
  },
  listaDeVentas: function () {
    let autosVendidos = this.autos.filter(function (item) {
      return item.vendido === true;
    });
    let precioAutos = autosVendidos.map(function (item) {
      return item.precio;
    });
    return precioAutos;
  },
  totalDeVentas: function () {
    let ventaAutos = this.listaDeVentas();
    return ventaAutos.reduce(function (acc, item) {
      return acc + item;
    }, 0);
  },
  puedeComprar: function (auto, persona) {
    let valorCuota = auto.precio / auto.cuotas;
    console.log(valorCuota);
    if (
      persona.capacidadDePagoTotal >= auto.precio &&
      persona.capacidadDePagoEnCuotas >= valorCuota
    )
      return true;
    else return false;
  },
  autosQuePuedeComprar: function (persona) {
    let autosDisponibles = this.autosParaLaVenta();
    let autosPuedeComprar = autosDisponibles.filter((auto) =>
      this.puedeComprar(auto, persona)
    );
    return autosPuedeComprar;
  },
  // autosQuePuedeComprar: function (persona) {
  //   let autosDisponibles = this.autosParaLaVenta();

  //   function puedeComprarWrapper(auto, persona) {
  //     return this.puedeComprar(auto, persona);
  //   }

  //   let autosPuedeComprar = autosDisponibles.filter(function (auto) {
  //     return puedeComprarWrapper(auto, persona);
  //   });
  //   return autosPuedeComprar;
  // },
};

console.log(concesionaria.buscarAuto("1111"));
console.log(concesionaria.buscarAuto("JJK116"));
// console.log(concesionaria.venderAuto("APL123"));
// console.log(concesionaria.autosParaLaVenta());
// console.log(concesionaria.autosNuevos());
// console.log(concesionaria.listaDeVentas());
// console.log(concesionaria.totalDeVentas());
let persona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 30000,
  capacidadDePagoTotal: 120000,
};
let auto = {
  marca: "Toyota",
  modelo: "Corolla",
  precio: 150000,
  km: 0,
  color: "Blanco",
  cuotas: 12,
  anio: 2019,
  patente: "JJK116",
  vendido: false,
};
// console.log(concesionaria.puedeComprar(auto, persona));
// console.log(concesionaria.autosQuePuedeComprar(persona));
