import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { Message } from "primeng/api";
 import { MessageService } from "primeng/api";

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss'],
  providers: [MessageService]
})
export class CreateRoleComponent {
  createRole:FormGroup;
  update:any
  toster: Message[];
  constructor(private apiService:ApiService,  
    public messageService: MessageService, 
    public dialogRef: MatDialogRef<CreateRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
     
     }

  ngOnInit(){
    this.createRole = new FormGroup({
      id:  new FormControl(''),
      name :new FormControl('' )
    });
  }

  onSubmit(){
    this.apiService.postData('role/createRole',this.createRole.value).subscribe((res:any)=>{
      if(res.success){
        this.messageService.add({
          severity: "success",
          summary: "Service Message",
          detail: "Via MessageService"
        });
      }
    })
  }
}
