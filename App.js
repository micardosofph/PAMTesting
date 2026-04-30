import React, { useState, useRef } from 'react'; // Importamos o useState
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Platform, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Aviso from './src/components/Aviso';

const { width } = Dimensions.get('window');

const albumsInformations = [
  {
    id: 1,
    albumName: 'Black Sabbath',
    albumCoverPath: require('./assets/BlackSabbathAlbumCoverImages/blackSabbathBlackSabbath.jpg')
  },
  {
    id: 2,
    albumName: 'Paranoid',
    albumCoverPath: require('./assets/BlackSabbathAlbumCoverImages/paranoidBlackSabbath.jpg')
  },
  {
    id: 3,
    albumName: 'Master of Reality',
    albumCoverPath: require('./assets/BlackSabbathAlbumCoverImages/masterOfRealityBlackSabbath.jpg')
  },
  {
    id: 4,
    albumName: 'Vol. 4',
    albumCoverPath: require('./assets/BlackSabbathAlbumCoverImages/vol4BlackSabbath.png')
  },
  {
    id: 5,
    albumName: 'Sabbath Bloody Sabbath',
    albumCoverPath: require('./assets/BlackSabbathAlbumCoverImages/sabbathBloodySabbathBlackSabbath.jpg')
  },
  {
    id: 6,
    albumName: 'Sabotage',
    albumCoverPath: require('./assets/BlackSabbathAlbumCoverImages/sabotageBlackSabbath.jpg')
  },
  {
    id: 7,
    albumName: 'Technical Ecstasy',
    albumCoverPath: require('./assets/BlackSabbathAlbumCoverImages/technicalEcstasyBlackSabbath.jpg')
  },
  {
    id: 8,
    albumName: 'Never Say Die',
    albumCoverPath: require('./assets/BlackSabbathAlbumCoverImages/neverSayDieBlackSabbath.jpg')
  }
];

export default function App() {
  // Criamos o estado para controlar se o aviso aparece ou não
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TextInput style={styles.searchContainer} placeholder="Search here for music..." />

      <ScrollView 
      horizontal = {true}
      showsHorizontalScrollIndicator = {false}
      style={styles.scrollView} 
      contentContainerStyle={styles.scrollContent}>
        
        {albumsInformations.map((album) => (
          <View key={album.id} style={styles.cardContainer}>
            <Image
              style={styles.albumCover}
              source={album.albumCoverPath}
              resizeMode="cover"
            />
            <View style={styles.infoContainer}>
              <Text style={styles.albumText}>{album.albumName}</Text>
              <Text style={styles.artistText}>Black Sabbath</Text>
            </View>
          </View>
        ))}

      </ScrollView>

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

  scrollView: {
    marginTop: 110, // Espaço para o Search Bar
    width: '100%',
  },

  scrollContent: {
    alignItems: 'center',
    paddingBottom: 100,
    paddingHorizontal: 20,
    gap: 16
  },

  cardContainer: {
    alignItems: 'center',
    backgroundColor: '#e4e4e4',
    borderRadius: 22,
    padding: 16,
    width: width * 0.85,
    marginHorizontal: 10
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
    width: '100%',
    height: 200,
    borderRadius: 6,
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
    fontSize: 16,
    textAlign: 'center'
  }
});