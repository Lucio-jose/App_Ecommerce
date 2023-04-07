import styled from "styled-components";
import Img from "../../../../../images/icons-dash/icone-search.png"

export const Container = styled.div`
width: 100%;
height: 80px;
background-color: white;
display: flex;
align-items: center;
justify-content: space-between;

section{
    display: flex;
}

img{
    width: 25px;
    height: 25px;
    margin-left: 15px;
}

#avatar{
    width: 35px;
    height: 35px;
    border-radius: 100%;
    margin: 0px 15px;
}

div{
    width: 300px;
    height: 60px;
display: flex;
justify-content: flex-end;
align-items: center;

button{
    height: 45px;
    width: 110px;
    background-color: #4883ff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 50px;

    :hover{
        background-color: white;
        border: 1px solid #4883ff;
        color: #4883ff;
        transition: 0.5s;
        cursor: pointer;
    }
}
}

input{
    background-image: url(${Img});
    background-repeat: no-repeat;
    width: 35%;
    padding: 12px;
    background-position: 96%;
    border: 5px solid #d6d6d6;
    border-radius: 30px;
    margin-right: 15px;
    height: 40px;
}
`

