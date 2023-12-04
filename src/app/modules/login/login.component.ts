import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/login.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

interface TokenPayload {
  perfil: string;
  email: string;
  Rut: string;
  correo: string;
  ROLE: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['juan.perez@example.com', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  // Rest of your code
  formBuilder: any;
  loginError = false;

  public userActual: any;

  private currentUserSubject = new BehaviorSubject<TokenPayload | null>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor(
    private fb: FormBuilder, 
    private loginService: ApiService, 
    private router: Router) {}

  ngOnInit() {}

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     this.loginService
  //       .getLogin(this.loginForm.value.email, this.loginForm.value.password)
  //       .subscribe({
  //         next: (token) => {
  //           // Guarda el token en algún lugar seguro, como el almacenamiento local
  //           this.router.navigate(['newletter']);
  //           this.setToken(token);
  //           this.loginError = false;

  //           this.currentUserSubject.next(this.userActual);
  //         },
  //         error: (error) => {
  //           this.loginError = true;
  //         },
  //       });
  //   }
  // }

  loginAndRedirect() {
    const email = this.loginForm.value.email || '';
    const password = this.loginForm.value.password || '';

    this.loginService
      .getLogin(email, password)
      .subscribe({
        next: (token) => {
          // Guarda el token en algún lugar seguro, como el almacenamiento local
          // this.setToken(token);
          this.loginError = false;
          console.log('token de login: ' + token);
          // Redirige a la página 'newletter'
          //this.router.navigate(['newletter']);
          this.router.navigateByUrl('/newletter');
        },
        error: (error) => {
          this.loginError = true;
        },
      });
  }

  //almacenar el token en el localstorage
  setToken(token: string) {
    const decode = jwtDecode<TokenPayload>(token);
    localStorage.setItem('ROLE', decode.ROLE);
    localStorage.setItem('ACCESO', JSON.stringify(token));
    localStorage.setItem('RUT', JSON.stringify(decode.Rut));
    localStorage.setItem('CORREO', JSON.stringify(decode.correo));
    localStorage.setItem('Perfil', decode.perfil);
    localStorage.setItem('userData', decode.perfil);

    this.userActual = decode.perfil;
    this.router.navigate(['newletter']);
  }

  getToken() {
    const tokenString = localStorage.getItem('ACCESO');
    if (tokenString) {
      const token = JSON.parse(tokenString);
      console.log('LEE token:' + token);
      return token;
    }
    return null;
  }

  prueba() {
    this.currentUser.subscribe((x) => console.log(x));
  }
}
