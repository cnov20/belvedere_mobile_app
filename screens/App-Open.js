import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

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
        </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
        width: 280,
        height: 280,
        marginLeft: '15%',
        marginTop: '10%'
      }
});