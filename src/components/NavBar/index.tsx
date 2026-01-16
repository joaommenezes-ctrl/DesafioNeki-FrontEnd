import React from 'react';
import { ImOffice } from "react-icons/im";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from '../../context/useTheme';
import { 
  NavContainer, 
  Brand, 
  UserActions, 
  WelcomeText, 
  LogoutButton, 
  IconButton 
} from './style';

interface NavbarProps {
  userName: string;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ userName, onLogout }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <NavContainer $darkMode={darkMode}>
      <Brand $darkMode={darkMode}>
        <ImOffice className="icon" />
        <h1>Event <span>Hub</span></h1>
      </Brand>
      <UserActions>
        <WelcomeText $darkMode={darkMode}>
          Bem-vindo, <strong>{userName}</strong>
        </WelcomeText>
        <IconButton onClick={toggleTheme} $darkMode={darkMode} title="Alternar Tema">
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </IconButton>
        <LogoutButton onClick={onLogout} $darkMode={darkMode}>
          <FiLogOut size={16} />
          Sair
        </LogoutButton>
      </UserActions>
    </NavContainer>
  );
};