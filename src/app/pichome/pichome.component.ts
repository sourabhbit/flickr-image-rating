import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Subscription } from 'rxjs/Subscription';
import { FlickrService } from '../flickr.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pichome',
  templateUrl: './pichome.component.html',
  styleUrls: ['./pichome.component.css']
})
export class PichomeComponent implements OnInit {
  public subscriber: Subscription;
  public chosenFood: any = {};
  public userReview: any = {};
  public initialStars: number = 0;

  constructor(private _CommonService: CommonService, private _FlickrService: FlickrService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('pid'+this._CommonService.chosenFood.id)!=null) {
      this.userReview = JSON.parse(localStorage.getItem('pid'+this._CommonService.chosenFood.id));
      this.initialStars = this.userReview.reviewStars;
    }
    this._FlickrService.getDishInfo(this._CommonService.chosenFood.id).subscribe(result => {
      this.chosenFood = result.photo;
      console.log(this.chosenFood);
    },error => {
      console.log(error);
    });

  }

  getImageUrl() {
    return this._FlickrService.formFlickrData(this.chosenFood);
  }

  onRatingSet(stars:any) {
    this.userReview.reviewStars = stars;
  }

  createPhotoReview() {
    console.log(this.userReview);

    if(this.userReview["reviewText"] || this.userReview["reviewText"].length!==0) {
      localStorage.setItem('pid'+this.chosenFood.id,JSON.stringify(this.userReview));
      this._FlickrService.createToast("Review added successfully","green");
      this.router.navigate(['/']);
    }
    else {
      this._FlickrService.createToast("Please provide your opinion","red");
    }
  }

}
