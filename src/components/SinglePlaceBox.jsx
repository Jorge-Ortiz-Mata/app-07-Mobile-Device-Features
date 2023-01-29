import { Pressable, Text } from "react-native";

export default function SinglePlaceBox({place}){

  return(
    <Pressable className="px-14 py-5 my-5 rounded-lg bg-gray-50" onPress={() => {console.log(place.name)}}>
      <Text className="font-bold">Name: {place.name}</Text>
      <Text className="font-bold">Key identificatior: {place.id}</Text>
      <Text className="font-bold">Image URL: {place.imageURL}</Text>
      <Text className="font-bold">Location: {place.location}</Text>
    </Pressable>
  )
}
