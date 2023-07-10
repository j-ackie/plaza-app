import { useState, useMemo, forwardRef, useCallback } from "react";
import BottomSheetModal, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Portal, PortalHost } from "@gorhom/portal";
import ModalItems from "./ModalItems";

const Modal = forwardRef((props, ref) => {
  const Backdrop = useCallback(p => 
    <BottomSheetBackdrop
      {... p}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.5}
      pressBehavior="close"
      onPress={() => props.setModalContent({})}
    />
  , []);

  const snapPoints = useMemo(() => ['75%'], []);

  return (
    <Portal>
      <BottomSheetModal
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={Backdrop}
        onClose={() => setPage(0)}
      >
        <ModalItems 
          postInfo={props.modalContent} 
          navigation={props.navigation}
          modalRef={ref}
        />
        
      </BottomSheetModal>
    </Portal>
  );
});

export default Modal;