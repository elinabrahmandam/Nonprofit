import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fefefe',
    flexGrow: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    color: '#1a1a1a',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    padding: 16,
    flex: 1,
    margin: 4,
    minHeight: 100,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#4a4a4a',
  },
  highlight: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 8,
  },
  progressFill: {
    width: '50%',
    height: '100%',
    backgroundColor: '#669999',
  },
  barGraph: {
    fontSize: 24,
    color: '#6c9',
    marginTop: 4,
  },
  bullet: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
  },
  subText: {
    fontSize: 14,
    color: '#4a7a6d',
    marginTop: 4,
  },
});
