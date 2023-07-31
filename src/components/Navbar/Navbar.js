import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import {MdOutlineNotificationsNone} from "react-icons/md";
import {HiSearch} from "react-icons/hi";
import {FiUser} from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuth } from '../../store/actions';
import { NavLink, Navigate } from 'react-router-dom';
import { CATALOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

const NavBar = (props) => {
    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.isAuth);
    console.log(isAuth);

    const enterExit=()=>{
        dispatch(toggleAuth())
      
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to={CATALOG_ROUTE} className='me-3'>
            <img src='https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg' alt='logo'/>
          </NavLink>
          <Nav className="me-auto" style={{fontWeight:'600'}}>
            <Nav.Link href="#home">Мой Иви</Nav.Link>
            <Nav.Link href="#features">Что нового</Nav.Link>
            <Nav.Link href="#pricing">Фильмы</Nav.Link>
            <Nav.Link href="#pricing">Сериалы</Nav.Link>
            <Nav.Link href="#pricing">Мультфильмы</Nav.Link>
            <Nav.Link href="#pricing">TV+</Nav.Link>
          </Nav>

          <Nav className="d-flex align-items-center ml-auto" style={{fontWeight:'600'}}>
            <Nav.Link href="#pricing" className="me-2" >
            <Button variant="secondary" size="m" disabled >
            Оплатить подписку
      </Button>{' '}</Nav.Link>
            <Nav.Link href="#pricing" className="me-2"><HiSearch size={24} className="me-2"/>Поиск</Nav.Link>
            <Nav.Link href="#pricing" className="me-2"><MdOutlineNotificationsNone size={24}/></Nav.Link>
            
            {isAuth ? 
            <NavLink to={REGISTRATION_ROUTE} onClick={enterExit} style={{color:'rgb(255,255,255,0.55)',textDecoration:'none'}}><FiUser size={24}  
            className="me-2" />Выйти</NavLink>:

            <NavLink to={LOGIN_ROUTE} onClick={enterExit} style={{color:'rgb(255,255,255,0.55)',textDecoration:'none'}}><FiUser size={24}
            className="me-2" />Войти</NavLink>}
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;