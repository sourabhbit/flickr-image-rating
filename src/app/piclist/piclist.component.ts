import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';
import { CommonService } from "../common.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-piclist',
  templateUrl: './piclist.component.html',
  styleUrls: ['./piclist.component.css']
})
export class PiclistComponent implements OnInit {

  public foodList: any = [];
  public pageNumber: number = 1;
  public p: number;
  public showLoader: boolean = false;

  constructor(private _FlickrService: FlickrService,private _CommonService: CommonService,private router: Router) { }

  ngOnInit() {
    this.getFoodList();
  }

  getFoodList() {
    this.showLoader = true;
    this._FlickrService.getDishPics().subscribe(result => {
      console.log(result);
      this.foodList = result.photos.photo;
      this.showLoader = false;
    })
  }

  getImageUrl(food:any): string {
    return this._FlickrService.formFlickrData(food);
  }

  checkAlreadyReviewed(id:string): number {
    return this._CommonService.getInitialStars(id);
  }

  checkAlreadyReviewerName(id:string): string {
    return this._CommonService.getInitialName(id);
  }

  foodSelected(food:any) {
    this._CommonService.updateChosenFood(food);
    this.router.navigate(['/pic']);
  }

}
