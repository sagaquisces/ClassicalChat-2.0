import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Home = ({ navigation }) =>

  <View style={styles.container}>
    <Text style={{ fontFamily: 'roboto-bold', fontSize: 32, color: 'white' }}>Welcome to PuttChat</Text>
    <Button
      title="Chat"
      onPress={() => navigation.navigate('Chat')}
    />
    <Button
      title="Putt"
      onPress={() => navigation.navigate('Putt')}
    />
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  logoContainer: {
    alignItems: 'center'
  },
  logoText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white'
  },
  logoDescription: {
    fontSize: 15,
    fontWeight: '600',
  }
})

export default Home
