import { Component } from '@angular/core';
import { HabilidadesComponent } from "../habilidades/habilidades.component";
import { EducacaoComponent } from "../educacao/educacao.component";
import { ExperienciaComponent } from "../experiencia/experiencia.component";
import { ContatosComponent } from "../contatos/contatos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HabilidadesComponent, EducacaoComponent, ExperienciaComponent, ContatosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
