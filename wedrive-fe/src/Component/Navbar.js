// src/Component/Navbar.js
import React from 'react';
import { Navbar, Nav, Container, Modal, Button, Form, FormControl, FormGroup, FormLabel, FormCheck } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import logo from '../imgs/logo.svg'; 
import './css/Navbar.css'




const NavbarComponent = () => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);

  const responseGoogle = (response) => {
  console.log(response);
  // Aquí puedes manejar la autenticación con Google
};
// const loginModal = (
//   <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
//     <Modal.Header closeButton>
//       <Modal.Title>Iniciar sesión</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <Form>
//         <FormGroup controlId="email">
//           <FormLabel>Email</FormLabel>
//           <FormControl type="email" placeholder="Ingresa tu email" />
//         </FormGroup>
//         <FormGroup controlId="password">
//           <FormLabel>Contraseña</FormLabel>
//           <FormControl type="password" placeholder="Ingresa tu contraseña" />
//         </FormGroup>
//         <FormGroup controlId="rememberMe" className="d-flex justify-content-between">
//           <FormCheck type="checkbox" label="Recordarme" />
//           <Button variant="link" onClick={() => {}}>Olvidé mi contraseña</Button>
//         </FormGroup>
//         <Button variant="primary" type="submit">
//           Ingresar
//         </Button>
//         <Button variant="secondary" className="ml-2" onClick={() => {}}>
//           Crear cuenta
//         </Button>
//       </Form>
//       <hr />
//       <div className="d-flex justify-content-around">
//         <GoogleLogin
//           clientId="YOUR_GOOGLE_CLIENT_ID"
//           buttonText="Ingresar con Google"
//           onSuccess={responseGoogle}
//           onFailure={responseGoogle}
//           cookiePolicy={'single_host_origin'}
//         />
//         <Button variant="primary">
//           <i className="fa fa-facebook-official" aria-hidden="true"></i> Ingresar con Facebook
//         </Button>
//       </div>
//     </Modal.Body>
//   </Modal>
// );
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="100"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <NavLink className="nav-link" to="/" activeClassName="active" end>
              Inicio
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" to="/vehiculos" activeClassName="active">
              Vehículos
            </NavLink>
          </Nav.Item>
          {/* <Nav.Item>
            <NavLink className="nav-link" to="/suppliers" activeClassName="active">
              Abastecedores
            </NavLink>
          </Nav.Item> */}
          <Nav.Item>
            <NavLink className="nav-link" to="/contact" activeClassName="active">
              Contacto
            </NavLink>
          </Nav.Item>

          {/* <Nav.Item>
            <NavLink className="nav-link" to="/admi" activeClassName="active">
              Administrador
            </NavLink>
          </Nav.Item> */}

          <Nav.Item>
            <NavLink className="nav-link" to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
            <NavLink className="nav-link login" to="/login">
            <FontAwesomeIcon icon={faArrowRightToBracket} /> Ingresar
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};



export default NavbarComponent;
