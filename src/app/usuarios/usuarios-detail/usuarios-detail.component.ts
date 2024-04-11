import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../usuarios.interface';

@Component({
  selector: 'app-usuarios-detail',
  templateUrl: './usuarios-detail.component.html',
  styleUrl: './usuarios-detail.component.scss'
})
export class UsuariosDetailComponent implements OnInit {
  user: UserResponse = JSON.parse(localStorage.getItem('user') || '')

  ngOnInit(): void {
console.log(this.user)
  }
}
