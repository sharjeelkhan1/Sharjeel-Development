import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
const App = () => {
  return (
    <>
      <Header></Header>
      <main className="py-3">
        <Container>
          <HomeScreen></HomeScreen>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
