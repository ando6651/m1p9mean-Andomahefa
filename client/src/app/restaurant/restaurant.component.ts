import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {

  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
