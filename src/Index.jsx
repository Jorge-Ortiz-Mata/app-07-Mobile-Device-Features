import Welcome from "./screens/Welcome"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Index(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
