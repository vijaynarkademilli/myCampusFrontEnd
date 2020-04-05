import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-campus-moderator',
  templateUrl: './campus-moderator.component.html',
  styleUrls: ['./campus-moderator.component.css']
})
export class CampusModeratorComponent implements OnInit {
  content: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getModeratorBoard().subscribe(
        data => {
          this.content = data;
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
    );
  }
}