import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DatosContacto from './DatosContacto';

export default function Footer() {
  return (
    <footer className="bg-primary shadow text-light">
      <Container className="pb-1">
        <Row className="flex-column flex-md-row justify-content-center pt-2">
          <h4 id="contacto" className='text-center mt-3'>Contacto</h4>
          <DatosContacto linkGitHub={"https://github.com/FR4N5-SK/Filmhub"} email={"fran19062005@gmail.com"} imagen={"/images/francisco.jpg"}/>
        </Row>
        <hr/>
        <p className="text-center">© 2024 Filmhub. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}