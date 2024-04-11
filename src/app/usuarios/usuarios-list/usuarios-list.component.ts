import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { UserResponse } from '../usuarios.interface';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.scss'
})
export class UsuariosListComponent implements OnInit{

  term : string = ""
  userList: UserResponse[] = []

  displayedColumns = ['username', 'name', 'phone', 'email'];
  dataSource!: MatTableDataSource<UserResponse>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


constructor( private usuariosService: UsuariosService, private _router: Router){

}

ngOnInit(): void {
  this.usuariosService.getUsers().subscribe({
    next:(response )=>{console.log(response)
    this.userList = response
    this.dataSource= new MatTableDataSource<UserResponse> (this.userList)
    this.dataSource.paginator = this.paginator
    },
    error:(error)=>{console.log(error)}
  })
}

search() {
  this.dataSource.filter = this.term;
}

view(username: string){
  const user = this.userList.find(x => x.username = username)
  localStorage.setItem('user', JSON.stringify(user))  
  this._router.navigateByUrl(`/${username}`)
}

}
