import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    flex : 1;
    margin : 3px;
    height : 70vh;
    position : relative;
`
const Image = styled.img`
    width : 100%;
    height : 100%;
    object-fit : cover;
    ${mobile({height : "20vh"})}
`
const Info = styled.div`
    position : absolute;
    top : 0;
    bottom : 0;
    width : 100%;
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
`
const Title = styled.h1`
    color : white;
    margin-bottom : 20px; 
`
const Button = styled.button`
    background-color : white;
    border : none;
    padding : 10px;
    color : gray;
    font-weight : 600;
    cursor : pointer;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem