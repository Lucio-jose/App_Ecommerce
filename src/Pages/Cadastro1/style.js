import styled from "styled-components";


export const Container = styled.header`
width: 100%;
height: 100vh;
background-color: rgb(230, 230, 230);
display: flex;
justify-content: center;
align-items: center;
`
export const Content = styled.header`
width: 80%;
height: 80vh;

display: flex;

@media(max-width: 805px) {
    flex-direction: column-reverse;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
}
`
export const SideLeft = styled.header`
width: 25%;
height: 80vh;
background-color: #4883ff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
padding: 0px 15px;

@media(max-width: 805px) {
    width: 100%;
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
width: 75%;
height: 80vh;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media(max-width: 805px) {
    width: 98%;
}

form{
    width: 97%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    fieldset{
        display: flex;
        height: 160px;
        width: 96%;
        justify-content: space-between;
        border: none;
        margin-bottom: 20px;
        padding-top: 20px;
        div{
            display: flex;
            flex-direction: column;
            width: 45%;

            #Inputs-Text{
              border: none;
              height: 30px;
              width: 97%;
              background-color: rgb(230, 230, 230);
              margin-bottom: 20px;
              border-bottom: 2px solid #4883ff;
             font-size: 17px;
             padding-left: 10px;
            }
            input{ border: none;
              height: 30px;
              width: 97%;
              background-color: rgb(230, 230, 230);
              margin-bottom: 20px;
              border-bottom: 2px solid #4883ff;
             font-size: 17px;
             padding-left: 10px;}
            
        }
    }

    button{
        background-color: #4883ff;
        height: 45px;
        width: 150px;
        color: white;
        font-size: 15px;
        border: none;
        border-radius: 50px;
        margin-top: 15px;
    }
}
`
