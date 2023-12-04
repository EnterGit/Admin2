import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface LoginCredentials {
  username: string;
  password: string;
}

const USER_LOCAL_STORAGE_KEY = 'userData';

@Injectable({
  providedIn: 'root',
})
export class ValidaAccesoService {
  public token: string;
  public role: string;


  constructor(
    private router: Router, 
    private httpClient: HttpClient) { 
    this.token = localStorage.getItem('ACCESO') ?? '';
    this.role = localStorage.getItem('ROLE') ?? '';
    this.loadUserFromLocalStorage();
  }

  
  isAuthenticated(): boolean {
    // Aquí va la lógica para validar tu token
    // Por ejemplo, puedes verificar si el token existe y no ha expirado
    if (localStorage.getItem('ACCESO')) {
      try {
        //const decodedToken = jwt.verify(token, 'your-secret-key');
        //return !!this.token;
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  }

  isLoggedIn(): boolean {
    const usertoken = this.token;
    console.log('valor del isLoggedIn valida.service 3: ' + usertoken);
    if (usertoken) {
      return true;
    }
    return false;
  }

  isRoleIn(): boolean {
    const userrole = this.role;
    if (userrole) {
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('ACCESO');
    localStorage.removeItem('ROLE');
    localStorage.removeItem('CORREO');
    localStorage.removeItem('RUT');
    localStorage.removeItem('Perfil'); 
    this.router.navigateByUrl('/login');

    this.removeUserFromLocalStorage();
    this.router.navigateByUrl('/login');

  }

  private loadUserFromLocalStorage(): void {
    const userFromLocal = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  }

  private removeUserFromLocalStorage(): void {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  }

}
