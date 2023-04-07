import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 157px;
background-color: #022335;
color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
`
export const Content = styled.div`
width: 90%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;

section{
    width: 22%;
    display: flex;
    justify-content: end;
    align-items: center;

    h3{
        color: #FF9300;
        font-weight: 400;
    }

    img{
        width: 40px;
        height: 40px;
    }
}
`
export const Seachh = styled.div`
width: 48%;
height: 50px;
background-color: white;
border-radius: 50px;
display: flex;

button{
    background-color: #FF9300;
    width: 150px;
    height: 50px;
    border-radius: 50px;
    color: white;
    font-size: 15px;
}

input{
    height: 50px;
    font-size: 15px;
    background-color: white;
    padding-left: 10px;
    margin-left: -19px;
    color: #FF9300;
}
select{
    width: 40%;
    border-radius: 50px;

}
`
export const States = styled.div`
width: 30%;
height: 50px;
display: flex;
justify-content: space-between;

div{
    width: 30%;
    display: flex;
    flex-direction: column;

    span{
        width: 20px;
        height: 20px;
        background-color: #FF9300;
        border-radius: 100%;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 12px;
    }
    a{
        color: #FFFFFF;
        font: 14px Rebuk,sans-serif;
        :hover{
            color: #FF9300;
            transition: 1s;
        }
    }
}
`
export const Content1 = styled.div`
width: 90%;
height: 57px;
display: flex;
border-top: 1px solid #024d75;

div{
    width: 20%;
    display: flex;
    align-items: center;
    
    select{
        width: 50%;
        color: #FFFFFF;

        option{
            background-color: #16161d;
        }
    }
}

ul{
    width: 80%;
    display: flex;
    justify-content: end;
    align-items: center;

    a{
        color: white;
        padding-left: 20px;
        font: 14px Rebuk,sans-serif;
        :hover{
            color: #FF9300;
            transition: 1s;
        }
    }
}
`
