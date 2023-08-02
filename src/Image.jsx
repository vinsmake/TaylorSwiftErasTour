import { useState } from "react";

export const Image = ({img}) => {

    const [imageSrc, setImageSrc] = useState(img);

    const handleArticleClick = () => {
        // Mostrar el cuadro de diálogo de carga de archivos al hacer clic en el artículo
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        // Cuando el usuario selecciona una imagen, actualizar el estado con la nueva URL de la imagen
        fileInput.onchange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                setImageSrc(e.target.result);
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        };

        fileInput.click();
    };

    return (
        <>
            <article className="article" onClick={handleArticleClick}>
                <img className="image" src={imageSrc} />
            </article>
        </>
    )
}