import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { init } from './utilities/database';

import Welcome from "./screens/Welcome"
import Places from "./screens/Places";
import CreatePlace from "./screens/CreatePlace";
import Place from "./screens/Place";
import { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

export default function Index(){
  const [initialize, setInitialize] = useState(true);

  useEffect(() => {
    init().then(() => { setInitialize(false)}).catch((err) => console.log(err));
  }, []);

  if(initialize) return <AppLoading />

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Places" component={Places} />
        <Stack.Screen name="CreatePlace" component={CreatePlace} />
        <Stack.Screen name="Place" component={Place} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
