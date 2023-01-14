import '../Style/App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Tech from './Tech/Tech';
import Projects from './projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Tech />
      <Projects />
    </div>
  );
}

export default App;
