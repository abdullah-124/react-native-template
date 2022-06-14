import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Banner from './src/Banner'
import Header from './src/Header'
import Prevention from './src/Prevention'
import Text from './src/Text/Text'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Prevention />
      <Banner />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
});
