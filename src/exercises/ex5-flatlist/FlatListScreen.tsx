import { FlatList, View, Text, StyleSheet } from 'react-native';

interface Item { id: string; title: string; }

const data: Item[] = Array.from({ length: 30 }, (_, i) => ({
  id: `item-${i}`,
  title: `Thông báo số ${i + 1}`,
}));

export function FlatListScreen() {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text>{item.title}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      ListHeaderComponent={<Text style={styles.header}>Danh sách thông báo</Text>}
      ListFooterComponent={<Text style={styles.footer}>— Hết danh sách —</Text>}
      ListEmptyComponent={<Text style={styles.footer}>Không có thông báo nào</Text>}
    />
  );
}

const styles = StyleSheet.create({
  row: { padding: 16 },
  divider: { height: 1, backgroundColor: '#eee' },
  header: { fontSize: 18, fontWeight: 'bold', padding: 16 },
  footer: { textAlign: 'center', padding: 16, color: '#888' },
});