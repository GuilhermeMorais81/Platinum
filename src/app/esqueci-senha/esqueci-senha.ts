import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-esqueci-senha',
  styleUrl: './esqueci-senha.css',
  templateUrl: './esqueci-senha.html',
})
export class EsqueciSenha {
  mensagemVisivel: boolean = false;

  enviarInstrucoes() {
    this.mensagemVisivel = true;
  }
}
