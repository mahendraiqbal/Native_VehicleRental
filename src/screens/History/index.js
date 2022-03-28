import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import styles from '../../styles/History';
import Delete from '../../components/Delete';

import {useSelector} from 'react-redux';
import {
  getTransactionById,
  deleteTransactions,
} from '../../modules/transcations';

const History = () => {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([]);
  const token = useSelector(state => state.auth.userData.token);
  const id = useSelector(state => state.auth.userData.id);

  const [deleteId, setDeleteId] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    getTransactionById(token)
      .then(res => {
        console.log('result', res.data.result);
        setData(res.data.result);
      })
      .catch(err => console.log(err));
  }, [token]);

  const handleDelete = () => {
    deleteTransactions(id)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const [transactions, setTransactions] = useState(data);

  // const handleChange = id => {
  //   let temp = transactions.map(transaction => {
  //     if (id === transaction.id) {
  //       return {...transaction, isChecked: !transaction.isChecked};
  //     }
  //     return transaction;
  //   });
  //   setTransactions(temp);
  // };

  // let selected = transactions.filter(transaction => transaction.isChecked);

  // const isBoxChecked = idx => {
  //   console.log('check', checked, typeof checked);
  //   return checked.includes(idx);
  // };
  // const handleChecker = idx => {
  //   const isChecked = isBoxChecked(idx);
  //   if (!isChecked) {
  //     const newArr = [...checked];
  //     newArr.push(idx);
  //     setChecked(newArr);
  //   } else {
  //     const index = checked.indexOf(idx);
  //     const newArr = [...checked];
  //     newArr.splice(index);
  //     setChecked(newArr);
  //   }
  // };

  // const showModal = () => {
  //   setShow(!isShow);
  // };

  return (
    <ScrollView>
      <Text style={styles.titleCek}>History Order</Text>
      <View style={styles.topBar}>
        <Text style={styles.weekAgo}>A Week Ago</Text>
        <Text style={styles.topDelete}>Delete</Text>
      </View>

      {data.length > 0 &&
        data.map((datas, idx) => {
          return (
            <>
              <View style={styles.infoHistory}>
                <View>
                  <Image
                    style={styles.imageWrapper}
                    source={require('../../assets/defaultVehicles.png')}
                  />
                </View>
                <View style={styles.infoVehicle} key={idx}>
                  <Text style={styles.title}>{datas.Name_Vehicle}</Text>
                  <Text style={styles.titleNd}>Jan 18 to 21 2021</Text>
                  <Text style={styles.title}>
                    {datas.methods} : Rp. {datas.Vehicle_Price}
                  </Text>
                  <Text style={styles.titleRd}>Has been returned</Text>
                </View>
                <View style={styles.checkButton}>
                  <Checkbox
                    style={styles.Checkbox}
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                </View>
              </View>
            </>
          );
        })}
      {/* <Delete
        onPress={() => setModalV(!modalVisible)}
        onPress={() => {
          const param = {
            id: data.id,
          };
          setDeleteId(data.id);
          console.log('id delete', param.id);
          console.log('id delete history', data.id);
          setChecked(!checked);
          setModalVisible(!modalVisible);
        }}
        onValueChange={() => handleDelete(data.id)}
        value={data.id}
      /> */}
    </ScrollView>
  );
};
export default History;
