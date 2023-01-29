import { Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../components/CustomButton";

export default function Welcome(){
  const navigation = useNavigation();

  function goToPlacesScreen(){
    navigation.navigate('Places')
  }

  return(
    <LinearGradient colors={['#00425A', '#1F8A70']} className="flex-1 items-center justify-center">
      <Text className="font-semibold text-white text-2xl">The Cellphone Gadgets App</Text>
      <Text className="text-white text-center m-5">Within this ap you should be able to use features of your mobile phone such as camera, location and more.</Text>
      <CustomButton title="Let's go" action={goToPlacesScreen}/>
      <StatusBar style="light" />
    </LinearGradient>
  )
}
