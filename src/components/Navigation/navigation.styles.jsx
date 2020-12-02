import styled from "styled-components"
import {Link} from "gatsby";
export const NavigationWrapper = styled.div`
  width : 100% ; 
  position : -webkit-sticky;
  position : sticky; 
  top : 0; 
  background-color : #424242;
  height : 60px;
  overflow : hidden ;  
`

export const NavigationLeftSide =styled.div`
  height : 100% ;
  display : flex ; 
  justify-content : flex-start ; 
  align-items : center; 
`

export const NavLink = styled(Link)`
  text-decoration : none; 
  color : white ; 
  padding : 1rem 0.75rem ;  
  &:hover{
    color : #424242; 
    background-color : white ;
    border : 1px  solid #424242;
  }
`