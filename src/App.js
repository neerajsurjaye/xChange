import './App.css';
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Navbar></Navbar>
            <Content></Content>
            <Footer></Footer>
          </Route>

          <Route exact path='/login'>
            <Login></Login>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
