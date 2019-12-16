import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'

const Home = ({ navigation }) =>

  <View style={styles.container}>
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontFamily: 'roboto-bold', fontSize: 64, color: 'white' }}>PuttChat</Text>
    </View>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Chat')}
    >
      <Text>Chat</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Putt')}
    >
      <Text>Putt</Text>
    </TouchableOpacity>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 32
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
