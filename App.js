import React, { useState } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

import Routes from './Routes'

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }

  return (
    <Routes />
  )
}

// import Chat from './components/Chat'
//
// export default createStackNavigator({
//   Chat: { screen: Chat }
// })
