import api from './api';

export interface EventoData {
  id?: number;
  name: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
}

export interface EventoDTO {
  name: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
}

export const eventoService = {
  listar: async () => {
    const response = await api.get('/eventos/listar');
    return response.data;
  },

  criar: async (dados: EventoDTO) => {
    const response = await api.post('/eventos/criar', dados);
    return response.data;
  },

  atualizar: async (id: number, dados: EventoDTO) => {
    const response = await api.put(`/eventos/atualizar/${id}`, dados);
    return response.data;
  },

  deletar: async (id: number) => {
    await api.delete(`/eventos/deletar/${id}`);
  }
};