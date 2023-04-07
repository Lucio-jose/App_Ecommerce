import styled from "styled-components";
import Img from '../../assets/img/banner73.png'
import Img1 from '../../assets/img/banner71.png'

const Container = styled.div`
 width: 100%;
 height: 300px;
 background-color: #F4F4F4;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 justify-content: center;

 h2{
    font-weight: 400;
 }

 #alldivs{
    display: flex;
    align-items: center; 
    justify-content: space-around;
 }

 .category-name{
        display: flex;
        align-items: center;
        justify-content: end;
        width: 95.5%;
        height: 60px;

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
export {Container};

export const Content1 = styled.div`
 width: 25%;
 height: 150px;
 background-image: url(${Img});

 :hover > div{
        display: flex;
        cursor: pointer;
    }

 div{
    width: 100%;
    height: 150px; 
    background-color: rgba(12, 12, 12, 0.808);
    display: flex;
    justify-content: center;
    align-items: center; 
    color: #5a88ca;
    display: none;


 }
`
export const Content = styled.div`
 width: 25%;
 height: 150px;
 background-image: url(${Img1});

 :hover > div{
        display: flex;
        cursor: pointer;
    }

 div{
    width: 100%;
    height: 150px; 
    background-color: rgba(12, 12, 12, 0.808);
    display: flex;
    justify-content: center;
    align-items: center; 
    color: #5a88ca;
    display: none;
        transition: 4s;
 }
`
