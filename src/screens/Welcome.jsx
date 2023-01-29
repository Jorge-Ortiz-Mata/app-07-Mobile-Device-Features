import { Pressable, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from "expo-linear-gradient";

export default function Welcome(){

  return(
    <LinearGradient colors={['#00425A', '#1F8A70']} className="flex-1 items-center justify-center">
      <Text className="font-semibold text-white text-2xl">The Cellphone Gadgets App</Text>
      <Text className="text-white text-center m-5">Within this ap you should be able to use features of your mobile phone such as camera, location and more.</Text>
      <Pressable className="px-5 py-3 rounded-lg bg-green-600">
        <Text className="text-white font-semibold">Open</Text>
      </Pressable>
      <StatusBar style="light" />
    </LinearGradient>
  )
}
