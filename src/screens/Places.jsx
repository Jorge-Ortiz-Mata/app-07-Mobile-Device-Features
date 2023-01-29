import { View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';

import CustomButton from "../components/CustomButton";
import PlacesList from "../components/PlacesList";

export default function Places(){

  function goToCreatePlace(){}

  return(
    <View className="flex-1 items-center bg-white">
      <Text className="text-semibold text-xl my-3 font-bold">All Places</Text>
      <CustomButton title="Create Place" action={goToCreatePlace}/>
      <PlacesList />
      <StatusBar style="dark" />
    </View>
  )
}
