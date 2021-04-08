import React from 'react';
import '../Styles/Contactanos.css';

const Contactanos = () => {
    return(
        <section className="get_in_touch">
            <h3 className="title">Contáctanos</h3>
            <div className="container">
                <div className="contact-form row">
                    <div className="form-field col-lg-6">
                        <input id="name" className="input-text" type="text"></input>
                        <label for="name" className="label">Nombre</label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input id="name" className="input-text" type="text"></input>
                        <label for="name" className="label">Apellidos</label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input id="email" className="input-text" type="email"></input>
                        <label for="email" className="label">Email</label>
                    </div>
                    <div className="form-field col-lg-6">
                        <input id="telefono" className="input-text" type="text"></input>
                        <label for="telefono" className="label">Teléfono</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input id="mensaje" className="input-text" type="text"></input>
                        <label for="mensaje" className="label">Déjanos tu mensaje</label>
                    </div>
                    <div className="form-field col-lg-12">
                        <input className="submit-btn" type="submit" value="Enviar Mensaje"></input>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contactanos;
