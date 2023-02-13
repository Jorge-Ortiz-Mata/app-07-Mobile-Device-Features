import { View, Text, Image } from "react-native";
import PlaceDetails from "../components/PlaceDetails";

export default function Place({route}){
  const { id } = route.params.place;

  return(
    <View className="flex-1">
      <Text className="text-semibold text-xl my-3 font-bold text-center">Place Details</Text>
      <PlaceDetails title='Name' value='name' />
      <PlaceDetails title='Location' value='location' />
      <View className="border items-center justify-center">
        {/* { imageURL ? <Image source={{uri: imageURL}} className="w-40 h-40" /> : <Text>No image selected</Text> } */}
      </View>
    </View>
  )
}
