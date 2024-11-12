import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { formatDate } from '../utils/dateUtils';
import { Colors } from '../themes/Colors';
import { useIcon } from '../hooks/useIcon';

interface ListItemProps {
  item: any;
  navigation: any;
}

/**
 * ListItem component displays a summary of a transaction in a list view.
 * 
 * - When the item is tapped, the user is navigated to the 'DetailTransactionPage' with the selected transaction's details.
 * 
 *  props.item - The transaction data to be displayed, including sender/beneficiary details, amount, status, and date.
 *  props.navigation - Navigation object to navigate to the transaction details screen.
 */

const ListItem: React.FC<ListItemProps> = ({ item, navigation }) => {
  return (
    <View>
        <TouchableOpacity onPress={() => { navigation.navigate('DetailTransactionPage', { item }); }}>
        <View style={item.status === 'SUCCESS' ? styles.sideBorderSuccess : styles.sideBorderPending}>
            <View style={styles.listItemContainer}>
            <View style={styles.listItemRow}>
                <View style={styles.senderReceiver}>
                <View style={styles.bankRowContainer}>
                    <View style={styles.centerView}>
                    <Text style={styles.bankText}>{item.sender_bank} </Text>
                    </View>
                    <View style={styles.centerView}>
                    {useIcon({ type: 'FontAwesome6', name: 'arrow-right', size: 21, color: Colors.black })}
                    </View>
                    <View style={styles.centerView}>
                    <Text style={styles.bankText}> {item.beneficiary_bank}</Text>
                    </View>
                </View>
                <Text style={styles.nameText}>{item.beneficiary_name}</Text>
                <View style={styles.amountDateContainer}>
                    <Text style={styles.amountText}>Rp{item.amount.toLocaleString('id-ID')}</Text>
                    {useIcon({ type: 'Entypo', name: 'dot-single', size: 22, color: Colors.black })}
                    <Text style={styles.dateText}>{formatDate(item.created_at)}</Text>
                </View>
                </View>

                <View style={styles.emptySpace} />

                <View style={styles.statusContainer}>
                <View style={item.status === 'SUCCESS' ? styles.boxStatusSuccess : styles.boxStatusPending}>
                    <Text style={item.status === 'SUCCESS' ? styles.boxStatusSuccessText : styles.boxStatusPendingText}>
                    {item.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
                    </Text>
                </View>
                </View>
            </View>
            </View>
        </View>
        </TouchableOpacity>
        <View style={styles.gap}/>
    </View>
  );
};

const styles = StyleSheet.create({
  sideBorderPending: {
    backgroundColor: Colors.white,
    borderLeftColor: Colors.orange,
    borderLeftWidth: 5,
    borderRadius: 5,
  },
  sideBorderSuccess: {
    backgroundColor: Colors.white,
    borderLeftColor: Colors.green,
    borderLeftWidth: 5,
    borderRadius: 5,
  },
  listItemContainer: {
    padding: 15,
  },
  listItemRow: {
    flexDirection: 'row',
  },
  senderReceiver: {
    justifyContent: 'center',
    width: '70%',
  },
  bankRowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bankText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 15,
  },
  amountDateContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  amountText: {
    fontSize: 15,
  },
  dateText: {
    fontSize: 15,
  },
  emptySpace: {
    justifyContent: 'center',
    width: '2.5%',
  },
  statusContainer: {
    justifyContent: 'center',
    width: '27.5%',
    alignItems: 'flex-end',
  },
  boxStatusPending: {
    borderRadius: 7,
    borderWidth: 2,
    borderColor: Colors.orange,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  boxStatusPendingText: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxStatusSuccess: {
    borderRadius: 5,
    backgroundColor: Colors.green,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  boxStatusSuccessText: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
  gap: {
    height:10
  },
});

export default ListItem;