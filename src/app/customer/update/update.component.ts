import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../customer.services'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  CGPCGP: number;
  form: FormGroup;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.CGPCGP = this.route.snapshot.params['postId'];
    // this.postService.find(this.CGPCGP).subscribe((data: Post) => {
    //   this.post = data;
    // });
  }

}
