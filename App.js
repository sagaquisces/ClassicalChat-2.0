import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const HomeScreen = () =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Welcome to Puttchat</Text>
  </View>

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  }
})

export default createAppContainer(AppNavigator)

// import Chat from './components/Chat'
//
// export default createStackNavigator({
//   Chat: { screen: Chat }
// })
