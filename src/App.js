import './App.css';
import { HomePages } from './home/HomePages';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/header/header";
import Footer from './components/header/footer/Footer';
import SinglePage from './components/header/watch/singlePage';


function App() {
  return( 
  <> 
   <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePages} />
      <Route exact path='/SinglePage/:id' component={SinglePage} />
      </Switch>
      <Footer />
   </Router>
   </>
   )
}

export default App;
