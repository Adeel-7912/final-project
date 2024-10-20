import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native';

const { height, width } = Dimensions.get('window');
const Home = () => {
  return (
    <View style={styles.container}>
     
      <View style={styles.topSection}>
        <Text style={styles.greetingText}>
          Hello Tony, What fruit salad combo do you want today?
        </Text>
        <TextInput style={styles.searchBar} placeholder="Search for fruit salad combos" />
      </View>
      <View style={styles.bottomSection}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Recommended Combo</Text>
            <View style={styles.comboRow}>
              <TouchableOpacity style={styles.comboCard}>
                <Image source={require('../assets/homescreen1.png')} style={styles.comboImage} />
                <Text style={styles.comboName}>Honey lime combo</Text>
                <Text style={styles.comboPrice}>₦ 2,000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.comboCard}>
                <Image source={require('../assets/homescreen2.png')} style={styles.comboImage} />
                <Text style={styles.comboName}>Berry mango combo</Text>
                <Text style={styles.comboPrice}>₦ 8,000</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.tabContainer}>
              <Text style={[styles.tabText, styles.activeTab]}>Hottest</Text>
              <Text style={styles.tabText}>Popular</Text>
              <Text style={styles.tabText}>New combo</Text>
              <Text style={styles.tabText}>Top</Text>
            </View>
            <View style={styles.comboRow}>
              <TouchableOpacity style={styles.comboCard}>
                <Image source={require('../assets/homescreen3.png')} style={styles.comboImage} />
                <Text style={styles.comboName}>Quinoa fruit salad</Text>
                <Text style={styles.comboPrice}>₦ 10,000</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.comboCard}>
                <Image source={require('../assets/homescreen4.png')} style={styles.comboImage} />
                <Text style={styles.comboName}>Tropical fruit salad</Text>
                <Text style={styles.comboPrice}>₦ 10,000</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.basketIconContainer}>
          <Image source={require('../assets/homescreen5.png')} style={styles.basketIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  topSection: {
    height: height * 0.35, 
    backgroundColor: '#fff', 
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  },
  bottomSection: {
    height: height * 0.65, 
    backgroundColor: '#F9F9F9',
    paddingBottom: 80, 
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  comboRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comboCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: (width / 2) - 30,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  comboImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  comboName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  comboPrice: {
    fontSize: 14,
    color: '#FFA451',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#999',
  },
  activeTab: {
    color: '#FFA451',
    fontWeight: 'bold',
  },
  basketIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FFA451',
    borderRadius: 50,
    padding: 15,
  },
  basketIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});

export default Home;