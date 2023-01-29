import { Pressable, Text } from "react-native";

export default function CustomButton({title, action}){

  return(
    <Pressable className="px-5 py-3 rounded-lg bg-green-600" onPress={action}>
      <Text className="text-white font-semibold">{title}</Text>
    </Pressable>
  )
}
