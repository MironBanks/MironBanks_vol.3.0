import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavigationWrapper = styled.nav`
position:absolute;
top: 20px;
width:100%;
display: flex;
align-items: center;
justify-content: space-between;
font-family: 'Lato';
padding: 0 40px;

a{
    text-decoration:none;
    color:inherit;
}
`

const Logo = styled.span`
font-weight:300;
font-size:15px;
`
const NavigationList = styled.ul`
list-style: none;
display:flex;
`

const NavigationListItem = styled.li`
font-size:15px;
font-weight:300;
text-transform:uppercase;
margin-left:40px;
`

const Navigation = () => (
    <NavigationWrapper>
        <Logo>
            <Link to="/">M.</Link>
        </Logo>
        <NavigationList>
            <NavigationListItem>
                <Link to="/about" >.about</Link>
            </NavigationListItem>
            <NavigationListItem>.resume</NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
)

export default Navigation