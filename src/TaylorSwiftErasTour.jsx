import './normalize.css';
import './TaylorSwiftErasTour.css';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from './assets/img'
import { Image } from "./image";
export const TaylorSwiftErasTour = () => {




    return (
        <>

            <main className='main'>
                <section className="section">
                    <div className="column1">
                        <Image img={img1} />
                        <Image img={img2} />
                        <Image img={img3} />
                    </div>
                    <div className="column1">
                        <Image img={img4} />
                        <article className="article">
                        </article>
                        <Image img={img5} />
                    </div>
                    <div className="column1">
                        <Image img={img6} />
                        <article className="article">
                        </article>
                        <Image img={img7} />

                    </div>
                    <div className="column1">
                        <Image img={img8} />
                        <article className="article">
                        </article>
                        <Image img={img9} />
                    </div>
                    <div className='texture'>
                    </div>
                </section>

                {/*                 <input type="file" accept="image/*" onChange={handleImageUpload} />
                <button onClick={downloadCanvas}>Download Image</button> */}
            </main>
        </>
    )
}