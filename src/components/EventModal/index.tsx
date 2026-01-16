import { FiCalendar, FiClock, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { Modal } from '../Modal';
import { ModalFooter } from '../Modal/style';
import { useTheme } from '../../context/useTheme';
import { type EventoData } from '../../service/eventoService';
import {
  ModalContent,
  ModalImageContainer,
  ModalImage,
  ModalHeaderGroup,
  ModalTitle,
  ModalInfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  StatusBadge,
  CloseButton
} from './style';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  evento: Partial<EventoData>;
}

export const EventModal = ({ isOpen, onClose, evento }: EventModalProps) => {
  const { darkMode } = useTheme();

  const isEventoPassado = (data?: string, hora?: string) => {
    if (!data || !hora) return false;
    const agora = new Date();
    const dataEvento = new Date(`${data}T${hora}`);
    return dataEvento < agora;
  };

  const passado = isEventoPassado(evento.date, evento.time);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Detalhes do Evento">
      <ModalContent>
        <ModalImageContainer $darkMode={darkMode}>
          <ModalImage src={evento.imageUrl || '/imageDefault.jpg'} />
        </ModalImageContainer>

        <ModalHeaderGroup>
          <InfoLabel $darkMode={darkMode}>Nome do Evento</InfoLabel>
          <ModalTitle $darkMode={darkMode}>{evento.name}</ModalTitle>
        </ModalHeaderGroup>

        <ModalInfoGrid>
          <InfoItem>
            <InfoLabel $darkMode={darkMode}>
              <FiCalendar /> Data e Horário
            </InfoLabel>
            <InfoValue $darkMode={darkMode}>
              {evento.date} às {evento.time?.substring(0, 5)} <FiClock size={14} />
            </InfoValue>
          </InfoItem>

          <InfoItem>
            <InfoLabel $darkMode={darkMode}>
              <FiMapPin /> Localização
            </InfoLabel>
            <InfoValue $darkMode={darkMode}>{evento.location}</InfoValue>
          </InfoItem>
        </ModalInfoGrid>

        {passado && (
          <StatusBadge $darkMode={darkMode}>
            <FiCheckCircle size={22} /> Evento Concluído
          </StatusBadge>
        )}

        <ModalFooter>
          <CloseButton onClick={onClose}>
            Fechar Detalhes
          </CloseButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};