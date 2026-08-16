import { SectionList, View, Text, StyleSheet } from 'react-native';

const sections = [
  { title: 'Hôm nay', data: ['Lịch thi thay đổi', 'Nghỉ học môn Mạng'] },
  { title: 'Tuần này', data: ['Đăng ký học phần', 'Hội thảo AI'] },
  { title: 'Trước đó', data: ['Thông báo học phí', 'Lịch nghỉ lễ'] },
];

export function SectionListScreen() {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text accessibilityRole="header" style={styles.sectionHeader}>
          {section.title}
        </Text>
      )}
      stickySectionHeadersEnabled
    />
  );
}

const styles = StyleSheet.create({
  row: { padding: 16, backgroundColor: '#fff' },
  sectionHeader: { fontWeight: 'bold', fontSize: 16, backgroundColor: '#f0f0f0', padding: 8 },
});