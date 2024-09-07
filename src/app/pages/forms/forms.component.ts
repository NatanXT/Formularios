import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { IPessoa } from './forms.types';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { FormsService } from './forms.service';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FloatLabelModule, FormsModule, InputTextModule, ButtonModule, TableModule, CommonModule, TagModule, DropdownModule, InputMaskModule, RouterModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
  constructor(private formService: FormsService) {
  }

  listaPessoas: IPessoa[] = [];
  pessoa: IPessoa = { nome: '', idade: null, cpf: '' };

  ngOnInit() {//AeroFunction
    this.formService.findAll().subscribe((data: IPessoa[]) => {
      this.listaPessoas = data;
    })
  }

  cadastrarPessoa(): void {
    this.formService.criarPessoa(this.pessoa).subscribe((resposta) => {
      this.listaPessoas.push(resposta)//tabela tempo real...
      this.pessoa = { nome: '', idade: null, cpf: '' }
    })
  }

  limparPessoa() {
    this.pessoa = { nome: '', idade: null, cpf: '' }
  }
}
