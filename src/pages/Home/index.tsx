import React, { useEffect, useState, useCallback, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiPlus, FiCalendar, FiEdit3, FiTrash2, FiCheck, 
  FiMapPin, FiClock, FiUpload, FiCheckCircle, FiFilter 
} from 'react-icons/fi';
import { BiBriefcase } from "react-icons/bi";
import { eventoService, type EventoData } from '../../service/eventoService';
import { getUserById } from '../../service/authService';
import { useTheme } from '../../context/useTheme';
import { Navbar } from '../../components/NavBar';
import { Modal } from '../../components/Modal';
import { DeleteModal } from '../../components/DeleteModal';
import { EventModal } from '../../components/EventModal';
import { ModalAlert } from '../../components/ModalAlert';

import { 
  Container, Header, Title, ButtonAdd, Grid, EventCard, 
  CardImageContainer, EventImage, CardContent, CardTitle, 
  CardText, CardActions, ActionButton, 
  FormGroup, Label, Input, 
  UploadContainer, UploadLabel, HiddenInput, UploadStatus,
  ModalFooter, FilterContainer, FilterButton, FilterDropdown, FilterItem
} from './style';

const ImageDefault = '/imageDefault.jpg';

type FilterType = 'todos' | 'concluidos' | 'pendentes';

