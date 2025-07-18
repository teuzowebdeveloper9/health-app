import { Image, ImageBackground, View,Text  } from 'react-native';
import { styles } from '../stylesheets/HomeStylesheets';
import imageBackground from '../images/360_F_240635575_EJifwRAbKsVTDnA3QE0bCsWG5TLhUNEZ.jpg'
import medical from '../images/download.png'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.ImageBackground} source={imageBackground} >
         <View style={styles.medical}>
            <Image  source={medical} />
         </View>       
      </ImageBackground>
      <View style={styles.lowView}>
        <Text style={styles.welcomeText}>
          walcome to health help
        </Text>
        <Text >
          {"Only here you have everything to help your medical team"}
        </Text>
      </View>
    </View>
  );
}

