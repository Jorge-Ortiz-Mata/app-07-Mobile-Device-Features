import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./screens/Welcome"
import Places from "./screens/Places";

const Stack = createNativeStackNavigator();

export default function Index(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Places" component={Places} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
