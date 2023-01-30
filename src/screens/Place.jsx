import { View, Text } from "react-native";
import PlaceDetails from "../components/PlaceDetails";

export default function Place({route}){
  const { id, imageURL, location, name } = route.params.place

  return(
    <View className="flex-1">
      <Text className="text-semibold text-xl my-3 font-bold text-center">Place Details</Text>
      <PlaceDetails title='Name' value={name} />
      <PlaceDetails title='Location' value={location} />
    </View>
  )
}
