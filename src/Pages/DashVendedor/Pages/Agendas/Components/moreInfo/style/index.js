import styled from "styled-components";

const Search = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: flex !important;
    position: relative !important;
    cursor: pointer;

    top: 0 !important;
    right: 0 !important;

    border: 1px solid #4883ff;
    background-color: #4883ff;
    color: white;
    width: 100px;
        height: 20px;
        display: flex;
    justify-content: center;
    align-items: center;
  }

  h2{
    font-weight: 400;
    font-size: 19px;
    margin-top: 10px;
  }

  > div{
    width: 700px;
    height: 100%;
    background: #16161d;
    color: white;
    position: fixed;
    top: 0;
    left: 25%;
    padding: 20px;
    overflow: auto;
    z-index: 99999;
    transition: all 0.4s;
    display: ${(props) => props.bar};
    flex-direction: column;

    form{
      height: 300px;

      h3{
        color: #4883ff;
        font-size: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid #4883ff;
        width: 190px;
        font-weight: 400;
      }

      input{
        color: silver;
        font-size: 16px;
        width: 195px;
      }

      span{
        color: silver;
      }
      
      fieldset{
        display: flex;
        margin-top: 25px;
        
        section{
          margin-right: 100px;
        }

        .sectionDescription{
          width: 95%;

          input{
            width: 100%;
          }
        }
      }

      .sectionFile{
        width: 100%;
        margin-bottom: 20px;
        
        div{
          display: flex;
          width: 100%;
            flex-direction: row;
            justify-content: space-between;


          img{
            width: 200px;
            height: 150px;
          }
        }
         
        }

        .Btns{
          display: flex;
          flex-direction: row;
          width: 200px;
          justify-content: space-between;

          button{
            width: 90px;
          }
        }
     
    }
  }
`;
export default Search;
