# Proyecto Final Node Js

Sistema de Gestión de Productos con Express y Firebase

## Instalación

1. Clonar o descargar el repositorio

2. Instalar las dependencia

```shell
npm install
```

## Ejecutar el proyecto

```shell
npm run dev
```

```
variables que rellenar al crear el archivo .env:

## Documentación de la API

```formato de productos json
[
  { "id": 1, "producto": "jabon", "precio": 150, "categoria": "higiene"},
]
```

## Ejemplo de todas las peticiones:

### Buscar productos por nombre

- **GET** `/products/search?producto=det`
- **Descripción:** Devuelve los productos que incluyan la palabra buscada.

### Ordenar productos por precio

- **GET** `/products/sorted-price-asc`
- **Descripción:** Devuelve todos los productos oredenados por precio.

### Obtener todos los productos

- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.

### Obtener producto por ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.

### Crear un producto

- **POST** `/products`
- **Descripción:** Crea un nuevo producto.

### Actualizar un producto (PUT)

- **PUT** `/products/:id`
- **Descripción:** Actualiza completamente un producto existente.

### Eliminar un producto

- **DELETE** `/products/:id`
- **Descripción:** Elimina un producto por su ID.

## Tecnologías utilizadas

- Node.js
- Express.js
- ES6 Modules
