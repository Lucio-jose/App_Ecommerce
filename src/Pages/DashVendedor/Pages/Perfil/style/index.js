import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 700px;
background-color: #f1f1f1;
display: flex;
justify-content: center;
align-items: center;
`
export const Content = styled.div`
width: 95%;
height: 500px;
display: flex;
justify-content: space-between;
`
export const SideLeft = styled.div`
width: 23%;
height: 500px;
border-right: 1px solid #e1e1e1;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;

.photperfil{
    width: 100%;
    height: 95px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #e1e1e1;

    img{
    width: 120px;
    height: 120px;
    margin-top: -50px;
    border-radius: 100%;
}
}

h2{
    margin: 15px 0px;
    color: #16161d;
    font-size: 19px; 
}
ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
ul li{
    margin-bottom: 20px;
    width: 95%;
    background-color: #f1f1f1;
    font-size: 15px;
    padding-left: 55px;
    display: flex;
    align-items: center;
    cursor: pointer;

    img{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
}
button{
    background-color: #4883ff;
    width: 80px;
    height: 35px;
    border-radius: 50px;
    color: white;
}
`
export const SideRight = styled.div`
width: 75%;
height: 500px;
background-color: white;
display: flex;
flex-direction: column;


.Nav{
    width: 100%;
    height: 95px;
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid #e1e1e1;

    a{
        width: 100px;
        border-right: 1px solid #e1e1e1;
        margin-right: 10px;
        height: 25px;
        color: #022335;
    }
}

`