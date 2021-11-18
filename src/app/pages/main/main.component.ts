import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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
  category: Array<string> = ["POPULAR", "TECHNOLOGY", "DESIGN"];
  posts = [];
  recommended = [];

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
    this.postService.posts_list().then().catch();
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
  
}
