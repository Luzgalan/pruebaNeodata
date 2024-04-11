import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from './usuarios.interface';

@Injectable({providedIn: 'root'})
export class UsuariosService {

    baseUrl: string = 'https://jsonplaceholder.typicode.com'
    constructor(private httpCliente: HttpClient) { }

    getUsers():Observable<UserResponse[]>{
        return this.httpCliente.get<UserResponse[]>(`${this.baseUrl}/users`)
    }
    
}