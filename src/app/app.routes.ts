import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Cadastro } from './cadastro/cadastro';
import { Detalhe } from './detalhe/detalhe';
import { Cesta } from './cesta/cesta';
import { Busca } from './busca/busca';
import { Login } from './login/login';
import { EsqueciSenha } from './esqueci-senha/esqueci-senha';

export const routes: Routes = [
    {path:"", component:Vitrine},
    {path:"vitrine", component:Vitrine},
    {path:"cadastro", component:Cadastro},
    {path:"detalhe", component:Detalhe},
    {path:"cesta", component:Cesta},
    {path:"busca", component:Busca},
    {path:"login", component:Login},
    {path:"esqueci-senha", component:EsqueciSenha}
];
