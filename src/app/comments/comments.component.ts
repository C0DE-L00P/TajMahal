import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SocialsService } from '../Services/socials.service';
import { IComment } from '../SharedClassesAndTypes/IComment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private socialsService:SocialsService,private activatedRoute:ActivatedRoute,private router:Router) {}

  comments:IComment[] = [];
  errorMsg:string = '';
  postID:any;

  ngOnInit(): void {
    this.postID = this.activatedRoute.snapshot.paramMap.get("id")

    // this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    //   this.postID = params.get("id")
    // })

    this.socialsService.getComments(this.postID).subscribe(
      commentsData =>{
      this.comments = commentsData;
    },error=>{
      this.errorMsg = error;
    })

   }
  
   GoBackToPost(id:number){
    this.router.navigate(["/posts",id])
   }

}
