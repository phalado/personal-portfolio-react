import { ReactNode } from 'react';
import Modal from 'react-modal';
import styles from '../styles/ModalStyles';

const ContentModal = (props: {
  isOpenModal: boolean;
  closeModal: () => void;
  children: ReactNode;
  big: boolean;
}) => {
  const { isOpenModal, closeModal, children, big } = props;

  const modalStyle = big ? styles.bigModal : styles.modal;

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      ariaHideApp={false}
      closeTimeoutMS={200}
      shouldCloseOnEsc
      style={{ content: modalStyle, overlay: styles.modalOverlay }}
    >
      {children}
    </Modal>
  );
};

export default ContentModal;
