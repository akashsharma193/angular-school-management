import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToastModule } from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
@NgModule({
    declarations: [],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatDialogModule,
        HttpClientModule,
        MatSnackBarModule,
        ToastModule,
        MessagesModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatSnackBarModule,
        ToastModule,
        MessagesModule,
        MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,MatDialogModule, HttpClientModule
    ]
})

export class MaterialModule { }
