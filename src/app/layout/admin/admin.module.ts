import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { RoleComponent } from './role/role.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { UpdateRoleComponent } from './role/update-role/update-role.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    RoleComponent,
    AdminSectionComponent,
    CreateRoleComponent,
    UpdateRoleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
