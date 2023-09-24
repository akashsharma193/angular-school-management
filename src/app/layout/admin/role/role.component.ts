import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort,} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CreateRoleComponent } from './create-role/create-role.component';
import { ApiService } from 'src/app/services/api.service';
import { UpdateRoleComponent } from './update-role/update-role.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent {
  dataSource:any=[];
  displayedColumns = ['id', 'name' , 'action'];
  color = '#2929a1 ';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
   isLoaded:boolean=false;
  constructor(public dialog: MatDialog , 
    private apiService:ApiService
   ) {
  }


  ngOnInit() {
  // this.getRoleList();
  }

  public getRoleList(){
    this.apiService.getData('role/getRoleList').subscribe((res:any)=>{
      if(res.success == true){
       this.dataSource= res.data
       this.dataSource=new MatTableDataSource(this.dataSource)
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
      }
   })
  }


  openDialog() {
    const dialogRef = this.dialog.open(CreateRoleComponent, {
      width: '500px',
    },
    );
    
    dialogRef.afterClosed().subscribe(res => {
      this.refreshdataTable()
    });
  }

  roleToupdate(data:string): void {
    const dialogRef = this.dialog.open(UpdateRoleComponent, {
      data: data,
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result:any) => {
        this.refreshdataTable();
    });
}

  refreshdataTable(){
    this.getRoleList();
}

  ngAfterViewInit() {
    this.getRoleList();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


