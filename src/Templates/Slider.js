import * as React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import MemoramaWeb from '../Static/images/MemoramaWeb.png';
import Mundo3D from '../Static/images/Mundo3D.png';
import TowerDefense from '../Static/images/TowerDefense.png';
import Frogger from '../Static/images/Frogger.png';
import Carreras2D from '../Static/images/Carreras2D.jpg';
import Gato from '../Static/images/Gato.jpg';
import Card from '../Components/Card';

function Slider() {
        return(
            <Carousel fade >
                <Carousel.Item interval={2000}>
                    <div className="card-deck">
                        <Card image={MemoramaWeb} title={"MemoramaWeb"} description={"Diviertete jugando memorama con la temática de Yu-Gi-Oh!"}/>
                        <Card image={Mundo3D} title={"Survival World"} description={"Entra al nuevo mundo y sobrevive ante las adversidades que pueda deparar tu destino en el juego"}/>
                        <Card image={TowerDefense} title={"Winterfell Defense"} description={"¡Usa tu estrategia para defender el reino de Winterfell y aplastar a las fuerzas del mal con un vasto arsenal de torres!"}/>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className="card-deck">
                        <Card image={Frogger} title={"Frogger"} description={"Disfruta jugar de forma online este increible juego de Frogger y compite con tus amigos"}/>
                        <Card image={Carreras2D} title={"Racing 2D"} description={"Compite contra la IA y vencelo en una carreras de circulitos"}/>
                        <Card image={Gato} title={"Tic Tac Toe"} description={"¿Estas aburrido?, juega el tipico juego de Tic Tac Toe vs la CPU y vencelo en su propio juego"}/>
                    </div>
                </Carousel.Item>
            </Carousel>
        );
};

export default Slider;

