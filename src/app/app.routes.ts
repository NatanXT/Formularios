import { Routes } from '@angular/router';
import { FormsComponent } from './pages/forms/forms.component';
import { VisualizarComponent } from './pages/visualizar/visualizar.component';

export const routes: Routes = [
    {path : '', component: FormsComponent},
    {path : 'visualizar/:cpf', component: VisualizarComponent}
];
