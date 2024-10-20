import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const WelcomeScreen = ({  onContinue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/welcomeIcon.png')}
          style={styles.topImage}
        />
        <Image
          source={require('../assets/small.png')}
          style={styles.smallImage}
        />
        <View style={styles.shadow} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Get The Freshest Fruit Salad Combo</Text>
        <Text style={styles.subtitle}>
          We deliver the best and freshest fruit salad in town. Order for a combo today!!!
        </Text>
        <TouchableOpacity onPress={onContinue} style={styles.button}>
          <Text style={styles.buttonText}>Let’s Continue</Text>
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
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  smallImage: {
    position: 'absolute',
    top: 0,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#FFA451',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 98,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
