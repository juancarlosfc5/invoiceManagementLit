# Invoice Management with Lit + Vite

Este proyecto es una aplicación web de gestión de facturas desarrollada utilizando **Lit** y estructurada con **Vite** como herramienta de construcción. El proyecto está desplegado en [Invoice Management App](https://invoicelit.netlify.app/) y permite gestionar facturas de manera dinámica e intuitiva con funcionalidades clave y almacenamiento local.

---

## **Tecnologías Utilizadas**
- **Lit**: Para la creación de componentes web reutilizables y encapsulados con Shadow DOM.
- **Vite**: Para la generación del proyecto y manejo de la estructura modular.
- **Bootstrap**: Para el diseño y estilos visuales de los componentes.
- **JavaScript**: Para la lógica detrás de la generación de facturas.
- **Local Storage**: Para almacenar los datos de facturas generadas y garantizar persistencia temporal en el navegador.

---

## **Estructura del Proyecto**
El proyecto está organizado en componentes reutilizables que gestionan las diferentes secciones de la factura. A continuación, se listan los componentes principales:

1. **`header-component`**  
   - Responsable de recopilar los datos personales del cliente (nombres, apellidos, identificación, dirección, email).  
   - Genera un número de factura aleatorio que se actualiza con cada recarga de página.  
   - Incluye validación en tiempo real para cada campo según el tipo de dato esperado.

2. **`products-component`**  
   - Permite seleccionar productos almacenados en la base de datos.  
   - Carga automáticamente el código y el precio unitario del producto seleccionado.  
   - Incluye un campo para ingresar la cantidad y un botón para agregar productos al detalle de la factura.  
   - Lógica avanzada:  
     - Si el producto ya existe en el detalle, actualiza la cantidad en lugar de duplicar la fila.  
     - Cada fila en la tabla incluye un botón para eliminar productos específicos.

3. **`summary-component`**  
   - Calcula automáticamente:  
     - **Subtotal**: Sumatoria de los valores de todos los productos seleccionados.  
     - **IVA (19%)**: Calculado sobre el subtotal.  
     - **Total**: Suma del subtotal e IVA.  
   - Contiene un botón "Pagar" que almacena la factura generada en un array y lo guarda en el **Local Storage**.  

---

## **Lógica Detrás de la Aplicación**

1. **Generación de Número de Factura Aleatorio**  
   - Se genera un número de factura único al recargar la página, utilizando una combinación de valores aleatorios y Shadow DOM para garantizar la encapsulación.

2. **Ingreso de Datos del Cliente**  
   - Los campos de entrada incluyen validación en tiempo real para evitar errores en los datos personales.

3. **Selección de Productos**  
   - La lista de productos muestra solo los disponibles en la base de datos.  
   - Al seleccionar un producto, su código y valor unitario se completan automáticamente.  
   - El cliente solo necesita ingresar la cantidad deseada.

4. **Detalle de Factura**  
   - Al agregar un producto, si ya existe en el detalle, simplemente se acumula la cantidad, evitando duplicados.  
   - Cada fila incluye un botón para eliminar productos según sea necesario.

5. **Resumen de Precios**  
   - Calcula automáticamente el subtotal, IVA y total con base en los productos seleccionados.

6. **Almacenamiento de Factura**  
   - Al hacer clic en el botón "Pagar", los datos de la factura se almacenan en un array en **Local Storage**, incluyendo:  
     - Datos personales del cliente.  
     - Detalle de los productos seleccionados.  
     - Resumen del subtotal, IVA y total.  
   - Un mensaje de éxito confirma la generación de la factura y se recarga automáticamente la página después de un pequeño retraso, simulando una consulta al servidor.

---