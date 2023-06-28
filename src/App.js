import {BrowserRouter, Route,Switch,Redirect} from 'react-router-dom'

import './App.css';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 import Todo from './components/Todoapp'
 import Register from './components/register/index'
 import Login from './components/login'

const App = () =>{
  return(
    <BrowserRouter>
    <Switch>
    <Route exact path="/register" component={Register}/>
    <Route exact path = '/login' component={Login} />
    </Switch>
    </BrowserRouter>
    
  )
}
 

export default App;



