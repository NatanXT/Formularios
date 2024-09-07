import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { IPessoa } from '../forms/forms.types';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsService } from '../forms/forms.service';


@Component({
  selector: 'app-visualizar',
  standalone: true,
  imports: [FloatLabelModule, FormsModule, InputTextModule, ButtonModule, CommonModule, DropdownModule, InputMaskModule, RouterModule, ],
  templateUrl: './visualizar.component.html',
  styleUrl: './visualizar.component.scss'
})
export class VisualizarComponent implements OnInit{
  pessoa: IPessoa | undefined;
  constructor(private route: ActivatedRoute,
    private formsService: FormsService
  ){}
  ngOnInit(){
    const cpf= this.route.snapshot.paramMap.get('cpf');
    if(cpf){
      this.formsService.findAll().subscribe(pessoa=>{
        this.pessoa = pessoa.find(p =>p.cpf === cpf)
      })
    }
  }
}
