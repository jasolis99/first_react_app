import { useState } from 'react';
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import {Link, Route} from 'wouter'
function App() {
  const [keyword, setKeyword] = useState('Freddie Mercury')
  return (
    <div className="App">
      <section className="App-header">
        <h1>Gifs recomendados</h1>
        <Link to="/gif/freddie%20mercury">Freddie Mercury</Link>
        <Link to="/gif/spiderman">Spiderman</Link>
        <Route path="/gif/:keyword" component = {ListOfGifs}/>
      </section>
    </div>
  )
}

export default App;
