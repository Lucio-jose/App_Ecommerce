import styled from "styled-components";
import Img from '../../assets/img/crossword.png'

const Container= styled.div`
 width: 100%;
 height: 180px;
 background-color: #5a88ca;
 background-image: url(${Img});
 display: flex;
 justify-content: center;
 align-items: center;

 h2{
    font-family: raleway;
  font-size: 50px;
  font-weight: 200;
  margin: 0;
  padding: 50px 0;color: #fff;
 }
`
export {Container};