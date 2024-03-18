import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
//Importar recursos expo-notification
import * as Notifications from 'expo-notifications'
//Solicita permissões de notificação ao iniciar o aplicativo
Notifications.requestPermissionsAsync();
Notifications.setNotificationHandler({
  handleNotification: async ()=>({
    //mostrar alerta quando a notificação for recebida
    shouldShowAlert: true,
    //tocar som quando a notificação for recebida
    shouldPlaySound: true,
    // mostrar a quantia de notificações
    shouldSetBadge: false,
  })
})
export default function App() {
  //função para lidar com a chamada da notificação
  const handleCallNotifications = async () =>{
    //obtêm status da permissão
  const {status} = await Notifications.getPermissionsAsync()
    //Verifica se as notificações estão ativas
    if(status !== "granted"){
      alert("Você não deixou as notificações ativas")
    }
    await Notifications.scheduleNotificationAsync({

      content: {
        title: "Cancelar Consulta",
        body: "Consulta cancelada com sucesso",
        sound: null,
        vibrationPattern: [0, 250, 250, 250],
      },
      trigger: null,
    })
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style = {styles.btn} onPress={handleCallNotifications}>
        <Text style= {styles.txt}>Ligar Notificação</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  btn:{
    width: '80%',
    height: 40,
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
  txt:{
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 24,
  }
});
