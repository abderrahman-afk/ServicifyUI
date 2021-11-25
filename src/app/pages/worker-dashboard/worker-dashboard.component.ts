import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as Rellax from 'rellax';
import { User } from 'src/app/class/user';
import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { PostService } from 'src/app/services/post.service';
import { SuggestionService } from 'src/app/services/suggestion.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-worker-dashboard',
  templateUrl: './worker-dashboard.component.html',
  styleUrls: ['./worker-dashboard.component.css']
})
export class WorkerDashboardComponent implements OnInit {
  requestform: FormGroup;
  user: User;
  request: any = {};
  category: Array<string> = ["POPULAR", "TECHNOLOGY", "DESIGN"];
  posts = [];
  recommended = [];
  search = []
  query = ''
  tickets= [1,2,3]

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private postService: PostService,
    private alertyfy:AlertyfyService, 
    private suggetionService: SuggestionService
  ) {}


  ngOnInit() {
    this.user = this.userService.getUser();
  }


}
