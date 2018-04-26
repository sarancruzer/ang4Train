import { UsersService } from './../../../_service/users.service';
import { Users } from './../../../_model/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
  providers: [UsersService]
})
export class ManageUsersComponent implements OnInit {

  private model = new Users;
  items: any = [];
  constructor(private _service: UsersService) { }

  ngOnInit() {

    this.getPosts();
  }


  getPosts(): void {
    this._service.getPosts()
        .subscribe((res) => {
          console.log(res);
          this.items = res;
        },
        (err) => {

          console.log('Error :: ' + err);

        });
      }


}
