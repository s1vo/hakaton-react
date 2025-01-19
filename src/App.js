import AppRouter from "./router/app-router";
import { Body, Footer, Navbar } from "./shared/layout";

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <AppRouter />
        <Footer />
    </div>
  );
};

export default App;
