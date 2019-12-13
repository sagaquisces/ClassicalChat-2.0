import React from 'react'
import { Button } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

const Chat = ({ navigation }) =>
  <GiftedChat />

Chat.navigationOptions = ({ navigation }) => ({
  title: 'Chat',
  headerLeft: (
    <Button
      title="Home"
      onPress={() => navigation.navigate('Home')}
    />
  ),
  headerRight: (
    <Button
      title="Putt"
      onPress={() => navigation.navigate('Putt')}
    />
  ),
});

export default Chat
