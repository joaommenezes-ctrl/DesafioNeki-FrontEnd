import styled from 'styled-components';

interface ThemeProps {
  $darkMode: boolean;
}
interface FilterButtonProps {
  $darkMode: boolean;
  $active: boolean;
}
interface FilterItemProps {
  $darkMode: boolean;
  $selected: boolean;
}
interface ActionButtonProps {
  $variant: 'edit' | 'delete';
  $darkMode: boolean;
}

const getActionButtonBg = (props: ActionButtonProps) => {
  if (props.$variant === 'edit') {
    return props.$darkMode ? 'rgba(59, 130, 246, 0.1)' : '#e0f2fe';
  }
  return props.$darkMode ? 'rgba(239, 68, 68, 0.1)' : '#fee2e2';
};

const getActionButtonColor = (props: ActionButtonProps) => {
  if (props.$variant === 'edit') {
    return props.$darkMode ? '#60a5fa' : '#0369a1';
  }
  return props.$darkMode ? '#f87171' : '#991b1b';
};

export const Container = styled.section<ThemeProps>`
  min-height: 100vh;
  width: 100%;
  padding: 120px 20px 40px 20px;
  background-color: ${props => props.$darkMode ? '#020617' : '#f0f6ff'};
  color: ${props => props.$darkMode ? '#fff' : '#1e293b'};
  background-image: ${props => props.$darkMode
    ? 'radial-gradient(circle at 50% 0%, #1e293b 0%, #020617 70%)'
    : 'radial-gradient(at 50% 0%, #e1effe 0%, #f0f6ff 50%)'};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Title = styled.h2<ThemeProps>`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: ${props => props.$darkMode ? '#f1f5f9' : '#1e293b'};
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #106EBE;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #005a9e;
  }
`;

export const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const EventCard = styled.article<ThemeProps>`
  position: relative;
  background-color: ${props => props.$darkMode ? '#1e293b' : '#ffffff'};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${props => props.$darkMode ? '#334155' : 'transparent'};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImageContainer = styled.figure<ThemeProps>`
  width: 100%;
  height: 180px;
  margin: 0;
  background-color: ${props => props.$darkMode ? '#0f172a' : '#e2e8f0'};
`;

export const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardTitle = styled.h3<ThemeProps>`
  margin: 0;
  font-size: 1.25rem;
  color: ${props => props.$darkMode ? '#f1f5f9' : '#0f172a'};
`;

export const CardText = styled.p<ThemeProps>`
  margin: 0;
  font-size: 0.95rem;
  color: ${props => props.$darkMode ? '#94a3b8' : '#64748b'};
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #106EBE;
  }
`;

export const CardActions = styled.footer<ThemeProps>`
  padding: 15px 20px;
  border-top: 1px solid ${props => props.$darkMode ? '#334155' : '#f1f5f9'};
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const ActionButton = styled.button<ActionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${props => getActionButtonBg(props)};
  color: ${props => getActionButtonColor(props)};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label<ThemeProps>`
  font-size: 0.875rem;
  margin-bottom: 6px;
  color: ${props => props.$darkMode ? '#cbd5e1' : '#475569'};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input<ThemeProps>`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${props => props.$darkMode ? '#334155' : '#cbd5e1'};
  background-color: ${props => props.$darkMode ? '#0f172a' : '#ffffff'};
  color: ${props => props.$darkMode ? '#f8fafc' : '#1e293b'};
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #106EBE;
  }

  &:disabled {
    background-color: ${props => props.$darkMode ? '#1e293b' : '#f8fafc'};
    cursor: not-allowed;
    opacity: 0.7;
    border-style: dashed;
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const UploadLabel = styled.label<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  background: ${props => props.$darkMode ? '#1e293b' : '#f8fafc'};
  color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'};
  border: 2px dashed ${props => props.$darkMode ? '#334155' : '#cbd5e1'};
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.$darkMode ? '#334155' : '#f1f5f9'};
    border-color: #106EBE;
  }
`;

export const UploadStatus = styled.span<ThemeProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: ${props => props.$darkMode ? '#0FFCBE' : '#059669'};
  font-weight: 500;
  margin-top: 4px;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid rgba(0,0,0,0.1);
`;
export const FilterContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 15px; 
`;

export const FilterButton = styled.button<FilterButtonProps>`
  background-color: ${props => props.$darkMode ? '#1e293b' : '#ffffff'};
  
  color: ${props => {
    if (props.$active) {
      return props.$darkMode ? '#0FFCBE' : '#106EBE';
    }
    return props.$darkMode ? '#94a3b8' : '#64748b';
  }};

  border: 1px solid ${props => {
    if (props.$active) {
      return props.$darkMode ? '#0FFCBE' : '#106EBE';
    }
    return props.$darkMode ? '#334155' : '#e2e8f0';
  }};

  padding: 10px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'};
    color: ${props => props.$darkMode ? '#0FFCBE' : '#106EBE'};
    background-color: ${props => props.$darkMode ? '#334155' : '#f8fafc'};
  }
`;

export const FilterDropdown = styled.div<{ $darkMode: boolean }>`
  position: absolute;
  top: 120%;
  right: 0;
  width: 180px;
  background: ${props => props.$darkMode ? '#1e293b' : '#ffffff'};
  border: 1px solid ${props => props.$darkMode ? '#334155' : '#e2e8f0'};
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 50;
  overflow: hidden;
  padding: 5px;
`;

export const FilterItem = styled.button<FilterItemProps>`
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s;
  background-color: ${props => {
    if (props.$selected) {
      return props.$darkMode ? 'rgba(15, 252, 190, 0.1)' : 'rgba(16, 110, 190, 0.1)';
    }
    return 'transparent';
  }};

  color: ${props => {
    if (props.$selected) {
      return props.$darkMode ? '#0FFCBE' : '#106EBE';
    }
    return props.$darkMode ? '#e2e8f0' : '#1e293b';
  }};

  &:hover {
    background-color: ${props => {
      return props.$darkMode ? '#334155' : '#f1f5f9';
    }};
  }
`;