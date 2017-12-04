import {NgModule} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {PrincipalComponent} from './principal.component';

const routes: Routes = [
    {
        path: '',
        component: PrincipalComponent,
        data: {
            title: 'Busca de usuário'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrincipalRoutingModule {

}
