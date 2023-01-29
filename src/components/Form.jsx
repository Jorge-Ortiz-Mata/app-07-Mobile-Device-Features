import { useState } from "react";
import { View } from "react-native";
import CustomButton from "./CustomButton";
import FieldForm from "./FieldForm";

export default function Form(){
  const [place, setPlace] = useState({
    name: '', imageURL: '', location: ''
  });

  function buildPlace(id, value){
    // console.log(id);
    // console
  }

  function savePlace(){

  }

  console.log(place)

  return(
    <View className="bg-white p-2 m-2 rounded-lg">
      <FieldForm question="Place's name"/>
      <FieldForm question="Place's image"/>
      <FieldForm question="Place's location"/>
      <View className="items-center mt-10 mb-5">
        <CustomButton title="Create place" action={savePlace} />
      </View>
    </View>
  )
}
