# API PARA AUTOS 🚗

## Visión General

Este proyecto proporciona la funcionalidad de backend para gestionar un inventario simple de autos y un sistema de autenticación de usuarios. La aplicación usa MongoDB con Mongoose para modelar los datos y realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los objetos de autos. También permite el registro y el inicio de sesión de usuarios, gestionando el cifrado de contraseñas con bcryptjs.

## Características

1. **Gestión de Autos**:

   - Añadir nuevos autos al inventario.
   - Recuperar una lista de todos los autos o buscar un auto específico por ID.
   - Actualizar los detalles de un auto existente.
   - Eliminar un auto del inventario.

2. **Autenticación de Usuarios**:
   - Registrar nuevos usuarios con el cifrado de contraseñas.
   - Iniciar sesión de usuarios existentes verificando el nombre de usuario y la contraseña.

## Dependencias

- `mongoose`: Librería ODM (Object Data Modeling) para MongoDB y Node.js.
- `bcryptjs`: Librería para cifrar y comparar contraseñas de manera segura.

## Descripción de Archivos

### `carModel.js`

Define el esquema para la colección de autos y las operaciones CRUD.

#### Esquema de Auto:

- **model**: Un campo único y obligatorio que representa el modelo del auto. Debe tener entre 3 y 100 caracteres.
- **brand**: Un campo obligatorio que representa la marca del auto, con una longitud entre 2 y 50 caracteres.
- **price**: Un campo obligatorio de tipo número que representa el precio del auto (debe ser mayor o igual a 0).
- **description**: Un campo opcional de tipo string para la descripción del auto, con una longitud máxima de 500 caracteres.
- **stock**: Un campo obligatorio de tipo entero que representa el stock disponible del auto (debe ser mayor o igual a 0).

#### Operaciones CRUD:

- **getAllCars**: Recupera todos los autos del inventario.
- **getCarById**: Recupera un auto por su ID único.
- **createCar**: Añade un nuevo auto al inventario.
- **updateCar**: Actualiza los detalles de un auto existente por su ID.
- **deleteCar**: Elimina un auto del inventario por su ID.

### `userModel.js`

Define el esquema para la colección de usuarios y proporciona métodos para el registro y el inicio de sesión de usuarios.

#### Esquema de Usuario:

- **username**: Un campo obligatorio de tipo string que representa el nombre de usuario del usuario.
- **password**: Un campo obligatorio de tipo string que representa la contraseña del usuario (cifrada usando bcryptjs).
- **email**: Un campo obligatorio de tipo string para el correo electrónico del usuario.

#### Funciones:

- **register**: Permite registrar un nuevo usuario, asegurándose de que el nombre de usuario no esté ya registrado. Cifra la contraseña antes de guardar el usuario.
- **login**: Permite iniciar sesión con el nombre de usuario y la contraseña. Verifica que la contraseña proporcionada coincida con la almacenada.

## Uso

### Configuración

1. Asegúrate de tener MongoDB instalado y en funcionamiento.
2. Instala las dependencias con `npm install`.

### Endpoints

Los endpoints para interactuar con los autos y los usuarios aún deben ser implementados en un archivo de rutas o controlador de Express. A continuación, se describen los métodos disponibles en los modelos:

- **Autos**:

  - `GET /cars`: Obtiene todos los autos.
  - `GET /cars/:id`: Obtiene un auto por su ID.
  - `POST /cars`: Crea un nuevo auto.
  - `PUT /cars/:id`: Actualiza un auto existente por ID.
  - `DELETE /cars/:id`: Elimina un auto por su ID.

- **Usuarios**:
  - `POST /register`: Registra un nuevo usuario.
  - `POST /login`: Inicia sesión con un usuario existente.
