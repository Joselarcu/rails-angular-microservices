import { Component, OnInit } from '@angular/core';
import { Document } from '../../interfaces/document';
import { DocumentService } from './document.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html'
})
export class DocumentsComponent implements OnInit {

  pageTtle: string = "Document dashboard";

  documents: Document[] = [];
  errorMessage : string;
  // mode = "Observable";

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    // let timer = Observable.timer(0,5000);
    // timer.subscribe(() => this.getDocuments());
    this.getDocuments();
  }

  getDocuments(){
    this.documentService.getDocuments()
      .subscribe(documents => this.documents = documents,error => this.errorMessage = <any>error);
  }

}
