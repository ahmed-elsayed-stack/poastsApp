import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'issues', pathMatch: 'full' },
  { path: 'issues', loadComponent: () => import('./components/issues-list/issues-list.component').then(m => m.IssuesListComponent) },
  { path: 'issues/new', loadComponent: () => import('./components/issue-create/issue-create.component').then(m => m.IssueCreateComponent) },
  { path: 'issues/:id', loadComponent: () => import('./components/issue-details/issue-details.component').then(m => m.IssueDetailsComponent) },
  { path: '**', redirectTo: 'issues' }
];
