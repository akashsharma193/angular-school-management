import { Component ,Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent {
  updateRole:FormGroup;
  constructor(private apiService:ApiService,   
    public dialogRef: MatDialogRef<UpdateRoleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,){
     
     }

  ngOnInit(){
    console.log(this.data ,'asasghhg')
    this.updateRole = new FormGroup({
      id:  new FormControl(this.data.id),
      name :new FormControl(this.data.name )
    });
  }

  onSubmit(){
    this.apiService.postData('role/createRole',this.updateRole.value).subscribe(res=>{
      console.log(res , 'res')
    })
  }

}
