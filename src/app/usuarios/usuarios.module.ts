import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosDetailComponent } from './usuarios-detail/usuarios-detail.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import {MatTableModule } from '@angular/material/table';
import {MatInputModule } from '@angular/material/input'
import {MatGridListModule } from '@angular/material/grid-list'


import {MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
const routes : Routes=[
  {path:'', component: UsuariosListComponent},
  {path:':id', component: UsuariosDetailComponent},
]

@NgModule({
  declarations: [
    UsuariosListComponent,
    UsuariosDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatGridListModule
  ]
})
export class UsuariosModule { }
