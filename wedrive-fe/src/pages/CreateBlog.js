import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Component/Navbar';
import BlogTable from '../Component/CreateBlog'
import './css/blog.css'
import { NavLink } from 'react-router-dom';

const Suppliers = () => {
  return (
    <Container className='blogCreate'>
       <Navbar />
      <Row>
        <Col cl>
          <h1 className="titleBlog">Blogs</h1>
        </Col>
      </Row>
      <Row>
        <BlogTable />
      </Row>

        <NavLink className="nav-link Btn-backBlog" to="/blog" activeClassName="active">
           Volver al Blog
        </NavLink>
      
    </Container>
  );
};

export default Suppliers;
