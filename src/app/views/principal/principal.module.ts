import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts/ng2-charts';

import {PrincipalComponent} from './principal.component';
import {PrincipalRoutingModule} from './principal-routing.module';

@NgModule({
    imports: [
        PrincipalRoutingModule,
        ChartsModule
    ],
    declarations: [PrincipalComponent]
})
export class PrincipalModule {
}
