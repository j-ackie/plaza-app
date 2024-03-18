import { BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet';
import { FC, RefObject } from 'react';
import Backdrop from './Backdrop';

interface ModalProps extends BottomSheetModalProps {
  modalRef?: RefObject<BottomSheetModal>;
}

const Modal: FC<ModalProps> = ({ modalRef, children, ...props }) => {
  return (
    <BottomSheetModal {...props} ref={modalRef} backdropComponent={Backdrop}>
      {children}
    </BottomSheetModal>
  );
};

export default Modal;
