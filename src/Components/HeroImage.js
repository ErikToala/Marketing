import * as React from 'react';
import "../Styles/heroImage.css"

function HeroImage(props){
    return(
        <header class="hero-image">
            <div>
                <h1><span className="creative-hero">NO HAY MEJOR</span><span className="creative-hero"> DESARROLLO QUE</span><span className="creative-hero"> LA DIVERSIÓN</span> </h1>
                <p className="info">Desarrollamos videojuegos que proporcionan diversión a nuestros usuarios, ofreciendo crecimiento continuo y entretenimiento.</p>
            </div>
        </header>
    );
}

export default HeroImage;