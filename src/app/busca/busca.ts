import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vitrine } from '../vitrine/vitrine';

@Component({
  imports: [CommonModule, Vitrine],
  selector: 'app-busca',
  styleUrl: './busca.css',
  templateUrl: './busca.html',
})
export class Busca implements OnInit {
  query : string = "";
  
  get notFound() : boolean {
    return !this.query;
  }

  getQueryFromStorage() {
    let json = localStorage.getItem('query');
    if(json) this.query = JSON.parse(json);
  }

  ngOnInit(): void {
    this.getQueryFromStorage();
  }
}
