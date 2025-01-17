import AppRouter from './router/app-router';
import { Footer, Navbar } from './components/layout/index'

const App = () => {
  return (
      <div className="App">
          <Navbar/>
          <AppRouter/>
          <Footer/>
      </div>
  );
}

export default App;
