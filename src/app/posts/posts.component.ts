import { Component, OnInit } from '@angular/core';
import { SocialsService } from '../Services/socials.service';
import { IPost } from '../SharedClassesAndTypes/IPost';
import { IComment } from '../SharedClassesAndTypes/IComment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  posts:IPost[] = [];
  comments:IComment[] = [];
  errorMsg:string = '';

  constructor(private socialService:SocialsService,private router:Router,private activatedRoute:ActivatedRoute) { }

  postIDLastVisited:any;
  ngOnInit(): void {

    this.postIDLastVisited=this.activatedRoute.snapshot.paramMap.get("id")

    this.socialService.getPosts().subscribe(
      postsData =>{
      this.posts =  postsData;
    },error=>{
      this.errorMsg = error; 
    })
  }

  ShowComments(id:number){
    this.socialService.getComments(id).subscribe(
      commentsData =>{
      this.comments[0] = commentsData[0];
      this.comments[1] = commentsData[1];
    },error=>{
      this.errorMsg = error; 
    })
  }

  ShowAllComments(id:number){
    this.router.navigate(["/comments",id])
  }
}
