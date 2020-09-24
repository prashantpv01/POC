import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Detail } from './customer/detail';
import xml2js from 'xml2js'
import { Customer } from './models/customer.model'

@Injectable({
    providedIn: 'root'
})
export class PostService {
    customers: Customer[] = [
        {
            CGPCGP: 'AU',
            CGPDSC: 'AU - Audi',
            CGPPIM: 'XMLPDF',
            CGPPTR: '1',
            CGPLCUSR: 'ZPalotai',
            CGPLCDAT: '2017-12-07',
            CGPDLT: 'N'
        }
    ]

    constructor() { }

    onGet() {
        return this.customers
    }

    onAdd(customer: Customer) {
        this.customers.push(customer)
    }

    onDelete(CGPCGP: string) {
        let customer = this.customers.find(x => x.CGPCGP === CGPCGP)
        let index = this.customers.indexOf(customer, 0)
        this.customers.splice(index, 1)
    }

    onEdit(CGPCGP: string) {
        return this.customers.find(x => x.CGPCGP === CGPCGP)
    }
}