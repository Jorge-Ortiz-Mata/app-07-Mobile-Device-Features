import { View, Button, Text, Alert, Image } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from "react";

export default function ImagePicker({name, buildPlace}){
  const [imageUri, setImageURL] = useState(undefined);
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

  async function verifyPermission(){
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED){
      Alert.alert(
        'Permission denied.',
        'You need to enable camera permissions to take photos'
      );
      return false;
    }

    return true;
  }

  async function imagePickerHandler(){
    const response = await verifyPermission();

    if(response){
      const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5
      });
      setImageURL(image.assets[0].uri);
      buildPlace(name, imageUri);
    } else {
      return;
    }
  }

  return(
    <View className="my-5">
      <Text>Add a new photo:</Text>
      <Button title="Open Camera" onPress={imagePickerHandler} />
      <View className="border items-center justify-center">
        { imageUri ? <Image source={{uri: imageUri}} className="w-40 h-40" /> : <Text>No image selected</Text> }
      </View>
    </View>
  )
}
