import './App.css';
import Header from '../header/Header';
import data from '../db.json';
import Main from '../main/Main';
import Footer from '../footer/Footer';

function App() {

  let db = data.cards;
  
  return (
    <div className="App">
      <Header />
      <Main db = {db} />
      <Footer />
      
    </div>
  );
}

export default App;
