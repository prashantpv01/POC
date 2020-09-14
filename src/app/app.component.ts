import { Component } from '@angular/core';
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spms';
  public xmlItems: any;
  constructor(private _http: HttpClient) {
    this.loadXML();
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
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      // console.log(data)

      parser.parseString(data, function (err, result) {
        var obj = result.Recordset;
        console.log(obj)
        for (k in obj.Record) {
          var item = obj.Record[k];
          console.log(item);
          arr.push({
            CGPCGP: item.CGPCGP[0],
            CGPDSC: item.CGPDSC[0],
            CGPPIM: item.CGPPIM[0],
            CGPPTR: item.CGPPTR[0],
            CGPLCUSR: item.CGPLCUSR[0],
            CGPLCDAT: item.CGPLCDAT[0],
            CGPDLT: item.CGPDLT[0]
          });
        }
        resolve(arr);
      });
    });
  }
}