import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from '../material.module';
import { FooterComponent } from '../smartcomponent/footer/footer.component';
import { SidebarComponent } from '../smartcomponent/sidebar/sidebar.component';
import { HeaderComponent } from '../smartcomponent/header/header.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterialModule
    ],
    declarations: [LayoutComponent , FooterComponent , SidebarComponent , HeaderComponent]
})
export class LayoutModule {}
