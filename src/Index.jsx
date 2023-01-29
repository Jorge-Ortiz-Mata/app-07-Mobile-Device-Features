import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./screens/Welcome"
import Places from "./screens/Places";
import CreatePlace from "./screens/CreatePlace";

const Stack = createNativeStackNavigator();

export default function Index(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Places" component={Places} />
        <Stack.Screen name="CreatePlace" component={CreatePlace} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
