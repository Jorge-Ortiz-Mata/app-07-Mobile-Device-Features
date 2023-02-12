import { useAtom } from "jotai";
import { useState } from "react";
import { View, Alert } from "react-native";

import CustomButton from "./CustomButton";
import FieldForm from "./FieldForm";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

import { placesAtom } from "../data/atomVariables";
import { insertPlace } from "../utilities/database";
import PlaceObject from "../utilities/place";
import { useNavigation } from "@react-navigation/native";

export default function Form(){
  const navigation = useNavigation();
  const [places, setPlaces] = useAtom(placesAtom);
  const [place, setPlace] = useState({id: 0, name: '', imageURL: '', location: ''});

  function buildPlace(name, value){
    setPlace(previousState => ({
      ...previousState, [name]: value
    }));
  }

  async function savePlace(){
    if(place.name == null || place.imageURL == null || place.location == null){
      Alert.alert(
        'Fields empty',
        'Please, ensure that all fields are filled in correctly'
      )
    } else {
      const id = places.length + 1;
      const newPlace = new PlaceObject(id, place.name, place.imageURL, place.location);
      await insertPlace(place)
      places.push(newPlace);
      Alert.alert(
        'Place created',
        'Your new place has been created correctly.'
      )
      navigation.navigate('Places')
    }
  }

  return(
    <View className="bg-white p-2 m-2 rounded-lg">
      <FieldForm question="Place's name" name="name" buildPlace={buildPlace} />
      <ImagePicker />
      <LocationPicker />
      <FieldForm question="Place's location" name="location" buildPlace={buildPlace} />
      <View className="items-center mt-10 mb-5">
        <CustomButton title="Create place" action={savePlace} />
      </View>
    </View>
  )
}
