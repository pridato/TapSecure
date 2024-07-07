import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({navigation}:any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button title="Back to Login" onPress={() => navigation.replace('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
  },
});

