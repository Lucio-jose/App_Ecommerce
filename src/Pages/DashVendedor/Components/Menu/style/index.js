import styled from "styled-components";

export const Nav = styled.div`
width: 220px;
height: 100vh;
background-color: #16161d;
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
left: 0px;
`
export const Logo = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(82, 115, 165);

span{
    font-weight: 600;
}

img{
    width: 50px;
    height: 50px;
}
`
export const ListNav = styled.div`
width: 100%;
height: 400px;
display: flex;
flex-direction: column;

#Focu{
    background-color: rgb(82, 115, 165);
}

a{
    display: flex;
    padding-left: 40px;
    align-items: center;
    text-decoration: none;
    margin-top: 20px;
    color: white;
    font-size: 15px;
    height: 50px;

    :hover{
        background-color: rgb(82, 115, 165);
        transition: 0.5s;
        cursor: pointer;
    }
}
img{
    height: 30px;
    width: 30px;
    margin-right: 7px;
}
`