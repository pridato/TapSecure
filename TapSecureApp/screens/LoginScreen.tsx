// screens/LoginScreen.tsx
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const LoginScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => navigation.replace('Home')}>
        <View style={{ width: 200, height: 50, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Login</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
