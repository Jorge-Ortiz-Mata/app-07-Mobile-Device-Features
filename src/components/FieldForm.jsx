import { View, Text, TextInput } from "react-native"

export default function FieldForm({question}){

  return(
    <View className="rounded-2xl ">
      <Text className="mt-3 mb-1 font-semibold font-bold text-gray-600">{question}</Text>
      <TextInput className="border border-gray-300 rounded-lg" />
    </View>
  )
}
