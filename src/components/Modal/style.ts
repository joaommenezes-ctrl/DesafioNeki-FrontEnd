import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-in-out;
  padding: 20px;
`;

interface ThemeProps {
  $darkMode: boolean;
}

export const ModalContainer = styled.div<ThemeProps>`
  background-color: ${props => props.$darkMode ? '#1e293b' : '#ffffff'};
  color: ${props => props.$darkMode ? '#fff' : '#1e293b'};
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: ${slideIn} 0.3s ease-out;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  border: 1px solid ${props => props.$darkMode ? '#334155' : 'transparent'};
`;

export const ModalHeader = styled.div<ThemeProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid ${props => props.$darkMode ? '#334155' : '#e2e8f0'};

  h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const CloseButton = styled.button<ThemeProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$darkMode ? '#94a3b8' : '#64748b'};
  transition: color 0.2s;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    color: ${props => props.$darkMode ? '#fff' : '#1e293b'};
    background-color: ${props => props.$darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
  }
`;

export const ModalBody = styled.div`
  padding: 24px;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: all 0.2s;

    &.cancel {
      background-color: transparent;
      border: 1px solid #cbd5e1;
      color: #64748b;

      &:hover {
        background-color: #f1f5f9;
        color: #334155;
      }
    }

    &.confirm {
      background-color: #106EBE;
      color: white;

      &:hover {
        background-color: #005a9e;
      }
    }

    &.delete {
      background-color: #ef4444;
      color: white;

      &:hover {
        background-color: #dc2626;
      }
    }
  }
`;