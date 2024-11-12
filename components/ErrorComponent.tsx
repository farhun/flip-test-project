import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../themes/Colors';

interface ErrorComponentProps {
  refetch: () => void;
}

/**
 * ErrorComponent displays an error message with a retry button.
 * It is used to inform the user when something goes wrong, 
 * and provides an option to trigger a refetch of data.
 * 
 *  {function} refetch - The function to call when the user presses the retry button. 
 * This should refetch the data or trigger any required recovery process.
 */

const ErrorComponent: React.FC<ErrorComponentProps> = ({ refetch }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>Something went wrong, please try again</Text>
    <TouchableOpacity style={styles.retryButton} onPress={refetch}>
      <Text style={styles.retryButtonText}>Retry</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.white,
  },
  errorText: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: Colors.orange,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  retryButtonText: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default ErrorComponent;