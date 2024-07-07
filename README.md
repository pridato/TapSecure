# TapSecure

TapSecure es una aplicación de gestión de contraseñas diseñada principalmente para dispositivos iOS, enfocada en la seguridad de los datos sensibles del usuario. Utiliza React Native para el frontend, Node.js para el backend y PostgreSQL como base de datos.

## Tecnologías

- **Frontend:** [React Native](https://reactnative.dev/)
- **Backend:** [Node.js](https://nodejs.org/)
- **Base de Datos:** [PostgreSQL](https://www.postgresql.org/)
- **Contenedores:** [Docker](https://www.docker.com/)

## Seguridad

La seguridad es un aspecto crucial en TapSecure, ya que cualquier exploit podría resultar en una filtración masiva de contraseñas de los usuarios. Se implementarán diversas medidas de seguridad tanto en el frontend como en el backend.

### Medidas de Seguridad en el Frontend

- **Validación y Sanitización de Datos:**
  - Validar y sanear los datos del usuario antes de enviarlos al backend para prevenir ataques de inyección.

- **Medidas Contra Ingeniería Inversa:**
  - Ofuscar el código JavaScript para dificultar la ingeniería inversa y proteger la lógica de la aplicación.
  - Usar herramientas como ProGuard para ofuscación en Android.

- **Control de Acceso en el Cliente:**
  - Implementar lógica de autorización en el frontend para controlar el acceso a diferentes partes de la aplicación basándose en los roles del usuario.

- **Protección de Entradas del Usuario:**
  - Usar medidas como Input Sanitization para prevenir ataques de Cross-Site Scripting (XSS).

- **Uso de Bibliotecas de Seguridad Confiables:**
  - Utilizar bibliotecas de seguridad bien mantenidas y confiables para funcionalidades relacionadas con la seguridad, como la autenticación biométrica y el almacenamiento seguro.

### Medidas de Seguridad en el Backend

- **Autenticación y Autorización:**
  - Implementar JWT (JSON Web Tokens) para la autenticación y manejo de sesiones.
  - Verificar el correo electrónico del usuario antes de permitir el acceso.

- **Encriptación de Datos:**
  - Almacenar contraseñas de manera segura utilizando algoritmos de hash fuertes como bcrypt.
  - Encriptar datos sensibles almacenados en la base de datos.

- **Control de Acceso:**
  - Implementar controles de acceso basados en roles para proteger los endpoints del API.
  - Validar y sanitizar todas las entradas que provienen del frontend.

- **Protección Contra Ataques Comunes:**
  - Implementar protección contra ataques de fuerza bruta en los endpoints de autenticación.
  - Usar HTTPS para asegurar la comunicación entre el cliente y el servidor.