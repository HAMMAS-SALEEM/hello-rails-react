import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import store from '../redux/configureStore'
import Greetings from './Greetings'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Greetings/> } />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
