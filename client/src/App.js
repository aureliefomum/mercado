//import pages created into App.js
//then based on path, show each component using reat-router components
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/TopNav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//  create TopNavigation/menu bar to navigate between pages
//  write it first here in App.js then move to its own component







function App() {
  return (
    <BrowserRouter>
    <TopNav />
    <ToastContainer position="top-center"/>
    <Switch>
      <Route exact path="/"  component={Home}/>
      <Route exact path="/login"  component={Login}/>
      <Route exact path="/register"  component={Register}/>
    </Switch>
      
    </BrowserRouter>
  );
}

export default App;
