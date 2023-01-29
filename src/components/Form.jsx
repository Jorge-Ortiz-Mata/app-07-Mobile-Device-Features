import { useState } from "react";
import { View } from "react-native";

import CustomButton from "./CustomButton";
import FieldForm from "./FieldForm";

export default function Form(){
  let [place, setPlace] = useState({name: '', imageURL: '', location: ''});

  function buildPlace(name, value){
    setPlace(previousState => ({
      ...previousState, [name]: value
    }))
  }

  function savePlace(){
    console.log(`Your place is: ${place.name}`)
  }

  console.log(place)

  return(
    <View className="bg-white p-2 m-2 rounded-lg">
      <FieldForm question="Place's name" name="name" buildPlace={buildPlace} />
      <FieldForm question="Place's image" name="imageURL" buildPlace={buildPlace} />
      <FieldForm question="Place's location" name="location" buildPlace={buildPlace} />
      <View className="items-center mt-10 mb-5">
        <CustomButton title="Create place" action={savePlace} />
      </View>
    </View>
  )
}
