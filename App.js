/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {TabNavigation} from './src/navigation/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';

// import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/* <View>
        <Text>ccccc</Text>
      </View> */}
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
