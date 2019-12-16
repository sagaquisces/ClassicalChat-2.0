import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/Home'
import ChatScreen from './screens/Chat'
import PuttScreen from './screens/Putt'

import PlaceholderScreen from './screens/Placeholder'

const AuthStack = createStackNavigator({
  Landing: {
    screen: PlaceholderScreen,
    navigationOptions: {
      headerTitle: 'Landing',
    },
  },
  SignIn: {
    screen: PlaceholderScreen,
    navigationOptions: {
      headerTitle: 'Sign In',
    },
  },
  CreateAccount: {
    screen: PlaceholderScreen,
    navigationOptions: {
      headerTitle: 'Create Account',
    },
  },
  ForgotPassword: {
    screen: PlaceholderScreen,
    navigationOptions: {
      headerTitle: 'Forgot Password',
    },
  },
  ResetPassword: {
    screen: PlaceholderScreen,
    navigationOptions: {
      headerTitle: 'Reset Password',
    },
  },
})

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
    Putt: PuttScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTitle: 'PuttChat',
      headerTitleStyle: {
        color: 'white'
      }
    },
  },
  {
    initialRouteName: 'Home'
  },

)

const App = createSwitchNavigator({
  Auth: {
    screen: AuthStack,
  },
  App: {
    screen: AppStack,
  },
});

export default createAppContainer(App)
