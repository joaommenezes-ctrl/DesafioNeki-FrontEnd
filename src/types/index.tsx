export interface LoginDTO {
  email: string;
  senha: string; 
}

export interface LoginResponse {
  token: string;
  userId: number; 
}


export interface RegisterDTO {
  nome: string;
  email: string;
  senha: string;
}

export interface AdminData {
  id: number;
  name?: string;
  nome?: string;
  email: string;
}

export interface AuthResponse {
  message: string;
}

export type ModalActionType = 'add' | 'edit' | 'delete' | null;