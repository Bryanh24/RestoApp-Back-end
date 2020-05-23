var request = require("supertest"),
  app = require("../index");

const req = request("http://localhost:3000");
//const req = request(app);

describe("empleados", function () {
  it("get employees", function (done) {
    this.timeout(10000);
    req
      .get("/api/empleado")
      .expect("Content-Type", /json/)
      .expect(
        JSON.stringify([
          {
            IdEmpleado: 2,
            idRol: 1,
            UsuarioEmpleado: "BRYAN",
            PasswordEmpleado:
              "$2a$10$ez5eLlBN8QXbiNyGP/iVEOwOV90glMF7z.0YtowbLt0LEWkdvw78a",
            NombreEmpleado: "BRYAN ALEXIS",
            ApellidoEmpleado: "HERNANDEZ",
            DireccionEmpleado: "ROSALES",
            TelefonoEmpleado: "6391242571",
            createdAt: "2020-05-07T02:37:06.000Z",
            updatedAt: "2020-05-12T04:19:48.000Z",
            rol: {
              idRol: 1,
              DescripcionRol: "ADMINISTRADOR",
              createdAt: "2020-04-24T01:20:45.000Z",
              updatedAt: "2020-05-01T22:49:57.000Z",
            },
          },
          {
            IdEmpleado: 3,
            idRol: 2,
            UsuarioEmpleado: "JUAN123",
            PasswordEmpleado:
              "$2a$10$taYkBocopWUAek/qJsMeNObHEdwchhm3TCXj3AqvGu1BXUrJo9cLC",
            NombreEmpleado: "JUAN",
            ApellidoEmpleado: "PEREZ",
            DireccionEmpleado: "MEOQUI",
            TelefonoEmpleado: "6391242571",
            createdAt: "2020-05-12T04:18:14.000Z",
            updatedAt: "2020-05-12T04:18:14.000Z",
            rol: {
              idRol: 2,
              DescripcionRol: "MESERO",
              createdAt: "2020-04-24T02:02:08.000Z",
              updatedAt: "2020-05-02T00:07:52.000Z",
            },
          },
        ])
      )
      .expect(200, done);
  });
});

describe("HOMPAGE", function () {
  it("Shoul get the Welcome Hompage", function (done) {
    this.timeout(10000);
    req
      .get("/")
      .expect('<H1 style="text-align: center">ResoApp SOLO PERONAL AUTORIZADO</H1>')
      .expect(200, done);
  });
});
