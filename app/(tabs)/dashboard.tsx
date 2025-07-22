// screens/Dashboard.tsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../style/dashboard.styles';
export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Dashboard</Text>

      <View style={styles.cardRow}>
        <Card title="Fundraising Progress">
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </Card>

        <Card title="Operating Expenses" highlight="$3,200" />
        <Card title="Volunteer Hours">
          <Text style={styles.barGraph}>▁ ▂ ▃ ▇</Text>
        </Card>
      </View>

      <View style={styles.cardRow}>
        <Card title="Meals Packed" highlight="1,500" />
        <Card title="Upcoming Tasks">
          <Text style={styles.bullet}>• Send impact report</Text>
          <Text style={styles.bullet}>• Schedule team meeting</Text>
        </Card>
      </View>

      <Card title="Grant Opportunity Finder" />
      <Card title="Smart Assistant">
        <Text style={styles.subText}>
          Consider automating donation receipts to save time.
        </Text>
      </Card>
    </ScrollView>
  );
}

function Card({
  title,
  highlight,
  children,
}: {
  title: string;
  highlight?: string;
  children?: React.ReactNode;
}) {
  return (
    <View style={styles.card}>
      {highlight && <Text style={styles.highlight}>{highlight}</Text>}
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}
