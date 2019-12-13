import React from 'react'
import { Button } from 'react-native'
import { View, Text } from 'react-native'

const Putt = props =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>A Putt Screen</Text>
  </View>

Putt.navigationOptions = ({ navigation }) => ({
  title: 'Putt',
  headerLeft: (
    <Button
      title="Home"
      onPress={() => navigation.navigate('Home')}
    />
  ),
  headerRight: (
    <Button
      title="Chat"
      onPress={() => navigation.navigate('Chat')}
    />
  ),
});

export default Putt
