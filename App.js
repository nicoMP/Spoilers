const UserIngredients = require('./Js/UI/itemPage.js').UserIngredients;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
         <UserIngredients/>
    </NavigationContainer>
  );
}

