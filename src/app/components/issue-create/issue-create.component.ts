import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListsService } from '../../core/services/lists.service';

@Component({
  selector: 'app-issue-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './issue-create.component.html',
  styleUrl: './issue-create.component.scss'
})
export class IssueCreateComponent {

  private _FormBuilder = inject(FormBuilder);
  private _ToastrService = inject(ToastrService);
  private _Router = inject(Router);
  private _ListsService = inject(ListsService);

    dataForm = signal('')

    newPost:FormGroup = this._FormBuilder.group({
      title:[null , [Validators.required , Validators.minLength(3)]],
      body:[null ,[ Validators.required] ],
    })

creatPost() {
  if (this.newPost.valid) {
    this._ListsService.getCreatPost(this.newPost.value).subscribe({
      next: (res) => {
        console.log( res);

        // ✅ إظهار Toastr Success
        this._ToastrService.success('Post created successfully!', 'Success');

        // ⏳ بعد 2 ثانية يرجع لصفحة posts
        setTimeout(() => {
          this._Router.navigate(['/issues']);
        }, 2000);
      },
      error: (err) => {
        console.error(err);
        this._ToastrService.error('Something went wrong', 'Error');
      }
    });

  } else {
    this.newPost.markAllAsTouched();
  }
}




}
