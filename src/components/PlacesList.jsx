import { View, Text, FlatList } from "react-native";
import { useAtom } from "jotai";
import { placesAtom } from "../data/atomVariables";

// import { places } from '../data/dummy-places';
import SinglePlaceBox from "./SinglePlaceBox";

export default function PlacesList(){
  const [places] = useAtom(placesAtom)

  return(
    <View className="mt-5">
      <FlatList
        data={places}
        keyExtractor={place => place.id}
        renderItem={({item}) => <SinglePlaceBox place={item} />}
      />
    </View>
  )
}
