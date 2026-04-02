import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput style={styles.searchContainer} placeholder="Search here for music..."/>

      <Image style={styles.albumCover} source={require('./assets/paranoidBlackSabbath.jpg')}></Image>

      <View style={styles.infoContainer}>
        <Text style={styles.albumText}>Paranoid</Text>
        <Text style={styles.artistText}>Black Sabbath</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  searchContainer:{
    position: 'absolute',
    width: '80%',
    top: 25,
    padding: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
  },

  albumText: {
    fontSize: 26,
    fontWeight: 600
  },

  artistText: {
    textAlign: 'center'
  },

  albumCover: {
    width: '80%',
    height: '35%',
    borderRadius: 8
  }
});
