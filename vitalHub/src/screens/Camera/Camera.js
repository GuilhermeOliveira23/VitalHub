import { StatusBar } from 'expo-status-bar';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import * as MediaLibrary from "expo-media-library"
export default function App() {
  const cameraRef = useRef(null)
  const [openModal, setOpenModal] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [tipoCamera, setTipoCamera] = useState(CameraType.front)
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.on);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()
      const {status: mediaStatus} = await MediaLibrary.requestPermissionsAsync()
  })();}, [])

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()

      setPhoto(photo.uri)
      setOpenModal(true)

      console.log(photo)
    }
  }
 

  async function ClearPhoto(){
    setPhoto(null)
    setOpenModal(false)
  }
  async function UploadPhoto(){
    await MediaLibrary.createAssetAsync(photo)
    .then(()=>{
      alert('Foto salva com sucesso')
    }).catch(error =>{
      alert('Não foi possível processar a foto')
    })
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={tipoCamera}
        style={styles.camera}
        ratio='16:9'
        flashMode={flashMode}
        >

        <View style={styles.viewFlip}>
          <TouchableOpacity
            style={styles.btnFlip}
            onPress={() => setTipoCamera(tipoCamera === CameraType.front ? CameraType.back : CameraType.front)}>
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>

      </Camera>
      <View style={{ margin: 10, flexDirection: 'row', gap: 20 }}>
      <TouchableOpacity style={styles.btnCapture} onPress={() => CapturePhoto()}>
        <FontAwesome name='camera' size={23} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity
            style={styles.btnFlash}
            onPress={() => setFlashMode(flashMode === Camera.Constants.FlashMode.off
              ?  Camera.Constants.FlashMode.on
              :  Camera.Constants.FlashMode.off)}
          >

            <FontAwesome name="flash" size={25} color={"#fff"} />
          </TouchableOpacity>

          </View>
      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>

          <Image
            style={{ width: "100%", height: 500, borderRadius: 15 }}
            source={{ uri: photo }} />

          <View style={{ margin: 10, flexDirection: 'row', gap: 20 }}>
            <TouchableOpacity style={styles.btnCapture} onPress={() => setOpenModal(false)}>
              <AntDesign name='closecircle' size={23} color="#FFF" />
            </TouchableOpacity>

      <TouchableOpacity style={styles.btnClear} onPress={() => ClearPhoto()}>
            <FontAwesome5 name="trash" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnUpload} onPress={() => UploadPhoto()}>
      <Feather name="upload" size={24} color="black" />
      </TouchableOpacity>

            
          </View>
        </View>
      </Modal>

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

  camera: {
    flex: 1,
    height: "80%",
    width: "100%",
  },

  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },

  btnFlip: {
    padding: 20,
  },

  txtFlip: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 20,
  },

  btnCapture: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#121212",
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCancel:{
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#121212",
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnClear:{
    padding: 20,
    backgroundColor:'transparent',
    justifyContent: 'center',
    
  },
  btnUpload:{
    padding:20,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  btnFlash:{
    padding: 20,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 50,
    backgroundColor: "#121212",
    justifyContent: 'center',
    alignItems: 'center',
  }
});
