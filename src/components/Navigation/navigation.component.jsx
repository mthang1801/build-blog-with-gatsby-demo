import React from 'react'
import {NavigationWrapper, NavigationLeftSide, NavLink} from "./navigation.styles";
const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationLeftSide>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>        
      </NavigationLeftSide>
    </NavigationWrapper>
  )
}

export default Navigation
