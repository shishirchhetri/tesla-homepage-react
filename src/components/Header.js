import React,{useState} from 'react'
import styled from "styled-components"
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus]= useState(false);
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a href='#'>
        <img src="/images/logo.svg" alt=''/>
      </a>
      <Menu>
        {cars && cars.map((car, index) =>(
          <a key={index} href='#'>{car}</a>
        ))}
        {/* <a href="#">Model 3</a>
        <a href="#">Model Y</a>
        <a href="#">Model S</a>
        <a href="#">Model X</a> */}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href='#' onClick={()=> setBurgerStatus(true)}> <img src='./images/menu.png'/> </a>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        {/* <CustomClose/> */}
        
        <p ><img onClick={()=> setBurgerStatus(false)} src='./images/close.png'/></p>
        {cars && cars.map((car, index) =>(
        <li><a key={index} href='#'>{car}</a></li>
        ))}
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadaster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Charging</a></li>
        <li><a href='#'>Test Drive</a></li>
        <li><a href='#'>Others</a></li>

      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`
const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;

  a{
    font-weight:600;
    text-trasform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
  }
  @media(max-width:768px){
    display:none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items:center;
  a{
    font-weight:600;
    text-trasform:uppercase;
    margin-right:10px;
  }
  `
// const CustomMenu =styled(MenuIcon)`cursor:pointer;`

const BurgerNav= styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  z-index:15;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  p{
      display:flex;
      justify-content: flex-end;
    img{
      height:20px;
      width:20px;
      cursor:pointer
    }
  }
  li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,0.2);

    a{
      font-weight:600;

    }
  }
`
// const CustomClose = styled(CloseIcon)` `