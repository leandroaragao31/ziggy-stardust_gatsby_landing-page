import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  cursor:default;
  font-family: 'Bebas Neue', cursive;  
  scroll-behavior: smooth;
  color:#fff;
}
body{
  background-color:#000;
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: black; 
}
::-webkit-scrollbar-thumb {
  background: #B8834F; 
}
::-webkit-scrollbar-thumb:hover {
  background: darkgoldenrod; 
}
}
a{
  text-decoration:none;
  cursor:pointer;
}
button:hover{
  transition:0.7s ease-in;
}
`
export const Menu = styled.section`
    height:12vh; 
    width:100%;
    background-color:#000;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    position:fixed;
    top:0;
    z-index:10;
`
export const LogoContainer = styled.div`
    width:20%;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        width:50%;
        cursor:pointer;
    }
    
`
export const Navigation = styled.div`
    width:45%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
`
export const NavItem = styled.a`
font-size:1.3vw;
&:hover {
    color: #e8ca11;
    transition: all 0.3s ease 0s;
    animation: 5s ease 0s 1 normal none running fdBcwW;
} 
`
export const Navbtn = styled.button`
    width: 10vw;
    height: 6vh;
    font-size:1.1vw;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 5px;
    z-index: 0;
    background: black;
    overflow: hidden;
    border: 2px solid darkgoldenrod;
    color: #fff;

    &:hover{
        color: #0E0D12;
    }
    &:hover:after {
        height: 100%;
    }
    &:after {
        content: "";
        position: absolute;
        z-index: -1;
        transition: all 0.5s ease;
        left: 0;
        bottom: 0;
        height: 0;
        width: 100%;
        background: darkgoldenrod;
    }
`
