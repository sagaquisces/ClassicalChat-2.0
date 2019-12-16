import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/Home'
import ChatScreen from './screens/Chat'
import PuttScreen from './screens/Putt'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
    Putt: PuttScreen,
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)
