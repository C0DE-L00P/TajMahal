import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialsService } from '../Services/socials.service';
import { IUser } from '../SharedClassesAndTypes/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  errorMsg: string = '';

  productID: any;
  constructor(
    private socialService: SocialsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.socialService.getUsers().subscribe(
      (usersData) => {
        this.users = usersData;
        console.log(this.users);
      },
      (error) => {
        this.errorMsg = error;
      }
    );

      this.productID = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
