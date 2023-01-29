import { View, Text, FlatList } from "react-native";
import { useAtom } from "jotai";
import { placesAtom } from "../data/atomVariables";

export default function PlacesList(){
  const [places] = useAtom(placesAtom)

  console.log(places);

  return(
    <View className="border">
      <Text>All Places</Text>
    </View>
  )
}
