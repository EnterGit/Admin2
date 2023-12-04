
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { ReactiveFormsModule,FormsModule,Validators } from '@angular/forms';



//import { AuthGuard } from './guards/authguard.guard';


import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

//import { FooterComponent } from './modules/footer/footer.component';
//import { HeaderComponent } from './modules/header/header.component';
//import { HeaderMobileComponent } from './modules/header-mobile/header-mobile.component';
//import { HeaderPromotionComponent } from './modules/header-promotion/header-promotion.component';
//import { NewletterComponent } from './modules/newletter/newletter.component';

//pantallas
import { LoginComponent } from './modules/login/login.component';

//import { InicioComponent } from './modules/inicio/inicio.component';
//import { DialogoconfirmacionComponent } from './modules/dialogoconfirmacion/dialogoconfirmacion.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
//import { RegistroUsuarioComponent } from './modules/registro-usuario/registro-usuario.component';

//pantallas
//import { CrudPortonesComponent }  from './modules/crud-portones/crud-portones.component';


import{MatSelectModule} from '@angular/material/select';
import{MatInputModule} from '@angular/material/input';
//import { PopupComponent } from './component/popup/popup.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule} from '@angular/material/dialog';
import{MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
//import { MainComponent } from './modules/main/main.component';
//import { TopWidgetsComponent } from './modules/top-widgets/top-widgets.component';
//import { SalesByMothComponent } from './modules/sales-by-moth/sales-by-moth.component';

//import { SideNavComponent } from './modules/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    LoginComponent,
   

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    AppSidebarComponent,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    MatSidenavModule,

  
   
   
   
  
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
