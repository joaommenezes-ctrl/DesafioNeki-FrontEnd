import { FiAlertTriangle, FiX, FiTrash2 } from 'react-icons/fi';
import { useTheme } from '../../context/useTheme';
import { Overlay, DeleteContainer, IconWrapper, ButtonGroup } from './style';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName?: string;
}

export const DeleteModal = ({ isOpen, onClose, onConfirm, itemName }: DeleteModalProps) => {
  const { darkMode } = useTheme();

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <DeleteContainer $darkMode={darkMode} onClick={e => e.stopPropagation()}>
        <IconWrapper>
          <FiAlertTriangle />
        </IconWrapper>
        
        <h2>Excluir Evento?</h2>
        <p>
          Você tem certeza que deseja remover <strong>"{itemName}"</strong>? 
          <br/>Essa ação não pode ser desfeita.
        </p>

        <ButtonGroup>
          <button className="cancel" onClick={onClose}>
            <FiX /> Cancelar
          </button>
          <button className="confirm" onClick={onConfirm}>
            <FiTrash2 /> Sim, Excluir
          </button>
        </ButtonGroup>
      </DeleteContainer>
    </Overlay>
  );
};