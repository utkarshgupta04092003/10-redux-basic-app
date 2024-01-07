import React from 'react'

import { Provider } from 'react-redux';
import appStore from '../redux/appStore';
import CurrentValue from './components/CurrentValue';
import Increase from './components/Increase';
import Decrease from './components/Decrease';
import Reset from './components/Reset';

export default function App() {
  return (

    <Provider store={appStore}>

      <div>
        <h1 className="text-red-500">Heading working</h1>
        <CurrentValue/>
        <Increase/>
        <Decrease/>
        <Reset/>
      </div>
    </Provider>
  )
}
