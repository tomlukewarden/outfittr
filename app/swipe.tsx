import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';

export default function Swipe() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Today's Outfit</Text>
      <View style={styles.separator} />

      {/* Outfit Categories */}
      <View style={styles.container2}>
        {["Hat/Headwear", "Top", "Bottom", "Shoes", "Accessories"].map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
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
    backgroundColor: '#ccc', // Added a background color to make it visible
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

