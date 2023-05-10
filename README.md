# Documentación de Simulación check-in Aerolínea

**Tabla de contenido**

- [Propósito y alcance de la API](#propósito-y-alcance-de-la-api)
- [¿Cómo arrancar el proyecto?](#¿cómo-arrancar-el-proyecto)
- [Autenticación y seguridad](#autenticación-y-seguridad)
- [Endpoints de la API](#endpoints-de-la-api)
- [Formato de respuesta](#formato-de-respuesta)
- [Información técnica](#información-técnica)

## Propósito y alcance de la API

La API ha sido desarrollada para emular la funcionalidad de un proceso de check-in automático para asignar asientos a los pasajeros de un vuelo.

## ¿Cómo arrancar el proyecto?

1. **Clona el repositorio:**

```bash
git clone git@github.com:TU_USUARIO/bsale-check-in-simulation.git
```

2. **Instala las dependencias:**

```bash
npm install
# o
yarn install
```

3. **Agrega las variables de entorno:**

- Crea un archivo .env y dentro coloca las respectivas credenciales para la base de datos.

4. **Ejecuta el proyecto:**

```bash
npm start
# o
yarn start
```

## Autenticación y seguridad

La API se ha hecho pública para propósitos de prueba técnica.

## Endpoints de la API

Método: GET

Ruta: /flights/:id/passengers

Recibe como parámetro el ID del vuelo.

## Formato de respuesta

La API devuelve respuestas en formato JSON. A continuación se presentan algunos ejemplos de respuestas:

### Respuesta exitosa:

```json
{
    "code": 200,
    "data": {
        "flightId": 1,
        "takeoffDateTime": 1688207580,
        "takeoffAirport": "Aeropuerto Internacional Arturo Merino Benitez, Chile",
        "landingDateTime": 1688221980,
        "landingAirport": "Aeropuerto Internacional Jorge Cháve, Perú",
        "airplaneId": 1,
        "passengers": [
            {
                "passengerId": 90,
                "dni": 983834822,
                "name": "Marisol",
                "age": 44,
                "country": "México",
                "boardingPassId": 24,
                "purchaseId": 47,
                "seatTypeId": 1,
                "seatId": 1
            },
            {...}
        ]
    }
}
```

### Vuelo no encontrado:

```json
{
 "code": 404,
 "data": {}
}
```

### En caso de error:

```json
{
 "code": 400,
 "errors": "could not connect to db"
}
```

## Información técnica

- node.js: 16.17.0
- express.js: 4.18.2
- dotenv: 16.0.3
- mysql2: 2.3.3
