import React, { useState, useEffect, useCallback } from 'react'
import { Button } from 'react-native'
import { View, Text } from 'react-native'
import axios from 'axios'
import SplashScreen from './SplashScreen'

import * as MyConstants from '../constants'

const config = {
  headers: {'Authorization': MyConstants.API_KEY},
  params: {
    term: 'golf',
    location: 'Bothell'
  }
}

const Putt = props => {
  const [businesses, setBusinesses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => {
      setBusinesses(response.data.businesses)
      setIsLoading(false)
    })
    .catch(error => {
      setError(error)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <SplashScreen />
  } else {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>A Putt Screen</Text>
      </View>
    )
  }
}

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
