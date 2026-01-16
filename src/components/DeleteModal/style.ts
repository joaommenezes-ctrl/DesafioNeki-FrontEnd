import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-in-out;
`;

export const DeleteContainer = styled.div<{ $darkMode: boolean }>`
  background: ${props => props.$darkMode ? '#1e293b' : '#fff'};
  width: 90%;
  max-width: 400px;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.$darkMode ? '#334155' : 'transparent'};

  h2 {
    color: ${props => props.$darkMode ? '#fff' : '#1e293b'};
    margin: 15px 0 10px 0;
  }
  
  p {
    color: ${props => props.$darkMode ? '#94a3b8' : '#64748b'};
    margin-bottom: 25px;
  }
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fee2e2;
  color: #dc2626;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 30px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  button {
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &.cancel {
      background: transparent;
      border: 1px solid #cbd5e1;
      color: #64748b;
      &:hover { background: #f1f5f9; }
    }

    &.confirm {
      background: #dc2626;
      color: white;
      &:hover { background: #b91c1c; }
    }
  }
`;