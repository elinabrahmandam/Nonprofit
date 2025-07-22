// screens/FundingPage.tsx
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const mockGrants = [
  { id: '1', title: 'Youth Impact Grant', deadline: 'July 20, 2025' },
  { id: '2', title: 'Community Relief Fund', deadline: 'August 5, 2025' },
];

export default function FundingPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Grants</Text>
      <FlatList
        data={mockGrants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.grantCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.deadline}>Deadline: {item.deadline}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  grantCard: {
    backgroundColor: '#e8f0fe',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: { fontSize: 16, fontWeight: '600' },
  deadline: { fontSize: 14, color: '#555' },
});
