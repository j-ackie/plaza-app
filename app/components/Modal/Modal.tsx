import { useMemo, forwardRef, useCallback } from "react";
import BottomSheetModal, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import { Text, Image, TouchableOpacity } from "react-native";

const Modal = forwardRef(function Modal(props, ref: React.Ref<BottomSheetModal>) {
  const {modalContent} = props;

  const Backdrop = useCallback(p => 
    <BottomSheetBackdrop
      {... p}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.5}
      pressBehavior="close"
    />
  , []);

  const snapPoints = useMemo(() => ['75%'], []);

  return (
    <BottomSheetModal
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={Backdrop}
    >
      <BottomSheetView style={{alignItems: "center"}}>
        <Image
          source={{
            uri: modalContent.imageURI
          }}
          style={{width: 200, height: 200}}
          resizeMode="cover"
        />
        <Text style={{fontWeight: "bold", fontSize: 22, marginTop: 5}}>{modalContent.name}</Text>
        <Text style={{marginTop: 10}}>{modalContent.description}</Text>
        <Text style={{marginTop: 10, fontSize: 22}}>${modalContent.price}</Text>
        <TouchableOpacity style={{marginTop: 10, borderWidth: 1, padding: 5, borderRadius: 5}}>
          <Text style={{fontSize: 22}}>Purchase</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheetModal>
  )
});

export default Modal;