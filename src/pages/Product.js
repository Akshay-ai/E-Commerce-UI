import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div`
`
const Wrapper = styled.div`
    padding : 50px;
    display : flex;
    ${mobile({padding : "10px", flexDirection : 'column'})}
`
const ImageContainer = styled.div`
    flex : 1;
`
const Image = styled.img`
    width : 100%;
    height : 90vh;
    object-fit : cover;
    ${mobile({height : "40vh"})}
`
const Title = styled.h1`
    font-weight : 200;
`
const Desc = styled.p`
    margin : 20px 0px;
`
const InfoContainer = styled.div`
    flex : 1;
    padding : 0px 50px;
    ${mobile({padding : "10px"})}
`
const Price = styled.span`
    font-weight : 100;
    font-size : 40px;
`
const FilterContainer = styled.div`
    width : 50%;
    display : flex;
    justify-content : space-between;
    margin : 30px 0px;
    ${mobile({width : "100%"})}
`;
const Filter = styled.div`
    display : flex;
    align-items : center;
`;
const FilterTitle = styled.span`
    font-size : 20px;
    font-weight : 200;
`;
const FilterColor = styled.div`
    width : 20px;
    height : 20px;
    border-radius : 50%;
    background-color : ${props => props.color};
    margin : 0px 5px;
    cursor : pointer;
`;
const FilterSize = styled.select`
    margin-left : 10px;
    padding : 10px;
`;
const FilterSizeOption = styled.option`
`;
const AddContainer = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    width : 50%;
    ${mobile({width : "100%"})}
`;
const AmountContainer = styled.div`
    display : flex;
    align-items : center;
    font-weight : 700;
`;
const Amount = styled.span`
    width : 30px;
    height : 30px;
    border-radius : 10px;
    border : 1px solid teal;
    display : flex;
    justify-content : center;
    align-items : center;
    margin : 0px 5px;
`;
const Button = styled.button`
    border : 2px solid teal;
    padding : 15px;
    background-color : white;
    cursor : pointer;
    font-weight : 600;
    &:hover {
        background-color : #f8f4f4;
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src='https://static.zara.net/photos///2022/V/0/2/p/3918/350/800/2/w/384/3918350800_2_1_1.jpg?ts=1638351851374'/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Basic Bomber Jacket</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad modi iure rerum veritatis ratione, necessitatibus numquam fuga, eius dolore vel sequi laudantium veniam ab corrupti! Natus non cumque reiciendis sit corporis dicta necessitatibus fugiat.</Desc>
                    <Price>₹ 7,990.00</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color = 'black'/>
                            <FilterColor color = 'darkblue'/>
                            <FilterColor color = 'gray'/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product