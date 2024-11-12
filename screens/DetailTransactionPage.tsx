import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { formatDate } from '../utils/dateUtils';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';
import CustomStatusBar from '../components/CustomStatusBar';
import { Colors } from '../themes/Colors';
import { useIcon } from '../hooks/useIcon';

/**
 * DetailTransactionPage component displays detailed information about a specific transaction.
 * It receives the transaction data via route parameters and displays various details
 * 
 * - copyToClipboard: Copies the transaction ID to the clipboard and shows a success toast message.
 * - goBack: Navigates the user back to the previous screen.
 * 
 * param {Object} navigation - Navigation object for navigating between screens.
 */

const DetailTransactionPage = ({ navigation }: any) => {
  const route = useRoute();
  const { item } = route.params as { item: any };

  const copyToClipboard = useCallback((text: string) => {
    Clipboard.setString(text);
    Toast.show({
      type: 'success',
      text1: 'Copied to Clipboard',
      text2: 'Text has been copied successfully!',
    });
  }, []);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar barStyle="light-content" backgroundColor={Colors.orange} />
      <View style={styles.gap} />

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.row}>
            <Text style={styles.transactionIdText}>ID TRANSAKSI : #{item.id} </Text>
            {useIcon({ 
                type: 'MaterialCommunityIcons', 
                name: 'content-copy', 
                size: 24, 
                color: Colors.orange ,
                onPress: () => copyToClipboard(item.id),
                style: styles.mirroredIcon,
            })}
          </View>
        </View>
      </View>
      <View style={styles.gapSmall} />

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.row2}>
            <Text style={styles.detailText}>DETAIL TRANSAKSI</Text>
            <TouchableOpacity onPress={goBack}>
              <Text style={styles.closeText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.gapSmall} />

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.bankRowContainer}>
            <Text style={styles.bankText}>{item.sender_bank} </Text>
            {useIcon({ type: 'FontAwesome6', name: 'arrow-right', size: 24, color: Colors.black })}
            <Text style={styles.bankText}> {item.beneficiary_bank}</Text>
          </View>
          <View style={styles.gapLarge} />

          <View style={styles.row2}>
            <View style={styles.columnLeft}>
              <Text style={styles.boldText}>{item.beneficiary_name}</Text>
              <Text style={styles.regularText}>{item.account_number}</Text>
            </View>
            <View style={styles.columnRight}>
              <Text style={styles.boldText}>NOMINAL</Text>
              <Text style={styles.regularText}>Rp{item.amount.toLocaleString('id-ID')}</Text>
            </View>
          </View>
          <View style={styles.gapLarge} />

          <View style={styles.row2}>
            <View style={styles.columnLeft}>
              <Text style={styles.boldText}>BERITA TRANSFER</Text>
              <Text style={styles.regularText}>{item.remark}</Text>
            </View>
            <View style={styles.columnRight}>
              <Text style={styles.boldText}>KODE UNIK</Text>
              <Text style={styles.regularText}>{item.unique_code}</Text>
            </View>
          </View>
          <View style={styles.gapLarge} />

          <Text style={styles.boldText}>WAKTU DIBUAT</Text>
          <Text style={styles.regularText}>{formatDate(item.created_at)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  card: {
    backgroundColor: 'white',
  },
  cardContent: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bankRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gap: {
    height: 10,
  },
  gapSmall: {
    height: 2,
  },
  gapLarge: {
    height: 20,
  },
  transactionIdText: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  closeText: {
    fontSize: 17,
    color: Colors.orange,
  },
  bankText: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  boldText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 17,
  },
  mirroredIcon: {
    transform: [{ scaleX: -1 }],
  },
  columnLeft: {
    justifyContent: 'center',
    width: '50%',
  },
  columnRight: {
    justifyContent: 'center',
    width: '40%',
  },
});

export default DetailTransactionPage;