import BottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { Portal } from '@gorhom/portal';
import { FC, Ref } from 'react';
import Backdrop from './Backdrop';

interface ModalProps extends Omit<BottomSheetProps, 'snapPoints'> {
  modalRef?: Ref<BottomSheetMethods>;
  snapPoints?: BottomSheetProps['snapPoints'];
}

const Modal: FC<ModalProps> = ({
  modalRef,
  snapPoints = ['75%'],
  ...props
}) => {
  return (
    <Portal>
      <BottomSheet
        ref={modalRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={Backdrop}
        {...props}
      />
    </Portal>
  );
};

export default Modal;
