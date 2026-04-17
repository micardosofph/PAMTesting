import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Criamos o componente da tela inicial
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial 🏠</Text>
      
      {/* O método .navigate('Details') diz ao app para procurar 
        uma rota chamada 'Details' definida no nosso Stack 
      */}
      <Button 
        title="Ir para Detalhes" 
        onPress={() => navigation.navigate('Details')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 }
});

export default HomeScreen;