import styled from "styled-components";

const Container= styled.div`
 width: 100%;
 height: 39px;
 background-color: #F4F4F4;
 color: #333333;
 display: flex;
 justify-content: space-evenly;

 a{
 color: #888888;
 margin-right: 25px;
 width: 90px;
 font: 13px Arial,Helvetica,sans-serif;
 }

 @media (max-width: 765px) {
    display: flex;
    justify-content: flex-end;
 }
`
export {Container};

export const Menu= styled.div`
 width: 600px;
 height: 39px;
 display: flex;
 align-items: center;

 @media (max-width: 765px) {
    display: none;
 }
`
export const Btns= styled.div`
 width: 360px;
 height: 39px;
 display: flex;
 align-items: center;

 @media (max-width: 765px) {
    display: none;
 }

 a{
    margin-right: 10px;
    font-size: 14px;
 }
`
export const LoginCat= styled.div`
 width: 260px;
 height: 39px;
 display: flex;
 align-items: center;
 display: none;

 a{
    margin-right: 10px;
    font-size: 14px;
    border-radius: 100%;
    background-color: #16161d;
    width: 45px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
 }

 @media (max-width: 765px) {
    display: flex;
    justify-content: flex-end;
 }
`
