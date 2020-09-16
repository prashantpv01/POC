import { Component, OnInit } from '@angular/core';
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Detail } from '../detail'
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../../customer.services';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  detail: Detail;
  editForm: FormGroup;

  public newArr: Array<Object> = [
    {
      CGPCGP: '',
      CGPDSC: '',
      CGPPIM: '',
      CGPPTR: '',
      CGPLCUSR: '',
      CGPLCDAT: '',
      CGPDLT: ''
    },
  ];

  ngOnInit(): void {
    let userId = window.localStorage.getItem("editUserId");
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['/']);
      return;
    }
    this.editForm = this.formBuilder.group({
      CGPCGP: [''],
      CGPDLT: [''],
      CGPDSC: [''],
      CGPLCDAT: [''],
      CGPLCUSR: [''],
      CGPPIM: [''],
      CGPPTR: ['']
    });
    console.log(this.newArr)
    this.newArr.map((val) => {
      return (this.editForm.setValue(val)), console.log(val)
    })
    this.service.get(+userId)
      .subscribe(data => {
        console.log(data)
        // this.editForm.setValue(data.)
      })

  }

  public xmlItems: any;

  constructor(private _http: HttpClient, private service: PostService, private router: Router, private formBuilder: FormBuilder) {

  }

  loadXML() {
    this._http.get('/assets/customergroup.xml',
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
      })
      .subscribe((data) => {
        this.parseXML(data)
          .then((data) => {
            this.xmlItems = data;
            console.log(data)
          });
      });
  }
  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        secondArr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      // console.log(data)
      this.newArr = secondArr
      parser.parseString(data, function (err, result) {
        var obj = result.Recordset;
        console.log(obj)
        for (k in obj.Record) {
          var item = obj.Record[k];

          console.log(item);
          secondArr.push({
            CGPCGP: item.CGPCGP[0],
            CGPDSC: item.CGPDSC[0],
            CGPPIM: item.CGPPIM[0],
            CGPPTR: item.CGPPTR[0],
            CGPLCUSR: item.CGPLCUSR[0],
            CGPLCDAT: item.CGPLCDAT[0],
            CGPDLT: item.CGPDLT[0]
          });
        }

        resolve(secondArr);
      });
    });
  }
}
