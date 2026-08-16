import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { PrimaryButton } from './PrimaryButton';

export function ButtonDemoScreen() {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <PrimaryButton label="Nút bình thường" onPress={() => alert('Đã bấm')} />
      <PrimaryButton label="Nút bị khóa" disabled />
      <PrimaryButton
        label="Bấm để loading"
        loading={loading}
        onPress={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 1500); // giả lập xử lý 1.5s
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { padding: 16, gap: 12 } });