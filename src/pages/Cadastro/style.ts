import styled from 'styled-components';
import BackgroundImg from '../../assets/imageCadastro.jpg';

interface ThemeProps {
  $darkMode: boolean;
}

export const Container = styled.div<ThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 24px;
  position: relative;
  transition: background-color 0.5s ease;
  background-color: ${props => props.$darkMode ? '#020617' : '#f0f6ff'};
  background-image: ${props => props.$darkMode
    ? 'radial-gradient(circle at 50% 0%, #1e293b 0%, #020617 70%)'
    : 'radial-gradient(at 0% 0%, #e1effe 0%, #f0f6ff 50%)'};
`;

export const ThemeToggleButton = styled.button<ThemeProps>`
  position: absolute;
  top: 30px;
  right: 30px;
  background: ${props => props.$darkMode ? 'rgba(255,255,255,0.1)' : '#ffffff'};
  border: 1px solid ${props => props.$darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'};
  color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.4s ease;
  &:hover { transform: scale(1.1); box-shadow: 0 0 15px ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'}; }
`;

export const CardWrapper = styled.div<ThemeProps>`
  display: flex;
  width: 100%;
  max-width: 1100px;
  min-height: 650px;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  background: ${props => props.$darkMode ? '#0f172a' : '#ffffff'};
  border: 1px solid ${props => props.$darkMode ? 'rgba(15, 252, 190, 0.2)' : 'rgba(16, 110, 190, 0.1)'};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  @media (max-width: 900px) { flex-direction: column; }
  &:hover { transform: translateY(-5px); }
`;

export const LeftSide = styled.div<ThemeProps>`
  flex: 1.1;
  position: relative;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 60px;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transition: background 0.5s ease;
    background: ${props => props.$darkMode
    ? 'linear-gradient(to top, #020617 0%, rgba(2, 6, 23, 0.5) 100%)'
    : 'linear-gradient(to top, rgba(16, 110, 190, 0.9) 0%, rgba(16, 110, 190, 0.3) 100%)'};
  }
  > * { position: relative; z-index: 2; color: #fff; }
  @media (max-width: 900px) { display: none; }
`;

export const BigTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
`;

export const SubHeadline = styled.p`
  font-size: 18px;
  opacity: 0.9;
`;

export const RightSide = styled.div<ThemeProps>`
  flex: 1;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background-color 0.5s ease;
  background: ${props => props.$darkMode ? '#0f172a' : '#ffffff'};
  @media (max-width: 900px) { padding: 40px 24px; }
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const FormTitle = styled.h2<ThemeProps>`
  font-size: 28px;
  margin-bottom: 24px;
  transition: color 0.5s ease;
  color: ${props => props.$darkMode ? '#f8fafc' : '#1e293b'};
  span { color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'}; transition: color 0.5s ease; }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const InputWrapper = styled.div<ThemeProps>`
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.4s ease;
  background: ${props => props.$darkMode ? 'rgba(255, 255, 255, 0.03)' : '#f8fafc'};
  border: 1px solid ${props => props.$darkMode ? 'rgba(255, 255, 255, 0.1)' : '#cbd5e1'};
  border-radius: 12px;
  &:focus-within { border-color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'}; }
`;

export const StyledInput = styled.input<ThemeProps>`
  width: 100%;
  padding: 16px;
  background: transparent;
  border: none;
  transition: color 0.5s ease;
  color: ${props => props.$darkMode ? '#fff' : '#0f172a'};
  outline: none;
  font-size: 15px;
`;


export const PasswordToggle = styled.button<ThemeProps>`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
  display: flex;
  transition: color 0.3s ease;
  &:hover { color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'}; }
`;

export const MainButton = styled.button<ThemeProps>`
  width: 100%;
  padding: 16px;
  background: #106EBE;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.4s ease;
  &:hover {
    background: ${props => props.$darkMode ? '#0FFCBE' : '#0d5a9e'};
    color: ${props => props.$darkMode ? '#020617' : '#fff'};
    transform: translateY(-2px);
  }
`;

export const FooterLink = styled.div<ThemeProps>`
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  transition: color 0.5s ease;
  color: ${props => props.$darkMode ? '#94a3b8' : '#64748b'};
  a {
    color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'};
    font-weight: 700;
    text-decoration: none;
    margin-left: 5px;
    transition: color 0.5s ease;
  }
`;