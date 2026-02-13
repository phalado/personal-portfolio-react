import { ReactNode, ComponentType, SVGProps } from 'react';
import Modal from 'react-modal';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../styles/ModalStyles';

const ContentModal = (props: {
  isOpenModal: boolean;
  closeModal: () => void;
  children: ReactNode;
  big: boolean;
}) => {
  const { isOpenModal, closeModal, children, big } = props;

  const modalStyle = big ? styles.bigModal : styles.modal;
  const CloseIcon = MdOutlineClose as ComponentType<SVGProps<SVGSVGElement>>;

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
      <CloseIcon onClick={closeModal} style={styles.closeModalButton} />
    </Modal>
  );
};

export default ContentModal;
