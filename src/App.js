import './App.css';
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import User from './components/User/User'

function App() {
  // fire.init()

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>


          <Route exact path='/'>
            <Navbar></Navbar>
            <Content></Content>
            <Footer></Footer>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/user'>
            <User></User>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
