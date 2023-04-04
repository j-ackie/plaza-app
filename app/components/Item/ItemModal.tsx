import { useMemo, useRef } from "react";
import { View, Text, Button } from "react-native";
// import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetModal from "@gorhom/bottom-sheet";

const ItemModal = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%'], []);

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      // index={1}
      snapPoints={snapPoints}
      detached={true}
      enablePanDownToClose={true}
      containerStyle={{}}
    >
      <View>
        <Text>wow</Text>
      </View>
      <Button
        title="CLOSE"
        onPress={() => bottomSheetRef.current.close()}
      />
    </BottomSheetModal>
  )
}

export default ItemModal;