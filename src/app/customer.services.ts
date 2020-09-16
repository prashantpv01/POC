import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Detail } from './customer/detail';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    customerDetail: Detail[] = [];
    constructor(private httpClient: HttpClient) { }

    get(CGPCGP: number): Observable<any> {
        return this.httpClient.get('/assets/customergroup.xml/' + CGPCGP);
    }
    updateCustomer(CGPCGP) {
        let customer: Detail;
        this.httpClient.post('/assets/customergroup.xml',
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'text/xml')
                    .append('Access-Control-Allow-Methods', 'GET')
                    .append('Access-Control-Allow-Origin', '*')
                    .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
                responseType: 'text'
            })
            .subscribe((data) => {
                console.log(data)
                this.customerDetail.map(val => {
                    if (val.CGPCGP == CGPCGP) customer = val;
                });
                return customer;
            });

    }
    customerEdit(customer) {
        let x: Boolean = false;
        this.customerDetail.map((val, index) => {
            if (val.CGPCGP === customer.CGPCGP) {
                this.customerDetail[index] =
                    customer; x = true
            }
        });
        return x
    }
}