import { AxiosError } from "axios";
import api from "./api";
import type { RegisterDTO, AuthResponse, LoginDTO, LoginResponse, AdminData } from "../types";

export const registerAdmin = async (
  userData: RegisterDTO
): Promise<AuthResponse> => {
  try {
    const { data } = await api.post<AuthResponse>("/auth/register", userData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || "Erro de conexão ao cadastrar.");
    }
    throw new Error("Erro inesperado ao cadastrar.");
  }
};

export const login = async (
  credencial: LoginDTO
): Promise<LoginResponse> => {
  try {
    const payload = {
      email: credencial.email, 
      password: credencial.senha 
    };

    const { data } = await api.post<LoginResponse>("/login", payload);
    
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    if (data.userId) {
      localStorage.setItem("userId", String(data.userId));
    }

    return data;

  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        throw new Error("Email ou senha inválidos.");
      }
      throw new Error(error.response?.data?.message || "Erro de conexão ao fazer login.");
    }
    throw new Error("Erro inesperado ao fazer login.");
  }
};

export const getUserById = async (id: string | number): Promise<AdminData> => {
  try {
    const response = await api.get<AdminData>(`/admins/${id}`); 
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || "Erro ao buscar dados do usuário.");
    }
    throw new Error("Erro inesperado.");
  }
};

