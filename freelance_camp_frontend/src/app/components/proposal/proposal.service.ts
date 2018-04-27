import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { Proposal } from './proposal';


@Injectable()
export class ProposalService {
    private proposalUrl = 'http://localhost:3002/proposals';

    constructor(private http: Http) { }

    getProposals(): Observable<Proposal[]> {
        return this.http.get(this.proposalUrl + '.json')
            .map((response: Response) => <Proposal[]>response.json())
            .catch(this.handleError);
    }

    getProposal(proposalId :number): Observable<Proposal>{
        return this.http.get(this.proposalUrl + '/' + proposalId + '.json')
            .map((response: Response) => <Proposal> response.json())
            .catch(this.handleError);
    }

    createProposal(proposal: Proposal){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new  RequestOptions({headers: headers});
        return this.http.post(this.proposalUrl, JSON.stringify(proposal),{headers: headers})
            .map((res: Response) => res.json());
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}