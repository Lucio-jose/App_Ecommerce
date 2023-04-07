import styled from "styled-components";

const Search = styled.div`
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
    height: 40px;
    width: 150px;
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
        color: rgb(180, 180, 180);
        font-size: 15px;
        margin-bottom: 7px;
      }
      
      fieldset{
        display: flex;
        margin-top: 25px;
        
        section{
          width: 50%;
        }

        .sectionDescription{
          width: 95%;
          input{
            width: 100%;
            height: 80px;
          }
        }
      }

      .sectionFile{
        margin-bottom: 20px;
         input{
          padding-left: 0px;
          border: none;
          font-size: 15px;
         }
        }

      input{
        border: none;
        border-bottom: 1px solid #4883ff;
        height: 40px;
        width: 90%;
        color: white;
        font-size: 16px;
        padding-left: 10px;
      }
      select{
        border: none;
        border-bottom: 1px solid #4883ff;
        height: 40px;
        width: 90%;
        color: white;
        font-size: 16px;
        padding-left: 10px;
        
        option{
          background-color: #16161d;
        }
      }
    }
  }
`;
export default Search;
