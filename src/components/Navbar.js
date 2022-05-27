import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height : 60px;
    ${mobile({height : "50px"})}
`
const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    ${mobile({padding : "10px 0px"})}

`
const Left = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
`
const Center = styled.div`
    flex : 1;
    text-align : center;
`
const Right = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content : flex-end;
    ${mobile({flex : 2, justifyContent : "center"})}
`
const Language = styled.span`
    cursor : pointer;
    font-size : 14px;
    ${mobile({display : "none"})}
`
const SearchContainer = styled.div`
    background-color : white;
    display : flex;
    border : 1px solid lightgray;
    margin-left : 25px;
`
const Input = styled.input`
    border : none;
    padding-left : 15px;
    outline: none;
    ${mobile({width : "50px"})}
`;
const Logo = styled.h1`
    font-weight : bold;
    ${mobile({fontSize : "24px", marginLeft : "15px"})}
`
const MenuItem = styled.div`
    cursor : pointer;
    font-size : 15px;
    margin-left : 25px;
    ${mobile({fontSize : "10px", marginLeft : "12px"})}
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{color : "gray"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Jungle.co</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar