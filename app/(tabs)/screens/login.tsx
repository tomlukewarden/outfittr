import { Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>OUTFTTR</Text>
      <Text style={styles.welcome}>Welcome to OutFittr</Text>
      <Text style={styles.header}>Sign In</Text>
      
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" secureTextEntry />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      
  
      <View style={styles.footer}>
  <Text>Don't have an account?</Text>
  <Button 
    onPress={() => navigation.navigate('Signup')} 
    title="Sign up" 
  />
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
    backgroundColor: '#f5f5f5',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
  },
  footerLink: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
