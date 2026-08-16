import { Pressable, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export function PrimaryButton({ label, onPress, loading, disabled }: Props) {
  const isDisabled = disabled || loading;
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        pressed && styles.pressed,
        isDisabled && styles.disabled,
      ]}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: !!loading }}
    >
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { backgroundColor: '#2563eb', paddingVertical: 14, paddingHorizontal: 20, borderRadius: 8, alignItems: 'center', minHeight: 48, justifyContent: 'center' },
  pressed: { backgroundColor: '#1e40af' },
  disabled: { backgroundColor: '#93c5fd' },
  label: { color: '#fff', fontWeight: '600' },
});