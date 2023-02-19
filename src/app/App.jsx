import React, { useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
// ROUTES
import AppRouter from './routes/App.Routes';
// REDUX
import { loadUser } from './utils/redux/actions/AuthActions'
import store from './utils/redux/Store'


export default function App() {

  useEffect(() => {
    document.title = "Marvel - Version Croguennec Yoann";

    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <AppRouter />
    </Router>
  )
}
