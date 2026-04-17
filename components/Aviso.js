import React from 'react';
import { Text, StyleSheet, View, Modal, TouchableOpacity } from 'react-native';

const Aviso = ({ visible, onClose }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
    >
      {/* Este View é o fundo preto com opacidade */}
      <View style={styles.overlayAviso}>
        
        {/* Este é o cartão branco do aviso */}
        <View style={styles.avisoContainer}>
          <Text style={styles.avisoTitle}>Aviso Teste</Text>
          <Text>Sua música está prestes a tocar!</Text>
          
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={{ color: 'white' }}>Fechar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlayAviso: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // O preto 50% que você pediu
    justifyContent: 'center',
    alignItems: 'center',
  },
  avisoContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  avisoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5
  }
});

export default Aviso;