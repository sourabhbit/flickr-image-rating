import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  private flickrParams = {
    params: {
      api_key:'6c16b774cb4060146fa3a6b3482d783e',
      format:'json',
      nojsoncallback:'1',
      per_page:'3000'
    }
  }

  private flickrUrl = "https://api.flickr.com/services/rest/";
  constructor(private http: HttpClient) { }

  getDishPics(): Observable<any> {
    const API_URL = this.flickrUrl;
    this.flickrParams.params['method'] = 'flickr.photos.search';
    this.flickrParams.params['tags'] = 'food';
    this.flickrParams.params['text'] = 'food';
    // this.flickrParams.params['page'] = pageNumber.toString();
    return this.http.get<any>(API_URL,this.flickrParams);
  }

  getDishInfo(photoId:number): Observable<any> {
    const API_URL = this.flickrUrl;
    this.flickrParams.params['method'] = 'flickr.photos.getInfo';
    this.flickrParams.params['photo_id'] = photoId;
    return this.http.get<any>(API_URL,this.flickrParams);
  }

  formFlickrData(food:any): string {
    return 'http://farm'+food.farm+'.static.flickr.com/'+food.server+'/'+food.id+'_'+food.secret+'.jpg';
  }

  createToast(message:string, backgroundColor:string) {
    console.log("tst");
    let snackbar = document.getElementById("snackbar");
    console.log(snackbar);
    snackbar.className = "showToast";
    snackbar.style.background = backgroundColor || "#000";
    snackbar.innerHTML = message;
    setTimeout(() => {
      snackbar.className = snackbar.className.replace("showToast", "");
    }, 3000);
  }
}
