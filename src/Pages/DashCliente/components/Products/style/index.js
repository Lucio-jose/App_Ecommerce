import styled from 'styled-components'

export const ContentProduct = styled.div`
 width: 90%;
 padding-bottom: 40px;
 display: flex;
 justify-content: space-between;
`

export const SideLeft = styled.div`
 width: 75%;
 padding-bottom: 40px;
 flex-direction: column;

 h2{
    color: #022335;
    font-weight: 400;
 }

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
            font-size: 20px;
            font-weight: 500;
            color: #222;

            @media(max-width: 379px) {
              font-size: 17px;
    }
            
        }

    }
`
export const ContentP = styled.div`
 width: 100%;
 padding-bottom: 10px;
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
height: 340px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
text-align: end;
border-radius: 15px;
margin: 7px 5px;

@media(max-width: 389px) {
    width: 150px;
    height: 320px;
    text-align: start;
    }

:hover{
    background-color: #F4F4F4;
    cursor: pointer;
    padding: 5px;
    transition: 1s;
}
:hover>#BtnsCartCompra{
    display: flex;
}
 
img{
    width: 150px;
    height: 150px;

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
 
#BtnsCartCompra{
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


export const SideRight = styled.div`
 width: 23%;
 height: 400px;
 background-color: white;
 padding: 20px 15px;
 display: flex;
 flex-direction: column;

 h3{
    margin-bottom: 10px;
 }
 
`
export const Cart = styled.div`
background-color: #F4F4F4;
margin-bottom: 15px;
display: flex;
height: 50px;
align-items: center;
justify-content: space-between;

:hover{
    background-color: #e1e1e1;
    cursor: pointer;
}

section{
    display: flex;
    flex-direction: column;
}
span{
    font-size: 14px;
}
h5{
    font-size: 15px;
    font-weight: 500;
}
`