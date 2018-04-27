import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html'
})
export class ProposalListComponent implements OnInit {


  proposalList: Proposal[] = [];
  errorMessage: string;
 

  constructor(private proposalService: ProposalService, private router: Router) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() =>this.getProposals())
  }

  getProposals(){
    this.proposalService.getProposals()
      .subscribe(proposals => this.proposalList = proposals,error => this.errorMessage = <any>error);
  }

}
