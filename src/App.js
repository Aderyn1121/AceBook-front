import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from './components/LandingPage';
import {loadToken} from './actions/sessionActions'
import { fetchPeople } from './actions/peopleActions';
import Profile from './components/Profile'
import People from './components/People';
import PersonProf from './components/PersonProf';


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     rest.needLogin === true
//       ? <Redirect to='/' />
//       : <Component {...props} />
//   )} />
// )



const App = props => {
  useEffect(() => {
    props.loadToken();
});

useEffect(() => {
  (async () => {
      await props.fetchPeople();
  })();
});


useEffect(() => {
    window.scrollTo(0, 0)
}, [])


return(
  <BrowserRouter>
    <Switch>
      <Route path='/person/:personId' component={PersonProf} />
      <Route exact path='/people' component={People} />
      <Route exact path='/profile' component={Profile} />
      <Route path='/' component={LandingPage} />
    </Switch>
  </BrowserRouter>
)

}

// const mapStateToProps = state => {
//   return {
//     needLogin: !state.session.token,
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
      loadToken: () => dispatch(loadToken()),
      fetchPeople: () => dispatch(fetchPeople())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(
  App
);
