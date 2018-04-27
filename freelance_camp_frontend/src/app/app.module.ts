import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTES } from './app-routes';
import { DocumentsComponent } from './components/documents/documents.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProposalListComponent } from './components/proposal/proposal-list/proposal-list.component';
import { ProposalNewComponent } from './components/proposal/proposal-new/proposal-new.component';
import { ProposalDetailComponent } from './components/proposal/proposal-detail/proposal-detail.component';
import { DocumentService } from './components/documents/document.service';
import { HttpModule } from '@angular/http';
import { ProposalService } from './components/proposal/proposal.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentsComponent,
    NavbarComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalDetailComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    HttpModule

  ],
  providers: [DocumentService, ProposalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
