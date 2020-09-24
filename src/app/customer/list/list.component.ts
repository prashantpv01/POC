import { Component, OnInit } from '@angular/core';
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostService } from '../../customer.services';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // detail: Detail[]
  // public newArr: Array<Object> = [
  //   {
  //     CGPCGP: '',
  //     CGPDSC: '',
  //     CGPPIM: '',
  //     CGPPTR: '',
  //     CGPLCUSR: '',
  //     CGPLCDAT: '',
  //     CGPDLT: ''
  //   },
  // ];
  // public xmlItems: any;
  customers: Customer[];

  constructor(private service: PostService) {
    // this.loadXML();
  }

  ngOnInit(): void {
    this.customers = this.service.onGet()
  }

  onDelete(CGPCGP: string) {
    this.service.onDelete(CGPCGP)
  }



  // loadXML() {
  //   this._http.get('/assets/customergroup.xml',
  //     {
  //       headers: new HttpHeaders()
  //         .set('Content-Type', 'text/xml')
  //         .append('Access-Control-Allow-Methods', 'GET')
  //         .append('Access-Control-Allow-Origin', '*')
  //         .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
  //       responseType: 'text'
  //     })
  //     .subscribe((data) => {
  //       this.parseXML(data)
  //         .then((data) => {
  //           this.xmlItems = data;
  //           console.log(data)
  //         });
  //     });
  // }
  // parseXML(data) {
  //   return new Promise(resolve => {
  //     var k: string | number,
  //       secondArr = [],
  //       parser = new xml2js.Parser(
  //         {
  //           trim: true,
  //           explicitArray: true
  //         });
  //     // console.log(data)
  //     this.newArr = secondArr
  //     parser.parseString(data, function (err, result) {
  //       var obj = result.Recordset;
  //       console.log(obj)
  //       for (k in obj.Record) {
  //         var item = obj.Record[k];

  //         console.log(item);
  //         secondArr.push({
  //           CGPCGP: item.CGPCGP[0],
  //           CGPDSC: item.CGPDSC[0],
  //           CGPPIM: item.CGPPIM[0],
  //           CGPPTR: item.CGPPTR[0],
  //           CGPLCUSR: item.CGPLCUSR[0],
  //           CGPLCDAT: item.CGPLCDAT[0],
  //           CGPDLT: item.CGPDLT[0]
  //         });
  //       }

  //       resolve(secondArr);
  //     });
  //   });
  // }
}