export const Home = ({ onInputChange }: { onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  
  const [userName, setUserName] = useState<string>('Admin');
  const [events, setEvents] = useState<EventoData[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [filterStatus, setFilterStatus] = useState<FilterType>('todos');
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);

  const [modalType, setModalType] = useState<'add' | 'edit' | 'view' | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [alertState, setAlertState] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  
  const [currentEvent, setCurrentEvent] = useState<Partial<EventoData>>({
    name: '', date: '', time: '', location: '', imageUrl: ''
  });

  const showAlert = useCallback((message: string, type: 'success' | 'error') => {
    setAlertState({ message, type });
  }, []);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const idUsuario = localStorage.getItem('userId');
      if (idUsuario) {
        const usuario = await getUserById(idUsuario);
        setUserName(usuario.name || usuario.nome || 'Admin');
      }
      
      const dados = await eventoService.listar();
      setEvents(Array.isArray(dados) ? dados : []);
    } catch { 
      showAlert('Erro ao conectar com o servidor', 'error');
    } finally { 
      setLoading(false); 
    }
  }, [showAlert]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const getFilteredEvents = () => {
    const agora = new Date();

    return events.filter(evento => {
      const dataEvento = new Date(`${evento.date}T${evento.time || '00:00:00'}`);
      
      const isConcluido = dataEvento < agora;

      if (filterStatus === 'concluidos') return isConcluido;
      if (filterStatus === 'pendentes') return !isConcluido;
      return true;
    });
  };

  const filteredEvents = getFilteredEvents();
  
  const defaultOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentEvent(prev => ({ ...prev, [name]: value }));
  };
  const handleInputChange = onInputChange || defaultOnInputChange;
  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const arquivo = e.target.files?.[0];
    if (arquivo) {
      const leitor = new FileReader();
      leitor.onloadend = () => {
        setCurrentEvent(prev => ({ ...prev, imageUrl: leitor.result as string }));
      };
      leitor.readAsDataURL(arquivo);
    }
  };
  const saveEvent = async () => {
    const dto = {
      name: currentEvent.name || '',
      date: currentEvent.date || '',
      time: currentEvent.time || '',
      location: currentEvent.location || '',
      imageUrl: currentEvent.imageUrl || ''
    };
    try {
      if (modalType === 'add') {
        await eventoService.criar(dto);
        showAlert('Evento criado com sucesso!', 'success');
      } else if (modalType === 'edit' && currentEvent.id) {
        await eventoService.atualizar(currentEvent.id, dto);
        showAlert('Evento atualizado!', 'success');
      }
      await loadData();
      setModalType(null);
    } catch {
      showAlert('Erro ao salvar informações', 'error');
    }
  };
  const deleteEvent = async () => {
    if (!currentEvent.id) return;
    try {
      await eventoService.deletar(currentEvent.id);
      showAlert('Evento removido!', 'success');
      await loadData();
      setIsDeleteModalOpen(false);
    } catch {
      showAlert('Não foi possível excluir', 'error');
    }
  };


  return (
    <>
      <Navbar userName={loading ? '...' : userName} onLogout={() => { localStorage.clear(); navigate('/'); }} />
      
      {alertState && (
        <ModalAlert 
          message={alertState.message} 
          type={alertState.type} 
          onClose={() => setAlertState(null)} 
        />
      )}

      <Container $darkMode={darkMode}>
        <Header>
          <Title $darkMode={darkMode}>Painel de Eventos</Title>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FilterContainer>
              <FilterButton 
                $darkMode={darkMode} 
                $active={filterStatus !== 'todos'}
                onClick={() => setShowFilterMenu(!showFilterMenu)}
              >
                <FiFilter size={18} />
                {filterStatus === 'todos' && 'Filtrar'}
                {filterStatus === 'pendentes' && 'Próximos'}
                {filterStatus === 'concluidos' && 'Concluídos'}
              </FilterButton>

              {showFilterMenu && (
                <FilterDropdown $darkMode={darkMode}>
                  <FilterItem 
                    $darkMode={darkMode} 
                    $selected={filterStatus === 'todos'}
                    onClick={() => { setFilterStatus('todos'); setShowFilterMenu(false); }}
                  >
                    Todos
                    {filterStatus === 'todos' && <FiCheck size={14}/>}
                  </FilterItem>
                  <FilterItem 
                    $darkMode={darkMode} 
                    $selected={filterStatus === 'pendentes'}
                    onClick={() => { setFilterStatus('pendentes'); setShowFilterMenu(false); }}
                  >
                    Próximos (Não concluídos)
                    {filterStatus === 'pendentes' && <FiCheck size={14}/>}
                  </FilterItem>
                  <FilterItem 
                    $darkMode={darkMode} 
                    $selected={filterStatus === 'concluidos'}
                    onClick={() => { setFilterStatus('concluidos'); setShowFilterMenu(false); }}
                  >
                    Concluídos
                    {filterStatus === 'concluidos' && <FiCheck size={14}/>}
                  </FilterItem>
                </FilterDropdown>
              )}
            </FilterContainer>

            <ButtonAdd onClick={() => { setCurrentEvent({ name: '', date: '', time: '', location: '', imageUrl: '' }); setModalType('add'); }}>
              <FiPlus size={20} /> Cadastrar Evento
            </ButtonAdd>
          </div>
        </Header>

        <Grid>
          {filteredEvents.map((evento) => (
            <EventCard key={evento.id} $darkMode={darkMode} onClick={() => { setCurrentEvent(evento); setModalType('view'); }}>
              <CardImageContainer $darkMode={darkMode}>
                <EventImage 
                  src={evento.imageUrl || ImageDefault} 
                  alt={evento.name}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.src = ImageDefault; }}
                />
              </CardImageContainer>
              <CardContent>
                <CardTitle $darkMode={darkMode}>{evento.name}</CardTitle>
                <CardText $darkMode={darkMode}><FiCalendar /> {evento.date}</CardText>
                <CardText $darkMode={darkMode}><FiClock /> {evento.time}</CardText>
                <CardText $darkMode={darkMode}><FiMapPin /> {evento.location}</CardText>
              </CardContent>
              <CardActions $darkMode={darkMode}>
                <ActionButton $variant="edit" $darkMode={darkMode} onClick={(e) => { e.stopPropagation(); setCurrentEvent(evento); setModalType('edit'); }}>
                  <FiEdit3 size={18} />
                </ActionButton>
                <ActionButton $variant="delete" $darkMode={darkMode} onClick={(e) => { e.stopPropagation(); setCurrentEvent(evento); setIsDeleteModalOpen(true); }}>
                  <FiTrash2 size={18} />
                </ActionButton>
              </CardActions>
            </EventCard>
          ))}
          {filteredEvents.length === 0 && !loading && (
             <div style={{ gridColumn: '1/-1', textAlign: 'center', color: darkMode ? '#94a3b8' : '#64748b', marginTop: 20 }}>
                Nenhum evento encontrado neste filtro.
             </div>
          )}
        </Grid>
      </Container>

      <EventModal isOpen={modalType === 'view'} onClose={() => setModalType(null)} evento={currentEvent} />

      <Modal isOpen={modalType === 'add' || modalType === 'edit'} onClose={() => setModalType(null)} title={modalType === 'add' ? 'Adicionar Evento' : 'Editar Evento'}>
        <FormGroup>
          <Label $darkMode={darkMode}><BiBriefcase /> Nome</Label>
          <Input name="name" $darkMode={darkMode} value={currentEvent.name || ''} onChange={handleInputChange} disabled={modalType === 'edit'} />
        </FormGroup>

        <FormGroup>
          <Label $darkMode={darkMode}><FiCalendar /> Data</Label>
          <Input name="date" $darkMode={darkMode} type="date" value={currentEvent.date || ''} onChange={handleInputChange} />
        </FormGroup>

        <FormGroup>
          <Label $darkMode={darkMode}><FiClock /> Hora</Label>
          <Input name="time" $darkMode={darkMode} type="time" value={currentEvent.time || ''} onChange={handleInputChange} />
        </FormGroup>

        <FormGroup>
          <Label $darkMode={darkMode}><FiMapPin /> Local</Label>
          <Input name="location" $darkMode={darkMode} value={currentEvent.location || ''} onChange={handleInputChange} />
        </FormGroup>
        
        <FormGroup>
          <Label $darkMode={darkMode}><FiUpload /> Banner</Label>
          <UploadContainer>
            <HiddenInput type="file" accept="image/*" id="file-upload" onChange={onFileChange} disabled={modalType === 'edit'} />
            <UploadLabel 
                htmlFor={modalType === 'edit' ? "" : "file-upload"} 
                $darkMode={darkMode}
                style={modalType === 'edit' ? { cursor: 'not-allowed', opacity: 0.6 } : {}}
            >
              <FiUpload /> Selecionar Imagem
            </UploadLabel>
            {currentEvent.imageUrl && modalType === 'add' && (
              <UploadStatus $darkMode={darkMode}>
                <FiCheckCircle /> Imagem Selecionada!
              </UploadStatus>
            )}
          </UploadContainer>
        </FormGroup>

        <ModalFooter>
          <ButtonAdd onClick={saveEvent}>
            <FiCheck/> {modalType === 'edit' ? 'Salvar Alterações' : 'Salvar Evento'}
          </ButtonAdd>
        </ModalFooter>
      </Modal>

      <DeleteModal 
        isOpen={isDeleteModalOpen} 
        onClose={() => setIsDeleteModalOpen(false)} 
        onConfirm={deleteEvent} 
        itemName={currentEvent.name || ''} 
      />
    </>
  );
};

export default Home;