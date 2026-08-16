import { KeyboardAvoidingView, ScrollView, TextInput, Button, Platform, StyleSheet } from 'react-native';

export function KeyboardFormScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <TextInput placeholder="Họ tên" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Ghi chú" style={[styles.input, { height: 100 }]} multiline />
        <TextInput placeholder="Trường cuối cùng" style={styles.input} />
        <Button title="Gửi" onPress={() => alert('Đã gửi')} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12 },
});