import { Component, inject, WritableSignal, signal } from '@angular/core';
import { ListsService } from '../../core/services/lists.service';
import { Ilists } from '../../core/interfaces/ilists';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';

@Component({
  selector: 'app-issues-list',
  standalone: true,
  imports: [RouterLink , FormsModule , SearchPipe],
  templateUrl: './issues-list.component.html',
  styleUrl: './issues-list.component.scss'
})
export class IssuesListComponent {

  private readonly _ListsService = inject(ListsService);

    // posts:Ilists[] = [];
     posts:WritableSignal<Ilists[]> = signal([]);
    text:string = "";

    ngOnInit(): void {
      this._ListsService.getAllPosts().subscribe({
        next:(data)=>{
          console.log('allPosts', data);
          this.posts.set(data);
        }
      })

    }
}
