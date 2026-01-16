import React from 'react';
import { FiX } from 'react-icons/fi';
import { Overlay, ModalContainer, ModalHeader, ModalBody, CloseButton } from './style';
import { useTheme } from '../../context/useTheme';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const { darkMode } = useTheme();

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer 
        $darkMode={darkMode} 
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader $darkMode={darkMode}>
          <h2>{title}</h2>
          <CloseButton onClick={onClose} $darkMode={darkMode}>
            <FiX size={24} />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          {children}
        </ModalBody>
      </ModalContainer>
    </Overlay>
  );
};