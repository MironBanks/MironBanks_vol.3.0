import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavigationWrapper = styled.nav`
display: flex;
height: 60px;
align-items: center;
justify-content: space-between;
font-family: 'Montserrat';
padding: 0 100px;

a{
    text-decoration:none;
    color:inherit;
}
`

const Logo = styled.span`
font-weight:700;
font-size:20px;
`
const NavigationList = styled.ul`
margin:0;
padding:0;
list-style: none;
display:flex;
`

const NavigationListItem = styled.li`
font-size:15px;
font-weight:200;
text-transform:uppercase;
margin-left:40px;
`

const Navigation = () => (
    <NavigationWrapper>
        <Logo>
            <Link to="/">Miron Banks</Link>
        </Logo>
        <NavigationList>
            <NavigationListItem>
                <Link to="/about" >about</Link>
            </NavigationListItem>
            <NavigationListItem>resume</NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
)

export default Navigation