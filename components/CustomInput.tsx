import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface CustomInputProps extends TextInputProps {
  placeholder?: string;
}

export function CustomInput({ ...rest }: CustomInputProps) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholderTextColor="#888"
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 16
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16
    }

})