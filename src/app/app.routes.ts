import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienciaComponent } from './experiencia/experiencia.component'; 
import { EducacaoComponent } from './educacao/educacao.component';
import { ContatosComponent } from './contatos/contatos.component';


export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'habilidades', component: HabilidadesComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'experiencia', component: ExperienciaComponent },
    { path: 'educacao', component: EducacaoComponent },
    { path: 'contatos', component: ContatosComponent },
];
