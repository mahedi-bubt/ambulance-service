import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Home/Services/Services';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Contact from './pages/Home/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import Registration from './pages/Registration/Registration';
import About from './pages/About/About';
import Charges from './pages/Charges/Charges';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/charges">
              <Charges></Charges>
            </PrivateRoute>
            <PrivateRoute path="/servicedetails/:s_id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
