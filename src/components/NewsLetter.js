import { Send } from '@material-ui/icons'
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height : 60vh;
    background-color : #fcf5f5;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
`;
const Description = styled.div`
    font-size : 24px;
    font-weigth : 300px;
    margin-bottom : 20px;
    ${mobile({textAlign : "center"})}
`;
const InputContainer = styled.div`
    width : 50%;
    background-color : white;
    display : flex;
    height : 40px;
    justify-content : space-between;
    border : 0.5px solid lightgray;
    ${mobile({width : "80%"})}
`;
const Button = styled.button`
    flex : 1;
    border : none;
    color : white;
    background-color : teal;
    cursor : pointer;
`;
const Title = styled.h1`
    font-size : 70px;
    margin-bottom : 20px;
`;
const Input = styled.input`
    flex : 8;
    border : none;
    padding-left : 20px;
    outline: none;
`;

const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite Products</Description>
            <InputContainer>
                <Input placeholder='Enter Your Email'/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter