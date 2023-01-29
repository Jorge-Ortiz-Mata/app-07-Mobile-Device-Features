import { StatusBar } from 'expo-status-bar';
import { View, Text } from "react-native";
import Form from '../components/Form';

export default function CreatePlace(){

  return(
    <View className="flex-1">
      <Text className="text-semibold text-xl my-3 font-bold text-center">Create Place</Text>
      <Form />
      <StatusBar style="dark" />
    </View>
  )
}
