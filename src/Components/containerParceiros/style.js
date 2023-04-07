import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 400px;
background-color: #F4F4F4;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

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
export {Container};

export const Content = styled.div`
width: 95%;
height: 400px;
display: flex;
justify-content: center;
flex-wrap: wrap;
background-color: #FFFFFF;
border: 1px solid #e1e1e1;
    border-radius: 3px;
    margin-bottom:20px;
    padding: 20px;
    
    div{
        width: 200px;
        height: 100px;
        background-color: #4883ff;
        margin: 10px;
    }
`