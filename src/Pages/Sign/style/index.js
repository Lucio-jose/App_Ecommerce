import styled from "styled-components";


export const MainForm = styled.div`
height: 100vh;
width: 100%;
background-color: #3a3c3f;
display: flex;
justify-content: center;
align-items: center;

form{
    width: 400px;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section{
        width: 80px;
        height: 80px;
        background-color: #4883ff;
        border-radius: 100%;
        margin-bottom: 20px;
    }

     input{
        background-color: #16161d;
        width: 100%;
        height: 45px;
        margin-bottom: 30px;
        padding-left: 10px;
        font-size: 17px;
        color: white;
        border-radius: 20px;
     }

     button{
        width: 100%;
        border-radius: 20px;
        background-color: #4883ff;
        color: white;
        height: 50px;
        font-size: 18px;
     }
}

`