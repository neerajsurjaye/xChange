import './App.css';

import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import User from './components/User/User'
import Sell from './components/SellPage/Sell'
import Buy from './components/Buy/Buy'

function App() {
  // fire.init()

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>


          <Route exact path='/'>

            <Content></Content>
            {/* <Footer></Footer> */}
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/user'>
            <User></User>
          </Route>

          <Route path='/sell'>
            <Sell></Sell>
          </Route>

          <Route path='/product/:id'>
            <Buy></Buy>
          </Route>

        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
