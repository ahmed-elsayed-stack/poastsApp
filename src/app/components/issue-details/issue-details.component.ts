import { Component, inject, OnInit, WritableSignal } from '@angular/core';
import { ListsService } from '../../core/services/lists.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Icomments } from '../../core/interfaces/ilists';


@Component({
  selector: 'app-issue-details',
  standalone: true,
  imports: [],
  templateUrl: './issue-details.component.html',
  styleUrl: './issue-details.component.scss'
})
export class IssueDetailsComponent implements OnInit {

  private _ListsService = inject(ListsService);
  private _ActivatedRoute = inject(ActivatedRoute);
    private _Router = inject(Router);

  idPost: string | null = '';
  post: any;

  comments: Icomments[] = [];
      //  comments:WritableSignal<Icomments[]> = signal([]);

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        this.idPost = p.get('id');

        if (this.idPost) {
          // post
          this._ListsService.getPostDetails(this.idPost).subscribe({
            next: (res) => this.post = res,
            error: (err) => console.log(err)
          });

          // Show comments
          this._ListsService.getPostComments(this.idPost).subscribe({
            next: (res)=>{
              console.log('comments', res);
              this.comments = res;
            },
            error:(err)=>{
              console.log(err)
            }
          });
        }
      }
    });
  }


    goBack() {
    this._Router.navigate(['/issues']);  // back to posts
  }
}
