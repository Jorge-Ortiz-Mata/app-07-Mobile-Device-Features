import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import PlaceDetails from "../components/PlaceDetails";
import { fetchPlace } from "../utilities/database";

export default function Place({route}){
  const [place, setPlace] = useState({});

  useEffect(() => {
    async function loadPlace(){
      const currentPlace = await fetchPlace(route.params.place.id);
      setPlace(currentPlace);
    }

    loadPlace();
  }, []);

  return(
    <View className="flex-1">
      <Text className="text-semibold text-xl my-3 font-bold text-center">Place Details</Text>
      <PlaceDetails title='Name' value={place.name} />
      <PlaceDetails title='Location' value={place.location} />
      <View className="border items-center justify-center">
        { place.imageURL ? <Image source={{uri: place.imageURL}} className="w-40 h-40" /> : <Text>No image selected</Text> }
      </View>
    </View>
  )
}
