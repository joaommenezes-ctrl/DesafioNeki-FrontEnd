import styled from 'styled-components';

interface ThemeProps {
  $darkMode: boolean;
}

export const NavContainer = styled.nav<ThemeProps>`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: ${props => props.$darkMode 
    ? 'rgba(2, 6, 23, 0.8)' 
    : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${props => props.$darkMode 
    ? 'rgba(255, 255, 255, 0.05)' 
    : 'rgba(16, 110, 190, 0.1)'};
  
  box-shadow: ${props => props.$darkMode 
    ? '0 4px 20px rgba(0,0,0,0.5)' 
    : '0 4px 20px rgba(16, 110, 190, 0.1)'};
  
  transition: all 0.3s ease;
`;

export const Brand = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  .icon {
    color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'};
    font-size: 28px;
  }

  h1 {
    font-size: 22px;
    font-weight: 700;
    color: ${props => props.$darkMode ? '#fff' : '#1e293b'};
    span {
      color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'};
    }
  }
`;

export const UserActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const WelcomeText = styled.span<ThemeProps>`
  font-size: 15px;
  color: ${props => props.$darkMode ? '#cbd5e1' : '#475569'};
  font-weight: 500;

  strong {
    color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'};
  }

  @media (max-width: 600px) {
    display: none; 
  }
`;

export const IconButton = styled.button<ThemeProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.$darkMode ? '#cbd5e1' : '#64748b'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.$darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
    color: ${props => props.$darkMode ? '#fff' : '#106EBE'};
  }
`;

export const LogoutButton = styled.button<ThemeProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  background: transparent;
  border: 1px solid ${props => props.$darkMode ? 'rgba(255, 68, 68, 0.5)' : 'rgba(220, 38, 38, 0.3)'};
  color: ${props => props.$darkMode ? '#ff6b6b' : '#dc2626'};

  &:hover {
    background: ${props => props.$darkMode ? 'rgba(220, 38, 38, 0.2)' : '#fee2e2'};
    border-color: #dc2626;
    transform: translateY(-2px);
  }
`;