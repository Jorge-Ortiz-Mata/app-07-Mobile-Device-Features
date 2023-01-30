import { View, Text } from "react-native";

export default function PlaceDetails({title, value}){

  return(
    <View className="rounded-lg bg-white p-2 my-1 mx-5 flex-row">
      <Text>{title}</Text>
      <Text className="font-bold ml-1">{value}</Text>
    </View>
  )
}
