import { View, StyleSheet } from 'react-native';
import { ValidationFormScreen } from './src/exercises/ex9-validation/ValidationFormScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ValidationFormScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60 },
});