import './normalize.css';
import './TaylorSwiftErasTour.css';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9 } from './assets/img'
import { Image } from "./image";
import { Avatar } from './avatar';
export const TaylorSwiftErasTour = () => {


      


    return (
        <>

            <main className='main'>
                <section className="section">
                    <div className="column1">
                        <Image img={img1} filter={'f1'}/>
                        <Image img={img2} filter={'f2'}/>
                        <Image img={img3} filter={'f3'}/>
                    </div>
                    <div className="column1">
                        <Image img={img4} filter={'f4'}/>
                        <article className="article">
                        <Avatar/>
                        </article>
                        <Image img={img5} filter={'f5'}/>
                    </div>
                    <div className="column1">
                        <Image img={img6} filter={'f6'}/>
                        <article className="article">
                        </article>
                        <Image img={img7} filter={'f7'}/>

                    </div>
                    <div className="column1">
                        <Image img={img8} filter={'f8'}/>
                        <article className="article">
                        </article>
                        <Image img={img9} filter={'f9'}/>
                    </div>
                    <div className='texture'>
                    </div>
                </section>

            </main>
        </>
    )
}