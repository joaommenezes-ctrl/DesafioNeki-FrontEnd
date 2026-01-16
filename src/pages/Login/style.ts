import styled from 'styled-components';

interface ThemeProps {
  $darkMode: boolean;
}
interface CheckboxProps extends ThemeProps {
  checked: boolean;
}

export const Container = styled.div<ThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  transition: background-color 0.4s ease;
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
  &:hover { transform: scale(1.1); box-shadow: 0 0 15px ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'}; }
`;

export const LoginCard = styled.div<ThemeProps>`
  width: 100%;
  max-width: 420px;
  padding: 40px;
  border-radius: 24px;
  transition: background 0.4s ease, border 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease;
  background: ${props => props.$darkMode ? 'rgba(15, 23, 42, 0.8)' : '#ffffff'};
  border: 1px solid ${props => props.$darkMode ? 'rgba(15, 252, 190, 0.2)' : 'rgba(16, 110, 190, 0.1)'};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover { transform: translateY(-5px); }
`;

export const LogoSection = styled.div<ThemeProps>`
  margin-bottom: 24px;
  .icon-bg {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #106EBE 0%, #0FFCBE 100%);
    color: white;
  }
`;

export const HeaderTitle = styled.h1<ThemeProps>`
  font-size: 26px;
  transition: color 0.4s ease;
  color: ${props => props.$darkMode ? '#fff' : '#1e293b'};
  margin-bottom: 8px;
`;

export const HeaderSubtitle = styled.p`
  font-size: 14px;
  color: #94a3b8;
  margin-bottom: 32px;
  text-align: center;
`;

export const FormContainer = styled.form`
  width: 100%;
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
  transition: background 0.4s ease, border 0.4s ease;
  background: ${props => props.$darkMode ? 'rgba(255, 255, 255, 0.05)' : '#f8fafc'};
  border: 1px solid ${props => props.$darkMode ? 'rgba(255, 255, 255, 0.1)' : '#cbd5e1'};
  border-radius: 12px;
  transition: border 0.3s;
  &:focus-within { border-color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'}; }
`;

export const InputIcon = styled.div<ThemeProps>`
  position: absolute;
  left: 16px;
  color: #64748b;
  display: flex;
`;

export const StyledInput = styled.input<ThemeProps>`
  width: 100%;
  padding: 16px 45px 16px 48px;
  background: transparent;
  border: none;
  outline: none;
  transition: color 0.4s ease;
  color: ${props => props.$darkMode ? '#fff' : '#0f172a'};
`;

export const PasswordToggle = styled.button<ThemeProps>`
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
  display: flex;
`;

export const MainButton = styled.button<ThemeProps>`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: none;
  background: #106EBE;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${props => props.$darkMode ? '#0FFCBE' : '#0d5a9e'};
    color: ${props => props.$darkMode ? '#020617' : '#fff'};
  }
`;

export const FooterLink = styled.div<ThemeProps>`
  margin-top: 24px;
  text-align: center;
  transition: color 0.4s ease;
  color: #64748b;
  font-size: 14px;
  a {
    color: #106EBE;
    font-weight: 700;
    text-decoration: none;
    margin-left: 5px;
  }
`;
export const RememberContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
  margin-top: 10px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover span {
    color: #106EBE;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  
  background: ${props => props.checked ? '#106EBE' : 'transparent'};
  
  border: 2px solid ${props => {
    if (props.checked) return '#106EBE';
    return props.$darkMode ? '#555' : '#ddd';
  }};
  
  border-radius: 6px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  ${CheckboxContainer}:hover & {
    border-color: #106EBE;
    box-shadow: 0 0 0 3px rgba(16, 110, 190, 0.1);
  }
`;

export const Label = styled.span<ThemeProps>`
  margin-left: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.$darkMode ? '#b0b0b0' : '#666'};
  user-select: none;
  transition: color 0.2s ease;
`;