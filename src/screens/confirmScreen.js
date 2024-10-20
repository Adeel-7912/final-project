import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { height } = Dimensions.get('window'); 

const OrderCompleteScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.checkmarkContainer}>
        <Image
          source={require('../assets/order.png')}
          style={styles.checkmark}
        />
      </View>

      <Text style={styles.congratsText}>Congratulations!!!</Text>
      <Text style={styles.messageText}>Your order has been taken and is being attended to</Text>

      
      <TouchableOpacity style={styles.trackOrderButton}>
        <Text style={styles.trackOrderButtonText}>Track order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueShoppingButton}>
        <Text style={styles.continueShoppingButtonText}>Continue shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  checkmarkContainer: {
    marginBottom: 30,
  },
  checkmark: {
    width: 164,
    height: 164,
    resizeMode: 'contain',
  },
  congratsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10, 
    textAlign: 'center',
  },
  messageText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  trackOrderButton: {
    backgroundColor: '#FFA451',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 15, 
    width: '80%', 
    alignItems: 'center',
  },
  trackOrderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  continueShoppingButton: {
    borderColor: '#FFA451',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: '80%', 
    alignItems: 'center',
  },
  continueShoppingButtonText: {
    color: '#FFA451',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OrderCompleteScreen;
