import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthScreen from './src/screens/AuthScreen';
import Home from './src/screens/Home';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Splash');

  useEffect(() => {
    const timer = setTimeout(() => setCurrentScreen('Welcome'), 5000); // After 5 seconds navigate to WelcomeScreen
    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, []);

  const handleNavigation = (screen) => {
    setCurrentScreen(screen); // Navigate to the specified screen
  };

  let ScreenToRender;
  switch (currentScreen) {
    case 'Splash':
      ScreenToRender = <SplashScreen />;
      break;
    case 'Welcome':
      ScreenToRender = <WelcomeScreen onContinue={() => handleNavigation('Auth')} />; 
      break;
    case 'Auth':
      ScreenToRender = <AuthScreen onStartOrdering={() => handleNavigation('Home')} />;
      break;
    case 'Home':
      ScreenToRender = <Home />;
      break;
    default:
      ScreenToRender = <SplashScreen />;
  }

  return <View style={styles.container}>{ScreenToRender}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
