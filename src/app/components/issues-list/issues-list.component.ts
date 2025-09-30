import { Component, inject } from '@angular/core';
import { ListsService } from '../../core/services/lists.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-issues-list',
  standalone: true,
  imports: [RouterLink, FormsModule, SearchPipe, AsyncPipe],
  templateUrl: './issues-list.component.html',
  styleUrl: './issues-list.component.scss'
})
export class IssuesListComponent {
  private readonly _ListsService = inject(ListsService);

  // Observable مباشرة
  posts$ = this._ListsService.getAllPosts();

  text: string = "";
}
