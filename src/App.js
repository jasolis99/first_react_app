import React from 'react';
import 'App.css'
import Home from 'pages/Home'
import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail'
import Error404 from 'pages/error404';
import Login from 'pages/Login'
import Header from 'components/Header';
import Register from 'pages/Register';

import { Link, Route } from 'wouter'
import { GifsContextProvider } from 'context/GifsContext';
import { UserContextProvider } from 'context/UserContext';

function App() {

  return (
    <UserContextProvider>
      <div className="App">
        <section className="App-content">
          <Header />
          <Link to="/"><h1 className="App-logo">Giffy</h1></Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword/:rating?/:lang?" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={Error404} path="/404" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  )
}

export default App;
