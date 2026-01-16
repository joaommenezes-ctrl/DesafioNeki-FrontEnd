import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMoon, FiSun, FiLock, FiMail, FiEye, FiEyeOff, FiCheck } from 'react-icons/fi';
import { ImOffice } from "react-icons/im";
import { ModalAlert } from '../../components/ModalAlert';
import { useTheme } from '../../context/useTheme';
import { login } from '../../service/authService';

import {
  Container,
  LoginCard,
  LogoSection,
  HeaderTitle,
  HeaderSubtitle,
  FormContainer,
  InputGroup,
  InputWrapper,
  StyledInput,
  InputIcon,
  MainButton,
  FooterLink,
  ThemeToggleButton,
  PasswordToggle,
  RememberContainer,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label
} from './style';

export const Login = () => {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const [alert, setAlert] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success'
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem('@App:email');
    const savedPassword = localStorage.getItem('@App:senha');

    if (savedEmail && savedPassword) {
      setFormData({
        email: savedEmail,
        senha: savedPassword
      });
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlert({ show: true, message, type });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.email || !formData.senha) {
      showAlert('Por favor, preencha todos os campos.', 'error');
      return;
    }

    setLoading(true);
    
    try {
      await login(formData);
      
      if (rememberMe) {
        localStorage.setItem('@App:email', formData.email);
        localStorage.setItem('@App:senha', formData.senha);
      } else {
        localStorage.removeItem('@App:email');
        localStorage.removeItem('@App:senha');
      }

      showAlert('Login realizado com sucesso! Redirecionando...', 'success');
      setTimeout(() => navigate('/home'), 1500);
      
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erro ao realizar login.';
      showAlert(message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container $darkMode={darkMode}>
      <ThemeToggleButton onClick={toggleTheme} $darkMode={darkMode}>
        {darkMode ? <FiSun size={24} color="#0FFCBE" /> : <FiMoon size={24} color="#106EBE" />}
      </ThemeToggleButton>

      {alert.show && (
        <ModalAlert 
          message={alert.message} 
          type={alert.type} 
          onClose={() => setAlert({ ...alert, show: false })} 
        />
      )}

      <LoginCard $darkMode={darkMode}>
        <LogoSection $darkMode={darkMode}>
          <div className="icon-bg">
            <ImOffice size={32} />
          </div>
        </LogoSection>

        <HeaderTitle $darkMode={darkMode}>Bem-vindo de volta!</HeaderTitle>
        <HeaderSubtitle>Insira suas credenciais para acessar o painel.</HeaderSubtitle>

        <FormContainer onSubmit={handleSubmit}>
          <InputGroup>
            <InputWrapper $darkMode={darkMode}>
              <InputIcon $darkMode={darkMode}><FiMail /></InputIcon>
              <StyledInput 
                $darkMode={darkMode}
                type="email" 
                placeholder="seu@email.com" 
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </InputWrapper>

            <InputWrapper $darkMode={darkMode}>
              <InputIcon $darkMode={darkMode}><FiLock /></InputIcon>
              <StyledInput 
                $darkMode={darkMode}
                type={showPassword ? "text" : "password"}
                placeholder="Sua senha" 
                name="senha"
                value={formData.senha}
                onChange={handleChange}
              />
              <PasswordToggle
                $darkMode={darkMode}
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
              </PasswordToggle>
            </InputWrapper>
          </InputGroup>

          <RememberContainer>
            <CheckboxContainer onClick={() => setRememberMe(!rememberMe)}>
              <HiddenCheckbox checked={rememberMe} readOnly />
              <StyledCheckbox checked={rememberMe} $darkMode={darkMode}>
                <FiCheck 
                  color="white" 
                  size={14} 
                  style={{ opacity: rememberMe ? 1 : 0, transition: 'opacity 0.2s' }} 
                />
              </StyledCheckbox>
              <Label $darkMode={darkMode}>Lembrar email e senha</Label>
            </CheckboxContainer>
          </RememberContainer>

          <MainButton type="submit" disabled={loading} $darkMode={darkMode}>
            {loading ? 'Entrando...' : 'Entrar'} 
          </MainButton>

          <FooterLink $darkMode={darkMode}>
            Não tem uma conta?
            <Link to="/cadastro">Cadastre-se</Link>
          </FooterLink>
        </FormContainer>
      </LoginCard>
    </Container>
  );
};