import * as React from 'react'
import Video from "../Components/Video";
import Slider from "./Slider";
import Divider from "../Components/Divider";

function Proyects (){
    return(
        
        <div>
            <div id="proyectos" className="espacio"></div>
            <Divider name="Proyectos"/>
            <Slider/>
            <Video/>
        </div>
    );
}

export default Proyects;