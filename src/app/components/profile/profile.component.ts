import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  test: boolean = true;
  user = { image : ''}
  profile = { image : ''}
  image
  preview = null

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser()
    this.profile = this.user
    this.userService.getProfile().then((profile: any) => {
      this.profile = { ...this.profile, ...profile }
      this.user.image =  this.profile.image
    }).catch((e) => console.log(e))
  }

  edit() {
    this.test = false;
  }

  save() {
    this.userService.updateProfile(this.profile).then().catch(e => console.error(e))
    this.updateImage()
    this.test = true
  }

  updateImage() {
    const form = new FormData()
    form.append('images', this.image)
    this.userService.updateImage(form).then().catch(e => console.error(e))
  }

  onChange(event) {
    this.image = event.target.files[0];
    var reader = new FileReader();

    reader.onload = (e:any) => {
      this.preview = e.target.result;
    };

    reader.readAsDataURL(this.image);
  }

}
