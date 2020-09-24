import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostService } from '../../customer.services';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  CGPCGP: string;
  header: string;
  customer: Customer = {
    CGPCGP: '0',
    CGPDSC: '',
    CGPPIM: '',
    CGPPTR: '0',
    CGPLCUSR: '',
    CGPLCDAT: '',
    CGPDLT: ''
  }

  constructor(private route: Router, private service: PostService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.CGPCGP = this.router.snapshot.paramMap.get('CGPCGP')
    this.header = +this.CGPCGP === 0 ? 'Add Customer' : 'Edit Customer';

    // if (this.CGPCGP != '0') {
    //   this.customer = this.service.onEdit(this.CGPCGP)
    // }

    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:5555/products").subscribe(
      (res: Response) => {
        this.products = res.json();
        for (var i = 0; i < this.products.length; i++) {
          if (parseInt(this.products[i].id) === this.id) {
            this.exist = true;
            this.data = this.products[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    let customers: Customer = {
      CGPCGP: form.value.CGPCGP,
      CGPDSC: form.value.CGPDSC,
      CGPPIM: form.value.CGPPIM,
      CGPPTR: form.value.CGPPTR,
      CGPLCUSR: form.value.CGPLCUSR,
      CGPLCDAT: form.value.CGPLCDAT,
      CGPDLT: form.value.CGPDLT,
    }

    this.service.onAdd(customers);
    this.route.navigateByUrl('')
  }
}
