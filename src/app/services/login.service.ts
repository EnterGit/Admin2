import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, map } from 'rxjs';

interface TokenPayload {
  perfil: string;
  email: string;
  Rut: string;
  correo: string;
  ROLE: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router : Router) {}

  // Agrega aquí más métodos según sea necesario

  getLogin(correo: string, password: string): Observable<any> {
    // console.log('ingreso al servicio');
    // console.log('correo:' + correo);
    // console.log('pass:' + password);

    return this.http
      .post('http://localhost:3000/users/login', {
        correo,
        password,
      })
      .pipe(
        map((resp: any) => {
          console.log(' RESP ', resp); // AQUI SE DEBE AGREAR EL TOKEN AL LOCALSTORAGE Y LUEGO REDIRECCIONAR
          this.setToken(resp);          
          //redireccionar a la pagina de inicio
          //this.router.navigate(['newletter']);
          return resp;
        })
      );
  }

  setToken(token: string) {
    const decode = jwtDecode<TokenPayload>(token);
    localStorage.setItem('ROLE', decode.ROLE);
    localStorage.setItem('ACCESO', JSON.stringify(token));
    localStorage.setItem('RUT', JSON.stringify(decode.Rut));
    localStorage.setItem('CORREO', JSON.stringify(decode.correo));
    localStorage.setItem('Perfil', decode.perfil);
    localStorage.setItem('userData', decode.perfil);
  }




}
