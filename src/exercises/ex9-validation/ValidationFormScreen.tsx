import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

interface Values {
  fullName: string;
  studentId: string;
  email: string;
}
type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (!v.fullName.trim()) errors.fullName = 'Vui lòng nhập họ tên đầy đủ.';
  if (!/^SC-\d{4}-\d{4}$/.test(v.studentId.trim()))
    errors.studentId = 'Mã số theo định dạng SC-YYYY-NNNN.';
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) errors.email = 'Email không hợp lệ.';
  return errors;
}

export function ValidationFormScreen() {
  const [values, setValues] = useState<Values>({ fullName: '', studentId: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const errors = validate(values);

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Họ tên"
        style={styles.input}
        value={values.fullName}
        onChangeText={t => setValues(v => ({ ...v, fullName: t }))}
      />
      {submitted && errors.fullName && <Text style={styles.error}>{errors.fullName}</Text>}

      <TextInput
        placeholder="Mã số SV (SC-2026-0001)"
        style={styles.input}
        value={values.studentId}
        onChangeText={t => setValues(v => ({ ...v, studentId: t.toUpperCase() }))}
      />
      {submitted && errors.studentId && <Text style={styles.error}>{errors.studentId}</Text>}

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={values.email}
        onChangeText={t => setValues(v => ({ ...v, email: t }))}
      />
      {submitted && errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <Pressable
        style={styles.button}
        onPress={() => {
          setSubmitted(true);
          if (Object.keys(errors).length === 0) alert('Đăng ký thành công');
        }}
      >
        <Text style={{ color: '#fff' }}>Đăng ký</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { padding: 16, gap: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12 },
  error: { color: 'red', fontSize: 12 },
  button: { backgroundColor: '#2563eb', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 8 },
});