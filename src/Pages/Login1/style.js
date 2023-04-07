import styled from "styled-components";
//import IMG from '../../assets/img/fndologin2.png'

export const Container = styled.header`
width: 100%;
height: 100vh;
background-color: rgb(230, 230, 230);
background-size: cover;
display: flex;
justify-content: center; 
align-items: center;
`
export const Content = styled.header`
width: 800px;
height: 60vh;
background-color: white;
display: flex;

@media(max-width: 805px) {
    flex-direction: column-reverse;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
}
`
export const SideLeft = styled.div`
width: 50%;
height: 60vh;
background-color: #4883ff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
padding: 0px 15px;

@media(max-width: 805px) {
    height: 300px;
    width: 90%;
}

img{
    width: 60px;
    height: 60px;
}

span{
    font-size: 13px;
    margin-bottom: 20px;
    color: white;
}
button{
    background-color: white;
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 50px;
}
`
export const SideRigth = styled.header`
width: 50%;
height: 60vh;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media(max-width: 805px) {
    height: 300px;
    width: 90%;
}

form{
    display: flex;
    flex-direction: column;
    height: 190px;
    width: 95%;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    input{
        border: none;
        height: 45px;
        width: 97%;
        background-color: rgb(230, 230, 230);
        margin-bottom: 20px;
        border-bottom: 2px solid #4883ff;
        font-size: 17px;
        padding-left: 10px;
    }

    button{
        background-color: #4883ff;
        height: 45px;
        width: 150px;
        color: white;
        font-size: 15px;
        border: none;
        border-radius: 50px;
    }
}
`
