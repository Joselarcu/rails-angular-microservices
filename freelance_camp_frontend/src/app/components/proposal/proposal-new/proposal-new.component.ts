import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from '../proposal';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html'
})
export class ProposalNewComponent implements OnInit {

  proposal = new Proposal();
  submitted: boolean = false;

  constructor(private proposalService: ProposalService) { }

  ngOnInit() {

  }

  createProposal(proposal: Proposal){
    this.submitted = true;
    this.proposalService.createProposal(proposal)
      .subscribe(
        data => { return true},
        error => { console.log("error saving proposal"); return Observable.throw(error);
      }
    );
  }

}
