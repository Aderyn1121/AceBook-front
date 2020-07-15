import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';




const App = props => {
  useEffect(() => {
    props.loadToken();
});

useEffect(() => {
    props.loadCart();
});

useEffect(() => {
    (async () => {
        await props.fetchProducts();
    })();
});

useEffect(() => {
    window.scrollTo(0, 0)
}, [])


return(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={LandingPage} />
    </Switch>
  </BrowserRouter>
)

}


export default App;
