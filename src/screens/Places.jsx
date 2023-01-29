import { View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';

import CustomButton from "../components/CustomButton";
import PlacesList from "../components/PlacesList";
import { useNavigation } from "@react-navigation/native";

export default function Places(){
  const navigation = useNavigation();

  function goToCreatePlace(){
    navigation.navigate('CreatePlace');
  }

  return(
    <View className="flex-1 items-center bg-white">
      <Text className="text-semibold text-xl my-3 font-bold">All Places</Text>
      <CustomButton title="Create Place" action={goToCreatePlace}/>
      <PlacesList />
      <StatusBar style="dark" />
    </View>
  )
}
