import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClaimListComponent} from '../claim-list/claim-list.component';
const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ClaimListComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClaimListRouting { }