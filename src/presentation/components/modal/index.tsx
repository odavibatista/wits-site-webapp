import { Button } from "@nextui-org/button";

export interface IModalData {
  message: string;
  buttonText?: string;
  type: "success" | "error" | "warning";
}

interface ModalProps {
  modal: IModalData;
  openCloseModal: () => void;
}

const Modal = ({ modal, openCloseModal }: ModalProps) => {
  const { message, type } = modal;

  const modalStyles = {
    div1: 'bg-modal',
    div2: 'modal',
    p: 'message'
  }

  const handleClick = (): void => {
    openCloseModal();
  };

  return (
    <div className={modalStyles.div1}>
      <div className={modalStyles.div2}>
        <p className={modalStyles.p}>{message}</p>
        <div>
          <Button onClick={handleClick}>
            {modal.buttonText || "Ok"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;