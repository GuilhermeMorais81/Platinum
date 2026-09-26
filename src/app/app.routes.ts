import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Cadastro } from './cadastro/cadastro';
import { Detalhe } from './detalhe/detalhe';

export const routes: Routes = [
    {path:"", component:Vitrine},
    {path:"vitrine", component:Vitrine},
    {path:"cadastro", component:Cadastro},
    {path:"detalhe", component:Detalhe}
];
