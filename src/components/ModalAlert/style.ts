import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { transform: translate(-50%, -100%); opacity: 0; }
  to { transform: translate(-50%, 0); opacity: 1; }
`;

export const AlertContainer = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  background-color: ${({ type }) => (type === 'success' ? '#10b981' : '#ef4444')};
  color: #fff;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 12px;
  animation: ${slideIn} 0.3s ease-out;
  min-width: 320px;
  font-weight: 500;
  font-size: 15px;

  @media (max-width: 768px) {
    width: 90%;
    min-width: auto;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  margin-left: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`;