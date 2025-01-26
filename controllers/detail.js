// Array para almacenar los detalles del producto
const detailData = [];

// Función para agregar o actualizar un producto en la tabla de detalles
export function addProductToDetail(product) {
  const existingProduct = detailData.find((item) => item.cod === product.cod);

  if (existingProduct) {
    // Si el producto ya existe, actualizar cantidad y subtotal
    existingProduct.quantity += product.quantity;
    existingProduct.subtotal = existingProduct.quantity * existingProduct.price;
  } else {
    // Si el producto no existe, agregar el nuevo producto
    detailData.push({
      ...product,
      subtotal: product.quantity * product.price,
    });
  }

  // Crear un evento personalizado para notificar el cambio en los detalles
  const event = new CustomEvent("detailUpdated", { detail: { detailData } });
  document.dispatchEvent(event);
}

// Función para eliminar un producto en la tabla de detalles
export function removeProductFromDetail(cod) {
  const index = detailData.findIndex((item) => item.cod === cod);
  if (index !== -1) {
    detailData.splice(index, 1);

    // Crear un evento personalizado para notificar el cambio en los detalles
    const event = new CustomEvent("detailUpdated", { detail: { detailData } });
    document.dispatchEvent(event);
  }
}

// Función para obtener los detalles del producto
export function getInvoiceDetails() {
  return detailData;
}

// Función para limpiar los datos del detalle
export function clearDetails() {
  detailData.length = 0; // Vaciar el array

  // Crear un evento personalizado para notificar el cambio en los detalles
  const event = new CustomEvent("detailUpdated", { detail: { detailData: [] } });
  document.dispatchEvent(event);
}