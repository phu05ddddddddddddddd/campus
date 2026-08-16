import { View, Text, StyleSheet } from 'react-native';

const courses = Array.from({ length: 6 }, (_, i) => `Khóa học ${i + 1}`);

export function ResponsiveGridScreen() {
  return (
    <View style={styles.grid}>
      {courses.map(name => (
        <View key={name} style={styles.card}>
          <Text>{name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, padding: 16 },
  card: {
    flexGrow: 1,
    flexBasis: 260,
    minWidth: 240,
    maxWidth: 420,
    height: 100,
    backgroundColor: '#e0f2fe',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
  },
});