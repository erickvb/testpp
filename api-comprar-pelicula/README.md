<!--
titulo: AWS registrar compra peliculas 
descripcion: Simple api que registra y lista compras de peliculas usando el servicio swapi

-->
# Deployar api con serverless

```sh
serverless config credentials --provider aws --key YOUR_AWS_ACCESS_KEY --secret YOUR_AWS_SECRET_KEY
sls deploy
```

# Consumir servicio registro compra method post
Api para registrar las compras de peliculas en dynamoDb

URL SERVICIO : https://your-api-id.execute-api.your-region.amazonaws.com/dev/compra/registrar



```bash
$ curl -d '{
    "cliente":
    {
    "nombres":"alejandro",
    "apellidos":"guitierres",
    "dni":"25540252"
    },
    "codigoPelicula":1,
    "cantidad":1
 }' -H "Content-Type: application/json" -X POST https://your-api-id.execute-api.your-region.amazonaws.com/dev/compra/registrar

```

Respuesta servicio

```sh
{
    "estado": 0,
    "mensaje": "La operacion se realizo satisfactoriamente",
    "id_transaccion": "53512270-2c64-11eb-9d22-118e7601c00a"
}
```

# Consumir servicio listar compra method get

Api para listar las compras de peliculas en dynamoDb
```bash 
$ curl  -X GET https://your-api-id.execute-api.your-region.amazonaws.com/dev/compra/listar

```