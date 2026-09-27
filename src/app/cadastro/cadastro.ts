import { Component, ViewChild, viewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  private router = inject(Router);
  @ViewChild('cadastroForm') form!: NgForm;
  passwdWarningDisabled : boolean = true;
  
  checkPasswordConfirm() {
    if(!this.form.invalid) {
      if(this.form.value.password !== this.form.value.confirmPassword)
          this.passwdWarningDisabled = false;
      else this.router.navigate(['/vitrine'])
    }
  }
}
