import styled from 'styled-components';

interface ThemeProps {
  $darkMode: boolean;
}

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const ModalImageContainer = styled.div<ThemeProps>`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${props => props.$darkMode ? '#0f172a' : '#e2e8f0'};
  border: 1px solid ${props => props.$darkMode ? '#334155' : 'transparent'};
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ModalHeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ModalTitle = styled.h2<ThemeProps>`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: ${props => props.$darkMode ? '#f8fafc' : '#0f172a'};
`;

export const ModalInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 10px;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InfoLabel = styled.span<ThemeProps>`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${props => props.$darkMode ? '#94a3b8' : '#64748b'};
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const InfoValue = styled.div<ThemeProps>`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.$darkMode ? '#cbd5e1' : '#1e293b'};
`;

export const StatusBadge = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  border-radius: 10px;
  font-weight: 700;
  margin-top: 8px;
  background-color: ${props => props.$darkMode ? 'rgba(16, 185, 129, 0.15)' : '#d1fae5'};
  color: #10b981;
  border: 1px solid ${props => props.$darkMode ? 'rgba(16, 185, 129, 0.3)' : 'rgba(16, 185, 129, 0.1)'};
`;

export const CloseButton = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: none;
  background-color: #6366f1;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;