import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Today's Outfit</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />

      <View style={styles.container2}>
        <Text style={styles.item}>Hat/Headwear</Text>
        <Text style={styles.item}>Top</Text>
        <Text style={styles.item}>Bottom</Text>
        <Text style={styles.item}>Shoes</Text>
        <Text style={styles.item}>Accessories</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 20, 
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    width: '100%', 
  },
  item: {
    fontSize: 18, 
    fontWeight: 'bold',
    height: 50, 
    width: '90%', 
    textAlign: 'center',
    marginVertical: 10, 
    padding: 40, 
    borderWidth: 1,
    borderColor: '#ccc', 
    borderRadius: 10, 
  }
});
