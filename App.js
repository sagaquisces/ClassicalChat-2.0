import React from 'react'
import { View, Text, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ChatScreen from './components/Chat'

const HomeScreen = ({ navigation }) =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Welcome to PuttChat</Text>
    <Button
      title="Chat"
      onPress={() => navigation.navigate('Chat')}
    />
  </View>

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)

// import Chat from './components/Chat'
//
// export default createStackNavigator({
//   Chat: { screen: Chat }
// })
