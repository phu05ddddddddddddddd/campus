import { View, Text, StyleSheet } from 'react-native';

export function Texts() {
  return (
    <View style={styles.container}>
      {/* Card có height cố định - sẽ demo lỗi trước, sửa sau */}
      <View style={styles.card}>
        <Text >
          Thông báo về việc điều chỉnh lịch thi học kỳ 1 năm học 2026-2027
        </Text>
        <Text style={styles.summary}>
          Phòng đào tạo thông báo lịch thi các môn Lập trình di động, Cơ sở dữ liệu,
          và Mạng máy tính sẽ được dời sang tuần sau do trùng lịch với sự kiện của trường.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    // Không set height cố định - để tự giãn theo nội dung chữ
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  summary: { fontSize: 14, color: '#555' },
});