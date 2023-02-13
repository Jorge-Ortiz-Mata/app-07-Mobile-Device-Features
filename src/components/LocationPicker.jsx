import { View, Text, Button } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';

export default function LocationPicker(){
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

  async function verifyPermissions(){
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED){
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED){
      Alert.alert(
        'Permission denied.',
        'You need to able location permissions to save your location'
      );
      return false;
    }

    return true;
  }

  async function getMyLocation(){
    const response = await verifyPermissions();

    if(response) {
      console.log('It entered')
      const location = await getCurrentPositionAsync();
      console.log(location);
      console.log('It finished')
    } else {
      return;
    }
  }

  function selectFromMap(){}

  return(
    <View className="my-5">
      <View>
        <Text>Select your location:</Text>
        <Button title="My location" onPress={getMyLocation} />
      </View>
      <Text className="text-center my-2 font-bold">or...</Text>
      <View>
        <Text>Select the place in the map:</Text>
        <Button title="Pick on map" onPress={selectFromMap} />
      </View>
      <View className="border">
        <Text>No location selected</Text>
      </View>
    </View>
  )
}
