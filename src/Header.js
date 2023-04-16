import React from 'react';

import logo from './assets/Logo2.png'

import './Header.css'

import { Navbar, Container, Nav } from 'react-bootstrap'; 

export default function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt='Logo2' />
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Nav className="me-auto mx-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="allcountries"> All Countries </Nav.Link>
                            <Nav.Link href="myrecords"> My Records </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </header>
    )
}

