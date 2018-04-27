import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ProposalListComponent } from './components/proposal/proposal-list/proposal-list.component';
import { ProposalNewComponent } from './components/proposal/proposal-new/proposal-new.component';
import { ProposalDetailComponent } from './components/proposal/proposal-detail/proposal-detail.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'proposals', component: ProposalListComponent },
    { path: 'proposals/new', component: ProposalNewComponent },
    { path: 'proposals/:id', component: ProposalDetailComponent },
    { path: '**', component: HomeComponent },
];


export const APP_ROUTES = RouterModule.forRoot(routes);
