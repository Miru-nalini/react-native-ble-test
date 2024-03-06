import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useBLE from './useBLE';
import DeviceModal from './DeviceModal';
import { useState } from 'react';
export default function App() {
  const [ isModalVisible, setIsModalVisible] = useState(false);
  const {
    scanForPeripherals,
    requestPermissions,
    allDevices,
   /*  connectToDevice,
    
    connectedDevice,
    disconnectFromDevice,
    heartRate */
  } = useBLE();

  const scanForDevices = async () =>{
    const isPermissionEnabled = await requestPermissions();
    if(isPermissionEnabled) {
      scanForPeripherals();
    }
  }

  const openModal=()=>{
    setIsModalVisible(true);
  }

  const hideModal=()=>{
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={openModal}
      >
        <Text>Connect</Text>
      </TouchableOpacity>
      <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral = {()=>{}}
        devices={allDevices}
      />

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
