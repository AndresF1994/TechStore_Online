# TechStore Online 🛒

**TechStore** es una tienda virtual profesional desarrollada como proyecto educativo para aplicar conocimientos de desarrollo web front-end, incluyendo estructura HTML, estilos responsivos con CSS y funcionalidades interactivas con JavaScript. También integra almacenamiento local y control de sesión de usuario.

---

## 🎯 Objetivo del proyecto

Construir una plataforma e-commerce funcional que permita:

- Registro y login de usuarios con validaciones.
- Visualización de productos destacados y por categoría.
- Agregar productos al carrito y calcular el total.
- Simular la confirmación de compra.
- Administrar la sesión y datos desde `localStorage`.

---

## 🧩 Tecnologías utilizadas

- HTML5 (estructura semántica)
- CSS3 (BEM, diseño responsivo con media queries)
- JavaScript (DOM, eventos, almacenamiento `localStorage`)
- Git y GitHub para control de versiones

---

## 📁 Estructura de carpetas (según el proyecto actual)

```
TechStore-Online/
├── css/
│   ├── auteh.css          
│   ├── catalog.css        
│   ├── responsive.css
│   └── style.css
│
├── html/
│   ├── cart.html
│   ├── catalogo.html      
│   ├── confirmation.html
│   ├── index.html
│   ├── login.html
│   └── registro.html      
│
├── IMG/
│   └── [archivos de imagen]
│
├── js/
│   ├── auth.js
│   ├── cart.js
│   ├── catalog.js
│   ├── confirmation.js
│   └── main.js
```

---

## 🔐 Funcionalidades principales

- **Autenticación**:
  - Registro y login con validación.
  - Almacenamiento de sesión en `localStorage`.
  - Bloqueo de acceso a `catalog.html` sin estar logueado.

- **Catálogo**:
  - Filtro por categoría.
  - Agregado de productos al carrito con persistencia.

- **Carrito de compras**:
  - Tabla de productos con cálculo total.
  - Eliminación de productos.

- **Confirmación de compra**:
  - Muestra número de pedido generado aleatoriamente.
  - Limpieza automática del carrito.

- **Responsive Design**:
  - Menú hamburguesa en dispositivos pequeños.
  - Diseño adaptable a móvil, tablet y escritorio.

---

## 👨‍💻 Autor

**Andrés Felipe Pacheco**  
Ingeniero Físico  
Proyecto realizado como parte del Sprint 2 - Interfaz E-commerce
https://github.com/AndresF1994/TechStore_Online.git
