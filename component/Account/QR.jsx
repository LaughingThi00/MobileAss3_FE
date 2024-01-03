// QRCodeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { RNCamera } from 'react-native-camera';

const QRCodeScreen = () => {
  const [qrData, setQRData] = useState('Hello!');

  const generateQRCode = () => {
    const newData = 'Hello!';
    setQRData(newData);
  };

  const onBarCodeRead = (event) => {
    console.log('Scanned QR Code:', event.data);
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.qrCodeContainer}>
        <QRCode value={qrData} size={200} />
      </View>

      <TouchableOpacity style={styles.button} onPress={generateQRCode}>
        <Text style={styles.buttonText}>Generate New QR Code</Text>
      </TouchableOpacity> */}

      {/* <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={onBarCodeRead}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCodeContainer: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
});

export default QRCodeScreen;



