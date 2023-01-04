import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }
   public video = [
    {vName:'Career Advices',Like:'assets/career4.jpg', like:0,Dislike:0},
    {vName:'Tips for technical interview',Like:'assets/optevus.jpg', like:0,Dislike:0},
    {vName:'How to enjoy your works',Like:'assets/enjoy.webp', like:0,Dislike:0},
    {vName:'Managing Time Effectively',Like:'assets/time.png', like:0,Dislike:0},
    {vName:'How to crack Interviews',Like:'assets/interview.jpg', like:0,Dislike:0},
    {vName:'How to manage work-life balance ',Like:'assets/worklife.jpg', like:0,Dislike:0},
  ]
    
  ngOnInit(): void {
  }

 
public LikeCounter(video:any){
   video.like++;
   if(video.like > 1){
    
    video.like=0
    
   }
   if(video.like = 1){
    video.Dislike=0
   }
}
public DislikeCounter(video:any){
   video.Dislike++;

   if(video.Dislike > 1){
    
    video.Dislike=0
    }
   if(video.Dislike = 1){
    video.like=0
   }
}
}
