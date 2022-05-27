import styled from "styled-components"

const Announcement = () => {
    const Container = styled.div`
        height : 30px;
        background-color : teal;
        color : white;
        display : flex;
        align-items : center;
        justify-content : center;
        font-size : 14px;
        font-weight : 500;
    `
    return (
        <Container>Super Deal! Get Amazing offers on all electric appliances</Container>
    )
}

export default Announcement