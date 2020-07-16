import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import {loadToken} from './actions/sessionActions'



const App = props => {
  useEffect(() => {
    props.loadToken();
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


const mapDispatchToProps = dispatch => {
  return {
      loadToken: () => dispatch(loadToken()),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(
  App
);
