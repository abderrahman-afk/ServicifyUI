import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { PostService } from 'src/app/services/post.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postform: FormGroup;
  post = { title: '' , content: ''}

  constructor(private fb: FormBuilder, private postService:PostService, private alertyfy:AlertyfyService) {}

  ngOnInit() {
    this.postform = this.fb.group({
      title: [''],
      content: ['']
    })
  }

  postClient() {
    this.postService.create_post(this.post) 
    .then(() => { 
      this.alertyfy.success("your post have been sent") 
      this.post = { title: '' , content: ''}
    })     
    .catch((e) => {
      this.alertyfy.error("check your credentials");
      console.error(e)
    })
  }


}
