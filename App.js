import React, { useState } from 'react'; // Importamos o useState
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Platform, TouchableOpacity } from 'react-native';
import Aviso from './src/components/Aviso';

const albumsInformations = (
  {
    id: 1,
    albumName: 'Black Sabbath',
    albumCoverPath: './assets/BlackSabbathAlbumCoverImages/blackSabbathBlackSabbath.jpg'
  },
  {
    id: 2,
    albumName: 'Paranoid',
    albumCoverPath: './assets/BlackSabbathAlbumCoverImages/paranoidBlackSabbath.jpg'
  },
  {
    id: 3,
    albumName: 'Master of Reality',
    albumCoverPath: './assets/BlackSabbathAlbumCoverImages/masterOfRealityBlackSabbath.jpg'
  },
  {
    id: 4,
    albumName: 'Vol. 4',
    albumCoverPath: './assets/BlackSabbathAlbumCoverImages/vol4BlackSabbath.jpg'
  },
  {
    id: 5,
    albumName: 'Sabbath Bloody Sabbath',
    albumCoverPath: './assets/BlackSabbathAlbumCoverImages/sabbathBloodySabbathBlackSabbath.jpg'
  },
  {
    id: 6,
    albumName: 'Sabotage',
    albumCoverPath: './assets/BlackSabbathAlbumCoverImages/SabotageBlackSabbath.jpg'
  },
  {
    id: 7,
    albumName: 'Technical Ecstasy',
    albumCoverPath: './assets/BlackSabbathAlbumCoverImages/technicalEcstasyBlackSabbath.jpg'
  },
  {
    id: 8,
    albumName: 'Never Say Die',
    albumCoverPath: './assets/BlackSabbathAlbumCoverImages/neverSayDieBlackSabbath.jpg'
  }
);

// const albumsContainer = 
// for (let i = 1; i <= albumsInformations.length; i++) {

// }

export default function App() {
  // Criamos o estado para controlar se o aviso aparece ou não
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput style={styles.searchContainer} placeholder="Search here for music..." />

      {/* Dica: use aspectRatio para manter o quadrado perfeito no mobile */}

      <View id='albumsContainer'>

      </View>

      <View>
        <Image
          style={styles.albumCover}
          source={require('./assets/BlackSabbathAlbumCoverImages/paranoidBlackSabbath.jpg')}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.albumText}>Paranoid</Text>
          <Text style={styles.artistText}>Black Sabbath</Text>
        </View>
      </View>

      {/* Botão que muda o estado para true */}
      <TouchableOpacity
        style={styles.buttonVerAviso}
        onPress={() => setModalVisivel(true)} >
        <Text style={styles.buttonVerAvisoText}>Ver aviso</Text>
      </TouchableOpacity>

      {/* Chamamos o componente e passamos as funções via props */}
      <Aviso
        visible={modalVisivel}
        onClose={() => setModalVisivel(false)}
      />

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

  searchContainer: {
    position: 'absolute',
    width: '80%',
    top: 50, // Ajustei o top para não bater no entalhe do celular
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  albumCover: {
    width: '80vw',
    height: '80vw', // No RN mobile, vh pode dar erro em alguns casos, use números
    borderRadius: 8,
    marginBottom: 20
  },

  albumText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  artistText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#666'
  },

  buttonVerAviso: {
    position: "absolute",
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'black',
    bottom: 20,
    width: '90%'
  },

  buttonVerAvisoText: {
    color: 'white',
    fontSize: '1rem',
    textAlign: 'center'
  }
});