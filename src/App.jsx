import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Job from "./components/Job";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header name="The Job Board" />
      <Jobs />
      <Job />
      <Footer />
    </>
  );
};

export default App;
