import styled from "styled-components";

const Header = styled.div`
  background-color: black;
  align-items: flex-end;
  height: 10vh;
  display: flex;
  justify-content: space-between;
`;

const Big = styled.text`
  font-size: 30px;
  color: white;
  align-self: center;
`;

const Foo = styled.div`
  background-color: black;
  align-items: flex-end;
  height: 10vh;
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

const Main = styled.div`
  background-color: white;
  justify-content: space-between;
  height: 80vh;
`;

const Container1 = styled.div`
  background-color: pink;
  padding-top: 30px;
  padding-left: 160px;
  padding-right: 160px;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Welcome = styled.text`
  font-size: 25px;
  align-self: center;
  justify-self: center;
`;

const Container2 = styled.div`
  background-color: grey;
  align-items: center;
  justify-content: center;
  height: 30%;
  text-align: center;
`;

const BTNPortfolio = styled.button`
  background-color: blue;
`;

function Fun(){
  console.log("Click!");
}

function App() {
  return (
    <div>
      <Header> 
        <Big style={{marginLeft: "60px"}}>잡아라 잡!</Big> 
        <Big style={{marginRight: "60px"}}>메뉴</Big> 
      </Header>

      <Main>
        <Container1>
          <Container2>
            <Welcome> (Welcome Message and help) </Welcome>
            <BTNPortfolio onClick={Fun}> <Big>포트폴리오 버튼</Big> </BTNPortfolio>
          </Container2>
        </Container1>
      </Main>


      <Foo> <Big>(Information)</Big> </Foo>
    </div>
  );
}

export default App;