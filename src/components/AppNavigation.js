
import { StackNavigator } from 'react-navigation';
import LoginForm from './LoginForm';
import DetailsScreen from './Details';
import DetailsLibrary from './DetailsLibrary';

const AppNavigation = StackNavigator(
  {
    LoginForm: {
      screen: LoginForm
    },
    Details: {
      screen: DetailsScreen
    },
    DetailsLibrary: {
      screen: DetailsLibrary
    },
  },
  { initialRouteName: 'LoginForm',
    navigationOptions: {
      headerMode: 'float',
      headerTintColor: 'white',
      headerTitleStyle: { color: 'white' },
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 0
      }
    }
  }
);

export default AppNavigation;
