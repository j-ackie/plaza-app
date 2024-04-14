import {
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { useAddHistory } from '../useHistoryQueries';
import {useGetCartById} from '../useCartQueries';
import Loading from '@/components/Loading';
import ModalProduct from '../Components/ModalProduct';
import HistoryProduct from '../Components/HistoryProduct';

const History = () => {
  const [selected, setSelected] = useState(-1);
  const [addHistory, {}] = useAddHistory();
  const [checked, setChecked] = useState(Array(0));
  const { loading, error, data } = useGetCartById(1);
  const [visible, setVisible] = useState(false);

  if (loading) return <Loading />;

  if (error) return <Text>{error.message}</Text>;

  const handleConfirmPress = () => {
    for (let i = 0; i < checked.length; i++) {
      if (checked[i]) {
        addHistory({
          variables: {
            order: {
              productID: data.cart[i].productID,
              videoID: data.cart[i].videoID,
            },
          },
        });
      }
    }
  };

  const toggleCheckbox = (index) => {
    const checkedData = [...checked];
    checkedData[index] = !checkedData[index];
    setChecked(checkedData);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalProduct
        item={data.cart[selected]}
        browsing={false}
        visible={visible}
        setVisible={setVisible}
      />
      <FlatList
        data={data.cart}
        renderItem={(item) => {
          return (
            <HistoryProduct
              item={item}
              setSelected={setSelected}
              setVisible={setVisible}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default History;
