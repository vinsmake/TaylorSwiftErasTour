import { useState } from "react";
import './normalize.css';
import './TaylorSwiftErasTour.css';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from './assets/img'
export const TaylorSwiftErasTour = () => {

    const [imageSrc, setImageSrc] = useState(img1);

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

            <div>
                <section className="section">
                    <div className="column1">
                        <article className="article" onClick={handleArticleClick}>
                            <img className="image" src={imageSrc} />
                        </article>
                        <article className="article">
                            <img className="image" src={img2} />
                        </article>
                        <article className="article">
                            <img className="image" src={img3} />
                        </article>
                    </div>
                    <div className="column1">
                        <article className="article">
                            <img className="image" src={img4} />
                        </article>
                        <article className="article">
                        </article>
                        <article className="article">
                            <img className="image" src={img5} />
                        </article>
                    </div>
                    <div className="column1">
                        <article className="article">
                            <img className="image" src={img6} />
                        </article>
                        <article className="article">
                        </article>
                        <article className="article">
                            <img className="image" src={img7} />
                        </article>

                    </div>
                    <div className="column1">
                        <article className="article">
                            <img className="image" src={img8} />
                        </article>
                        <article className="article">
                        </article>
                        <article className="article">
                            <img className="image" src={img9} />
                        </article>

                    </div>


                </section>
                {/*                 <input type="file" accept="image/*" onChange={handleImageUpload} />
                <button onClick={downloadCanvas}>Download Image</button> */}
            </div>
        </>
    )
}