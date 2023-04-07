import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 600px;
background-color: #e1e1e1;
display: flex;
justify-content: center;
align-items: center;
`
export const Info = styled.div`
width: 44%;
height: 530px;
background-color: #022330;
margin-right: 20px;
color: white;
display: flex;
justify-content: space-between;

#spanp{
    width: 100%;
    padding-left: 50px;
}

div{
    width: 47%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

h3{
    margin-top: 20px;
    color: #FF9300;
    font-weight: 400;
    width: 100%;
    border-bottom: 0.3px solid #FF9300;
    text-align: center;
    padding-bottom: 8px;
}

span{
    margin-top: 20px;
}
}

`
export const DivForm = styled.div`
width: 43%;
height: 530px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;

h3{
    font-weight: 400;
    margin-top: 10px;
}


form{
    margin-top: 20px;
    height: 200px;
    display: flex;
    flex-direction: column;

    #AreaInputs{
        display: flex;
    justify-content: space-evenly;
    }

    #AreaBtnEnv{
        width: 97%;
        display: flex;
        justify-content: end;

        button{
            width: 80px;
            height: 30px;
            background-color: #022330;
            color: white;
        }
    }
    div{
        width: 45%;

        label{
            font-size: 14px;
            color: #16161d;
        }

        input{
            width: 100%;
            background-color: #e1e1e1;
            height: 35px;
            margin-bottom: 15px;
            padding-left: 10px;
        }
        select{
            width: 100%;
            background-color: #e1e1e1;
            height: 35px;
            margin-bottom: 15px;

            optgroup{
                background-color: red;
                color: white;
            }
        }
    }
}
`

export const DivImgs = styled.div`
width: 100%;
height: 270px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

#Img1{
    width: 200px;
    height: 150px;
}

section{
    margin-top: 20px;
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    img{
        width: 70px;
        height: 70px;
    }
}
`
