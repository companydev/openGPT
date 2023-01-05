function uploadFile(file: File): void {
  if (file.size > 10 * 1024 * 1024) {
    console.log("El archivo excede el tamaño máximo permitido de 10 MB");
  } else {
    // Aquí se puede implementar la lógica para subir el archivo al servidor
    console.log("Archivo subido exitosamente");
  }
}
