import React, { useState, useEffect, useCallback } from 'react'
import { Button } from 'react-native'
import { View, Text, StyleSheet, FlatList } from 'react-native'
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
      <View style={styles.container}>
        <Text style={styles.h2text}>Places to Putt</Text>
        <FlatList
          data={businesses}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
            <View style={styles.flatview}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          }
          keyExtractor={item => item.id}
        />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  h2text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontSize: 18
  },
})

export default Putt
