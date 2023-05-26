import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.css']
})
export class UserAlbumsComponent implements OnInit {
  userId:any;
  userAlbums:any;

  constructor(private userAlbumsService:AlbumsService, private curRoute:ActivatedRoute) {
    this.userId = this.curRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.userAlbumsService.getUserAlbums(this.userId).subscribe({
      next: (data) => {
        this.userAlbums = data;
      },
      error: (err) => console.log(err)
    })
  }
}