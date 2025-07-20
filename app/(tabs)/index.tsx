import { Image, ImageBackground, View,Text, ScrollView  } from 'react-native';
import { styles } from '../../stylesheets/HomeStylesheets';
import imageBackground from '../../images/360_F_240635575_EJifwRAbKsVTDnA3QE0bCsWG5TLhUNEZ.jpg'
import medical from '../../images/download.png'
import { useContext, useState } from 'react';
import LoginFormComponent from '../../components/LoginForm/LoginForm'


export default function TabOneScreen() {
  const [login,setLogin] = useState(false)

  

  const polarity = () => {
    setLogin((prev) => !prev)
  }

  return (
    <ScrollView style={styles.container}>
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
        {login ? <LoginFormComponent isLogin={false}  onPress={polarity} /> : <LoginFormComponent isLogin={true} onPress={polarity} />
        }

      </View>
      </View>
    </ScrollView>
  );
}