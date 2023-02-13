import { View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { fetchPlaces } from "../utilities/database";

import SinglePlaceBox from "./SinglePlaceBox";

export default function PlacesList(){
  const [places, setPlaces] = useState({});

  useEffect(() => {
    async function loadPlaces() {
      const allPlaces = await fetchPlaces();
      setPlaces(allPlaces)
    }

    loadPlaces();
  }, [])

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
