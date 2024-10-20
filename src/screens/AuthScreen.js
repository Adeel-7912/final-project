import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const AuthScreen = ({ onContinue }) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Authentication.png')}
          style={styles.topImage}
        />
      
        <Image
          source={require('../assets/small.png')}
          style={styles.smallImage}
        />
        <View style={styles.shadow} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.inputLabel}>What is your firstname?</Text>
        <TextInput
          style={styles.input}
          placeholder="Name" 
        />
        <TouchableOpacity onPress={onContinue} style={styles.button}>
          <Text style={styles.buttonText} >Start Ordering</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA451', 
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 50,
    position: 'relative',
  },
  topImage: {
    width: 300,
    height: 280,
    resizeMode: 'contain',
  },
  smallImage: {
    position: 'absolute',
    top: 10,
    right: 20,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  shadow: {
    width: 250,
    height: 10,
    backgroundColor: '#000',
    opacity: 0.1,
    position: 'absolute',
    bottom: -10,
    borderRadius: 50,
  },
  contentContainer: {
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    height: height * 0.4, 
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10, 
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 50,
    marginTop: 30 
  },
  button: {
    backgroundColor: '#FFA451', 
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 98, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AuthScreen;