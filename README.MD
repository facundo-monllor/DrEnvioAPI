# Challenge Back-End - DR ENVIO

<p align="center">
<img src="https://media.licdn.com/dms/image/C4D0BAQGynwQMK-rPig/company-logo_200_200/0/1658259366720?e=1695859200&v=beta&t=dxz8VqcalM5uPCfOHKuRfhc8Cnc6Nhxhhw_IsczIwM0" width="300" alt="DrEnvioLogo"/>
</p>

# Introducción

Esta API fue creada utilizando Express con NodeJs y tiene como objetivo proporcionar funcionalidad para una tienda de zapatillas. El objetivo principal es implementar dos rutas públicas que permitan obtener información sobre los productos disponibles y los precios especiales para clientes.

## Instalación

Para la instalación lo primero es posicionarse con la terminal en la ubicación de donde se encuentre el archivo, una vez encontrado, vamos a utilizar el comando

```bash
$ npm install
```

para instalar todas las dependencias del proyecto, una vez terminado el proceso si queremos correr el servidor tendremos que escribir el comando

```bash
$ npm start
```

## Rutas públicas

### Obtener productos en stock

- **Endpoint:** `/products`
- **Método:** GET
- **Descripción:** Esta ruta devuelve una matriz que contiene solo los productos que están actualmente en stock.

#### Respuesta exitosa

- **Código de estado:** 200 OK
- **Contenido de respuesta:** Array de objetos JSON representando los productos en stock.

Ejemplo de respuesta:
[
{
"id": 1,
"nombre": "Zapatillas Nike Air Max",
"precio_base": 99.99,
"existencia": 5
},
{
"id": 2,
"nombre": "Zapatillas Adidas Superstar",
"precio_base": 89.99,
"existencia": 10
},
...
]

### Obtener precio especial para un cliente y producto

- **Endpoint:** `/price/{user_id}/{nombre_producto}`
- **Método:** GET
- **Descripción:** Esta ruta devuelve el precio especial para un cliente y un producto dado, si está disponible. Si el cliente no tiene un precio especial para la marca, se devuelve el precio base.

### Parámetros de ruta:

- `{user_id}`: ID del cliente (número entero).
- `{nombre_producto}`: Nombre del producto (cadena de texto).

### Respuesta exitosa

- **Código de estado:** 200 OK
- **Contenido de respuesta:** Objeto JSON con información sobre el precio.

Ejemplo de respuesta:
El precio con descuento de New Balance 574 es $110.5.

## Tecnologias usadas

- Express js
- Node js

## Deploy
- https://drenvioapifacundomonllor.onrender.com/

## Repositorio
- https://github.com/facundo-monllor/DrEnvioAPI
