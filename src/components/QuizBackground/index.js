import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  input{
      padding: 12px 28px;
      width:100%;
    }
  button{
    width:100%;
    padding: 0px 110px 20px;
    margin-top: 8px;
    background-color: #fff;
  }
  @media screen and (max-width: 500px) {
    background-image: none;
    background-color:#274a9e;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
    input{
      width:100%;
      padding: 0px 24px 16px;

    }
  }
`;

export default QuizBackground;