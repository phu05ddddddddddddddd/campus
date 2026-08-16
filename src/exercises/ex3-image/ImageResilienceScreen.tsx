import { useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

export function ImageResilienceScreen() {
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        {loading && !failed && (
          <ActivityIndicator style={StyleSheet.absoluteFill} />
        )}
        <Image
    
         source={{ uri: 'https://picsum.photos/300/200' }}
          style={styles.image}
          resizeMode="cover"
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => setFailed(true)}
        />
        {failed && (
          <View style={styles.fallback}>
            <Text style={styles.fallbackText}>Không tải được ảnh</Text>
          </View>
        )}
      </View>
      { }
      <Text style={styles.title}>Lập trình di động nâng cao</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { margin: 16, borderRadius: 8, overflow: 'hidden', backgroundColor: '#fff' },
  imageBox: { width: '100%', height: 160, backgroundColor: '#eee' },
  image: { width: '100%', height: '100%' },
  fallback: { ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ddd' },
  fallbackText: { color: '#666' },
  title: { padding: 12, fontSize: 16, fontWeight: 'bold' },
});