import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private apiURL = "https://gfroehlich.spms.lear.com/rest";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'text/xml',
            'Accept': 'application/xml',
            'Response-Type': 'text'
        })
    }

    constructor(private httpClient: HttpClient) { }

    update() {
        const postedData = `
           <Record>

        <CPTCGP>AU</CPTCGP>

        <CPTCPT>AU326</CPTCPT>

        <CPTDSC>326 - Audi Q3 II</CPTDSC>

        <CPTCFD>Petra Nowak</CPTCFD>

        <CPTCML></CPTCML>

        <CPTMLO></CPTMLO>

        <CPTMLF>Audi</CPTMLF>

        <CPTLCUSR>ZPalotai</CPTLCUSR>

        <CPTLCDAT>2019-02-20</CPTLCDAT>

        <CPTDLT>N</CPTDLT>

    </Record>`;
        return this.httpClient.post(this.apiURL, postedData, this.httpOptions)
            .subscribe(
                result => {
                    console.log(result);  //<- XML response is in here *as plain text*
                },
                error => console.log('There was an error: ', error));
    }
}