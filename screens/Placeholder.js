import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const getAvailableRoutes = navigation => {
  let availableRoutes = []
  if (!navigation) return availableRoutes;

  const parent = navigation.dangerouslyGetParent()

  if (parent) {
    if (parent.router && parent.router.childRouters) {
      availableRoutes = [
        ...availableRoutes,
        ...Object.keys(parent.router.childRouters)
      ]
    }

    availableRoutes = [...availableRoutes, ...getAvailableRoutes(parent)]
  }

  return [...new Set(availableRoutes)].filter(
    route => route !== navigation.state.routeName
  )
}

const Placeholder = ({ navigation }) =>
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'yellow'
    }}
  >
    {getAvailableRoutes(navigation).map(route => (
      <TouchableOpacity
        onPress={() => navigation.navigate(route)}
        key={route}
        style={{
          backgroundColor: '#fff',
          padding: 10,
          margin: 10,
        }}
      >
        <Text>{route}</Text>
      </TouchableOpacity>
    ))}
  </View>


export default Placeholder
