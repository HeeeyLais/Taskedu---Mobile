import { CustomInput } from '@/components/customInput';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const EMAIL_CORRETO = 'aluno'
    const SENHA_CORRETA = '123456'

    const handleLogin = () => {
      if (email === EMAIL_CORRETO && senha === SENHA_CORRETA) {
      router.replace('/(tabs)')
    } else {
      alert('E-mail ou senha incorretos!')
    }
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskEdu</Text>
      <Text style={styles.subtitle}>Bem-vindo ao seu organizador de tarefas</Text>

      <CustomInput
      placeholder='Digite o seu E-mail'
      value={email}
      onChangeText={setEmail}
      keyboardType ='email-address'
      autoCapitalize='none'
      />

      <CustomInput
      placeholder='Digite a sua Senha'
      value={senha}
      onChangeText={setSenha}
      secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3355ff',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});