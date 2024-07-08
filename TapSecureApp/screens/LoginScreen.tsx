import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { IconFaceId } from '@tabler/icons-react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Función que se ejecuta al presionar el botón de login para manejar el inicio de sesion
   */
  const handleLogin = () => {
    if (email === 'test@test.com' && password === 'test') {
      navigation.replace('Home');
    } else {
      alert('Credenciales inválidas');
    }
  };

  /**
   * Función que se ejecuta al presionar el botón de faceId para manejar el inicio de sesion utilizando biometricas
   */
  const handleFaceIdLogin = async () => {
    // Verificar si el dispositivo tiene hardware para autenticación, ya sea FaceId o TouchId
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      alert('No se puede usar FaceId');
      return;
    }

    // en caso de que el dispositivo tenga hardware para autenticación, verificar si soporta FaceId
    const supportedAuthTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (supportedAuthTypes.length === 0) {
      alert('No se puede usar FaceId');
      return;
    }

    // verificar si el dispositivo tiene guardada la biometría
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      alert('No se puede usar FaceId');
      return;
    }

    // autenticar con FaceId
    const result = await LocalAuthentication.authenticateAsync()
    if (result.success) {
      navigation.replace('Home');
    } else {
      alert('Autenticación fallida');
    }
  }

  return (
    <View style={styles.container}>
      {/* texto olvidar contraseña */}
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => alert('Forgot password')}>
          <Text style={styles.forgotPasswordText}>¿Has olvidado la contraseña?</Text>
        </TouchableOpacity>
      </View>
      
      {/* icono de usuario */}
      <Image source={require('../assets/contrasena.gif')} style={styles.icon} />

      {/* inputs de correo y contraseña */}
      <TextInput style={styles.input} placeholder="correo@mail.com" placeholderTextColor="#c4c4c4" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#c4c4c4" value={password} onChangeText={setPassword} secureTextEntry />

      {/* boton de login */}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      {/* texto de crear cuenta */}
      <View style={styles.createAccountContainer}>
        <Text style={styles.createAccountText}>¿No tienes cuenta?</Text>
        <TouchableOpacity onPress={() => alert('Crear cuenta')}>
          <Text style={styles.createAccountLink}> Crear cuenta</Text>
        </TouchableOpacity>
      </View>

      {/* Boton de faceId */}
      <View style={styles.faceContainer}>
        <TouchableOpacity onPress={handleFaceIdLogin} style={{alignContent: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
          <IconFaceId size={40} stroke="#c4c4c4" />
          <Text style={styles.useFaceId}>Accede mostrando tu cara</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // contenedor principal de la vista
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  // icono gif del candado
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  // contenedor principal forgotpassword
  forgotPasswordContainer: {
    position: 'absolute',
    top: 80,
    right: 30,
  },
  // texto de olvidar contraseña
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#c4c4c4',
    fontSize: 14,
  },
  // inputs email y contraseña
  input: {
    height: 40,
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  // boton de login
  loginButton: {
    backgroundColor: '#000',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
  },
  // texto del boton de login
  loginButtonText: {
    color: '#fff',
    fontSize: 20
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  createAccountText: {
    color: '#c4c4c4',
    fontSize: 14,
  },
  createAccountLink: {
    color: '#33CCCC',
    fontSize: 14,
  },
  faceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  useFaceId: {
    color: '#c4c4c4',
    fontSize: 14,
    marginLeft: 10,
    textDecorationLine: 'underline',
  }

});

export default LoginScreen;
