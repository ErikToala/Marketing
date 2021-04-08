import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter className="grey lighten-4">
          <MDBContainer>
            <hr className="" style={{ margin: "0 15%" }} />
            <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
              <MDBCol md="8" sm="12" className="mt-5">
                <p style={{ lineHeight: "1.7rem",color:"#1c2331" }}>
                Blvd. Antonio Pariente Algarín 135, Las Torres, 29045 Tuxtla Gutiérrez, Chis. <br></br>
                961 118 0921 <br></br>
                contacto@dvgamster.mx
                </p>
                
              </MDBCol>
            </MDBRow>
            <div className="text-center">
          <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a href="/ " className="btn-floating btn-sm btn-fb  light-blue darken-4">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/ " className="btn-floating btn-sm btn-tw light-blue">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/ " className="btn-floating btn-sm btn-gplus red">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/ " className="btn-floating btn-sm btn-li blue">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/ " className="btn-floating btn-sm btn-dribbble purple lighten-2">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
            
          </MDBContainer>
          <div className="footer-copyright text-center py-3 grey darken-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:
              <a href="/ " > DvGamster.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
    );
}

export default Footer;
