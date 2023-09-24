import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { RoleComponent } from './role/role.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'admin-section', pathMatch: 'full' },
      { path: 'admin-section', component:AdminSectionComponent },
      { path: 'role', component: RoleComponent },
     ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
