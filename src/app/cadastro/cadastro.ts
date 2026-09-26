import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  @ViewChild('cadastroForm') form!: NgForm;
  passwdWarningDisabled : boolean = true;
  
  checkPasswordConfirm() {
    if(!this.form.invalid) {
      if(this.form.value.password !== this.form.value.confirmPassword)
          this.passwdWarningDisabled = false;
      else location.href = "/vitrine";
    }
  }
}
