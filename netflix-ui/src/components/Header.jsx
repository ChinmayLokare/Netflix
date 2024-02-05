import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from "../assets/logo.png"


const Container = styled.div`
padding:0 4rem;
.logo{
    img{
        height:5rem;
    }
}
    

`;

function Header(props) {
    const navigate = useNavigate();
    return (
        <Container className='flex a-center j-between'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button className='btn' onClick={() => navigate(props.login ? "/login" : "/signup")}>{props.login ? "Log In" : "Signup"}</button>
        </Container>
    )
}

export default Header
