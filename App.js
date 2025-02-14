import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        React Native を始めよう！
      </Text>
      <Text style={styles.description}>
        App.js を編集して、アプリ開発を始めましょう！
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('ボタンが押されました！')}
      >
        <Text style={styles.buttonText}>
          ボタン
        </Text>
      </TouchableOpacity>

      <StatusBar style="light" backgroundColor="#6a5acd" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4682b4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});