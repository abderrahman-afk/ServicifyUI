import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/class/user";
import { AlertyfyService } from "src/app/services/alertyfy.service";
import { PostService } from "src/app/services/post.service";
import { SuggestionService } from "src/app/services/suggestion.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  requestform: FormGroup;
  user: User;
  request: any = {};
  categories = [];
  posts = [];
  recommended = [];
  search = []
  query = ''

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private postService: PostService,
    private alertyfy:AlertyfyService, 
    private suggetionService: SuggestionService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    this.postService.posts_list()
    .then((response:any) => {
      this.posts = response
    })
    .catch(this.errorLoading);
    this.suggetionService.recommendation()
    .then((response:any) => {
      this.recommended = response
    })
    .catch(this.errorLoading);
    this.suggetionService.searchByName('')
    .then((response:any) => {
      this.search = response
    })
    .catch(this.errorLoading);
    this.suggetionService.listCategories()
    .then((response:any) => {
      this.categories = response
    })
    .catch(this.errorLoading)
    this.requestform = this.fb.group({
      job: [""],
      description: [""],
      disponible: [""],
    });
  }

  requestRole() {
    this.userService
      .requestRole(this.request)
      .then()
      .catch((e) => console.error(e));
  }

  errorLoading(e) {
    console.log(e)
    this.alertyfy.error("error loading data")
  }

  searchWorker() {
    this.suggetionService.searchByName(this.query)
    .then((response:any) => {
      this.search = response
    })
    .catch(this.errorLoading);
  }
  requestsend(){
    this.alertyfy.success("your request has been send")
  }
  
}
