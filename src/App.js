import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AllBookings from './pages/AllBookings/AllBookings';
import BookYourDestination from './pages/BookYourDestinaiton/BookYourDestination';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import MyBookings from './pages/MyBookings/MyBookings';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
   <AuthProvider>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/home">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/allBookings">
          <AllBookings/>
        </PrivateRoute>
        <PrivateRoute path="/mybookings">
          <MyBookings/>
        </PrivateRoute>
        <PrivateRoute path="/destination/:id">
          <BookYourDestination/>
        </PrivateRoute>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
   </AuthProvider>
  );
}

export default App;
