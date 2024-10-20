import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { height, width } = Dimensions.get('window');

const AddToBasketScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>← Go back</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/homescreen3.png')}
          style={styles.saladImage}
        />
      </View>

      <View style={styles.bottomSection}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.saladName}>Quinoa Fruit Salad</Text>
          <View style={styles.quantityRow}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
              <Text style={styles.quantityText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.quantityNumber}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.priceText}>₦ 2,000</Text>
          </View>

          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>One Pack Contains:</Text>
            <Text style={styles.descriptionText}>
              Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.
            </Text>
          </View>
          <Text style={styles.additionalInfo}>
            If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you.
          </Text>
        </ScrollView>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA451',
  },
  topSection: {
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  backText: {
    fontSize: 16,
    color: '#fff',
  },
  saladImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#fff', 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  saladName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10, 
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    fontSize: 20,
    color: '#333',
  },
  quantityNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA451',
  },
  descriptionSection: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
  },
  additionalInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#FFA451',
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddToBasketScreen;