import { useEffect, useRef } from "react";

export const TaylorSwiftErasTour = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        // UseEffect se ejecuta después del montaje del componente
        // Aquí obtenemos la referencia al canvas para manipularlo
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Dibujar un rectángulo azul en el canvas utilizando el contexto 2D
        ctx.fillStyle = 'blue';
        ctx.fillRect(10, 10, 100, 100);
    }, []);


    const handleImageUpload = (event) => {
        // Obtener el archivo de imagen seleccionado por el usuario
        const file = event.target.files[0];
    
        // Salir de la función si no se seleccionó ningún archivo
        if (!file) return;
    
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
    
        // Usar FileReader para leer la imagen y dibujarla en el canvas cuando se cargue
        const reader = new FileReader();
    
        // La función onload del FileReader se ejecutará cuando el archivo se haya leído
        reader.onload = function () {
          // Crear una nueva imagen (<img>) y configurar su función onload
          const image = new Image();
          image.onload = function () {
            // Cuando la imagen se haya cargado, dibujarla en el canvas
            // Puedes ajustar las coordenadas y dimensiones para posicionar y escalar la imagen
            ctx.drawImage(image, 50, 50, 200, 150);
          };
    
          // Establecer la URL de datos (data URL) de la imagen como la fuente de la imagen
          image.src = reader.result;
        };
    
        // Leer el archivo como una URL de datos (data URL)
        reader.readAsDataURL(file);
      };


    const downloadCanvas = () => {
        // Función para descargar la imagen del canvas
        const canvas = canvasRef.current;

        // Creamos un elemento de enlace (<a>) dinámicamente
        const link = document.createElement('a');

        // Establecemos el atributo 'download' para el nombre del archivo que se descargará
        link.download = 'test.png';

        // Convertimos el contenido del canvas en una URL de datos (data URL) con formato 'image/png'
        // y reemplazamos el tipo 'image/png' con 'image/octet-stream' para forzar la descarga
        link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');

        // Simulamos un clic en el enlace para iniciar la descarga del archivo
        link.click();
    };


    return (
        <>

            <div>
                <canvas id="canvas-test" ref={canvasRef}></canvas>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                <button onClick={downloadCanvas}>Download Image</button>
            </div>
        </>
    )
}