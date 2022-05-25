import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Input } from "@rneui/themed";
import { TextInput } from 'react-native-element-textinput';



export default function AppOpen() {
  return (
    <ImageBackground
        source={require('/Users/chris/Repos/belvedere_mobile_app/assets/mwn-module-01-arm-with-bottle.jpeg')}
        style={styles.background}
      >
        <View>
          <Image
            source={require('/Users/chris/Repos/belvedere_mobile_app/assets/Belvedere-Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
        <Input placeholder='SIGN IN'></Input>
        <Input placeholder='CREATE ACCOUNT'></Input>
        </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%',
      opacity: 0.6
    },
    logo:{
        width: 280,
        height: 280,
        marginLeft: '15%',
        marginTop: '10%',
        shadowOpacity: 0.4
      },
    // input: {
    //     alignItems: center;
    // }
});