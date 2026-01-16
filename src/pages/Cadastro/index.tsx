import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiArrowRight, FiMoon, FiSun, FiEye, FiEyeOff } from 'react-icons/fi';
import { ModalAlert } from '../../components/ModalAlert';
import { registerAdmin } from '../../service/authService';
import { useTheme } from '../../context/useTheme'; 
import {
  Container,
  CardWrapper,
  LeftSide,
  BigTitle,
  SubHeadline,
  RightSide,
  FormContainer,
  FormTitle,
  InputGroup,
  MainButton,
  FooterLink,
  ThemeToggleButton,
  StyledInput,
  PasswordToggle,
  InputWrapper 
} from './style';

export const Cadastro = () => {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success'
  });

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlert = (message: string, type: 'success' | 'error') => {
    setAlert({ show: true, message, type });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.senha || !formData.confirmarSenha) {
      showAlert('Por favor, preencha todos os campos.', 'error');
      return;
    }
    if (formData.senha !== formData.confirmarSenha) {
      showAlert('As senhas não coincidem.', 'error');
      return;
    }
    setLoading(true);
    try {
      await registerAdmin({
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha
      });
      showAlert('Administrador cadastrado com sucesso!', 'success');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erro ao realizar cadastro.';
      showAlert(message, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container $darkMode={darkMode}>
      <ThemeToggleButton onClick={toggleTheme} $darkMode={darkMode}>
        {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </ThemeToggleButton>

      {alert.show && (
        <ModalAlert 
          message={alert.message} 
          type={alert.type} 
          onClose={() => setAlert({ ...alert, show: false })} 
        />
      )}

      <CardWrapper $darkMode={darkMode}>
        <LeftSide $darkMode={darkMode}>
          <BigTitle>Gestão de<br/>Eventos</BigTitle>
          <SubHeadline>A ferramenta certa para transformar reuniões em grandes oportunidades de negócio.</SubHeadline>
        </LeftSide>

        <RightSide $darkMode={darkMode}>
          <FormContainer onSubmit={handleSubmit}>
            <FormTitle $darkMode={darkMode}>
              Criar Conta <span>Administrador</span>
            </FormTitle>

            <InputGroup>
              <InputWrapper $darkMode={darkMode}>
                <StyledInput 
                  $darkMode={darkMode}
                  placeholder="Nome do Administrador" 
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </InputWrapper>

              <InputWrapper $darkMode={darkMode}>
                <StyledInput 
                  $darkMode={darkMode}
                  type="email" 
                  placeholder="Email Corporativo" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputWrapper>

              <InputWrapper $darkMode={darkMode}>
                <StyledInput 
                  $darkMode={darkMode}
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha" 
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
              
              <InputWrapper $darkMode={darkMode}>
                <StyledInput 
                  $darkMode={darkMode}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirmar Senha" 
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                />
                <PasswordToggle
                  $darkMode={darkMode}
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </PasswordToggle>
              </InputWrapper>
            </InputGroup>

            <MainButton type="submit" disabled={loading} $darkMode={darkMode}>
              {loading ? 'Cadastrando...' : 'Cadastrar'} 
              {!loading && <FiArrowRight size={20} />}
            </MainButton>

            <FooterLink $darkMode={darkMode}>
              Já possui uma conta?
              <Link to="/login">Fazer Login</Link>
            </FooterLink>
          </FormContainer>
        </RightSide>
      </CardWrapper>
    </Container>
  );
};