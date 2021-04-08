import * as React from 'react';
import '../Styles/navbar.css';
import logo from '../Static/images/LogoDvGamster2.png';

function Navbar() {
    React.useEffect(() => {
        const links = document.getElementsByClassName('nav-item')
        for(let i=0;i<links.length;i++)
            links[i].addEventListener("click",function(){
                for(let i=0;i<links.length;i++) links[i].classList.remove("active")
                links[i].classList.add("active");
            })
    });
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top justify-content-between">
            <a className="navbar-brand" href="http://localhost:3000/">
                <img className="logotype" src={logo} alt="logotype"/>
            </a>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="#pantalla-dividida">NOSOTROS</a>
                </li>
                <li className="nav-item" >
                    <a className="nav-link" href="#proyectos">PROYECTOS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contactanos">CONTACTO</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar