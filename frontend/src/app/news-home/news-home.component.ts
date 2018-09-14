import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { INews } from '../models/news.inteface';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css']
})
export class HomeComponent implements OnInit {
    newsapiEndpoint: string;
    topHeadline:INews[];
    category:INews[];
    optionCategory:string;   
    news: INews;
    constructor(private service:NewsService, private router: Router) {
      this.newsapiEndpoint=environment.newsapiEndpoint; 
      this.optionCategory="General";
     }
  
    ngOnInit() {
     this.getHeadLines();
     this.getCategory();
    }
  
    categorChange(){
      this.getCategory();
    }
    getHeadLines(){
        return this.service.get(this.newsapiEndpoint+'top-headlines?country=in&apikey=1e422ee7aa8a4174b64cdc84245948cd&language=en&page=1').
                subscribe(
                  result => {                                
                    this.topHeadline = result;                    
                  }, 
                  err => {                      
                      console.log(err);
                  });         
  
    }
  
    getCategory(){
      return this.service.get(this.newsapiEndpoint+'top-headlines?category='+this.optionCategory+'&apikey=1e422ee7aa8a4174b64cdc84245948cd&language=en&page=1').
              subscribe(
                response => {
                  this.category = response;
                },
                 err => {                      
                  console.log(err);
              });          
  
  }

  
}