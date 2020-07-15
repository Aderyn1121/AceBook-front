import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";




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
  <main>
    
  </main>
)

}


export default App;
