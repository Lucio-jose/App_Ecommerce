import styled from "styled-components"

export const AreaTitle = styled.div`
width: 100%;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
`
export const Content = styled.div`
width: 95%;
height: 60px;
border: 1px solid #e1e1e1;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0pc 10px;

h3{
    font-weight: 400;
    font-size: 21px;
}

`
export const ContainerProducts = styled.div`
width: 100%;
height: 600px;
display: flex;
flex-direction: column;
align-items: center;

.category-name{
    width: 92%;
    h4{
        font-weight: 400;
    }
}
`
export const ContentProducts = styled.div`
width: 95%;
padding: 10px;
display: flex;
flex-wrap: wrap;
margin-bottom: 40px;
`
export const CardProductos = styled.div`
width: 300px;
height: 75px;
background-color: white;
margin: 10px;
border: 1px solid #e1e1e1;
display: flex;
align-items: center;
    justify-content: space-between;
    padding: 0px 10px;

    button{
        width: 30px;
        height: 30px;
        background-color: #4883ff;
        border-radius: 3px;
    }

div{
    display: flex;
    flex-direction: column;
    
    span{
        margin: 7px 0px;
    }

    h5{
        color: #4883ff;
    }
}
`
