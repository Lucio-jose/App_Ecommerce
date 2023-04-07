import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background-color: #F4F4F4;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 30px 0px;

.category-name{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 95%;
        height: 60px;

        a{
            font-family: 'Rubik',sans-serif;
            font-size: 14px;
            color: #FF9300;
        }

        h3{
            font-family: 'Rubik',sans-serif;
            font-size: 24px;
            font-weight: 500;
            color: #222;

            @media(max-width: 379px) {
              font-size: 17px;
    }
            
        }

    }
`

export const Content = styled.div`
width: 95%;
padding-bottom: 20px;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
background-color: #FFFFFF;
border: 1px solid #e1e1e1;
    border-radius: 3px;
    margin-bottom:20px;

    @media(max-width: 1164px) {
        height: 700px;
    }
    @media(max-width: 583px) {
        height: 1100px;
        justify-content: space-evenly;
    }
    
`
export const Card = styled.div`
width: 174px;
height: 240px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
text-align: center;
border-radius: 15px;
margin: 7px 5px;
    background-color: #F4F4F4;


h2{
    width: 100%;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    background-color: #022335;
    color: white;
    font-size: 13px;
}
@media(max-width: 389px) {
    width: 150px;
    height: 320px;
    text-align: start;
    }

:hover{
    cursor: pointer;
    padding: 5px;
    transition: 1s;
}
:hover>#Testaa{
    display: flex;
}

img{
    width: 103px;
    height: 103px;

    @media(max-width: 389px) {
    width: 150px;
    height: 150px;
    }
}
p{
    font: 14px Rubik, sans-serif;
    margin: 15px 0px;
    color: #0066C0;
}
span{
  font-size: 16px;
    color: #222;
    font-weight: 500;
    width: 100%;
    margin-top: 20px;
}

div{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

section{
    width: 100%;
    height: 50px;
    display: none;
    justify-content: space-between;

    button{
        width: 70px;
        height: 30px;
        color: white;
        border-radius: 5px;
    }
    #AddCart{
        background-color: #FF9300;
    }
    #btcomprar{
        background-color: green;
    }
}

`
