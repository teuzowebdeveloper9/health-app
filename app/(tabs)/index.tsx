import { Image, ImageBackground, View,Text, Pressable  } from 'react-native';
import { styles } from '../stylesheets/HomeStylesheets';
import imageBackground from '../images/360_F_240635575_EJifwRAbKsVTDnA3QE0bCsWG5TLhUNEZ.jpg'
import medical from '../images/download.png'
import { useState } from 'react';


export default function TabOneScreen() {
  const [login,setLogin] = useState(false)

  const polarity = () => {
    setLogin((prev) => !prev)
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.ImageBackground} source={imageBackground} >
         <View style={styles.medical}>
            <Image   source={medical} />
         </View>       
      </ImageBackground>
      <View style={styles.lowView}>
        <Text style={styles.welcomeText}>
          walcome to health help
        </Text>
        <Text style={styles.bannerText} >
          {"login or sign in"}
        </Text>
        <View>
        {login ? <Text style={{color : 'red', fontSize : 20}} onPress={polarity} >login</Text> : <Text style={{color : 'red'}} onPress={polarity}>sign in</Text>
        }
      </View>
      </View>
    </View>
  );
}

