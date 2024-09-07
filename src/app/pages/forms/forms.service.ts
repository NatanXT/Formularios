import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPessoa } from './forms.types';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  apiurl = 'http://localhost:3000/pessoas'
  constructor(private http: HttpClient) { }

  criarPessoa(pessoa: IPessoa): Observable<IPessoa> {
    return this.http.post<IPessoa>(this.apiurl, pessoa)
  }
  findAll(): Observable<IPessoa[]> {
    return this.http.get<IPessoa[]>(this.apiurl);
  }
  deletarPessoa(cpf: string): Observable<void> {
    return this.http.delete<void>(`${this.apiurl}/${cpf}`);
  }
  salvarPessoa(pessoa: IPessoa): Observable<IPessoa> {
    if (pessoa.cpf) {
      return this.http.put<IPessoa>(`${this.apiurl}/${pessoa.cpf}`, pessoa);
    } else {
      return this.criarPessoa(pessoa);
    }
  }
  findByCPF(cpf: string): Observable<IPessoa[]>{
    return this.http.get<IPessoa[]>(`${this.apiurl}/${cpf}`);
  }

}

