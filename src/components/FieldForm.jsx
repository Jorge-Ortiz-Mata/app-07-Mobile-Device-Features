import { useState } from "react"
import { View, Text, TextInput } from "react-native"

export default function FieldForm({question, name, buildPlace}){
  const [ value, setValue ] = useState('');

  return(
    <View className="rounded-2xl ">
      <Text className="mt-3 mb-1 font-semibold font-bold text-gray-600">{question}</Text>
      <TextInput className="border border-gray-300 rounded-lg px-2 py-1" onChangeText={buildPlace.bind(value, name)} />
    </View>
  )
}
