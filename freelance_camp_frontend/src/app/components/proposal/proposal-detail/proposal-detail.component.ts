import { Component, OnInit, Input } from '@angular/core';
import { Proposal } from '../proposal';
import { ActivatedRoute, Params} from '@angular/router';
import { ProposalService } from '../proposal.service';

@Component({
  selector: 'app-proposal-detail',
  templateUrl: './proposal-detail.component.html'
})
export class ProposalDetailComponent implements OnInit {

  id:number;
  routeId : any;
  proposal: Proposal;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private proposalService: ProposalService) { }

  ngOnInit() {
    this.routeId = this.route.params.map(params => params['id']).subscribe(id => {
      this.proposalService.getProposal(id)
        .subscribe(res => this.proposal = res);
    });
  }

}
