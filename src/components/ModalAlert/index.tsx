import { useEffect } from 'react';
import { FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';
import { 
AlertContainer, 
CloseButton 
} from './style';

interface ModalAlertProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const ModalAlert = ({ message, type, onClose }: ModalAlertProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AlertContainer type={type}>
      {type === 'success' ? <FiCheckCircle size={22} /> : <FiAlertCircle size={22} />}
      <span>{message}</span>
      <CloseButton onClick={onClose} type="button">
        <FiX size={18} />
      </CloseButton>
    </AlertContainer>
  );
};