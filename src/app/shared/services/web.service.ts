import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
@Injectable()
export class WebService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.getDynamicUrl();
  }

  public online: boolean = navigator.onLine;
  baseUrl="https://www.readyassist.in/";
  deviceInfo: any = {};
  getAccessToken() {
    return localStorage.getItem('access_token')
  }
  // send error
  commonPostErrorRepoter(url, payload) {
    this.commonPostMethod(url, payload).subscribe(data => { }, error => { });
  }

  commonPostMethod(url: string, data: any): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: this.getAccessToken(),
    });
    const body = data;
    let endPoint:any=''
      endPoint = this.baseUrl + url;
    return this.http.post(endPoint, body, { headers });
  }

  commonGetMethod(args: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: this.getAccessToken()
    });
    const baseEndPoint = this.baseUrl + '/' + args;
    return this.http.post(baseEndPoint, { headers });
  }

  removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }
  isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }
  convertNaN(value) {
    if (this.isFloat(value)) {
      value = parseFloat(value).toFixed(2) || 0;
    } else {
      value = value || 0;
    }
    if (isNaN(value)) {
      value = 0;
    }
    const t = value || 0;
    return t;
  }
  convertToZero(value) {
    return parseFloat(value) >= 1 ? value : 0;
  }
  padValue(value): number {
    return Number(value) < 10 ? '0' + value : value;
  }

  makeFocusById(id: string) {
    setTimeout(() => {
      document.getElementById(id).focus();
    }, 500);
  }

  delayLoad(delayInMilliseconds) {
    // delayInMilliseconds = 1000; 1 second
    setTimeout(() => { }, delayInMilliseconds);
  }

 
  getDomainName(hostName)
{
    return hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
}
  getDynamicUrl() {
    if (window.location.hostname == "localhost") {
       this.baseUrl = "https://www.readyassist.in/";
    }
    else {
      this.baseUrl = "https://www.readyassist.in/";
    }
  }

   redirectURL(url: string) {
    this.router.navigate([url]).catch(err => {
           setTimeout(() => {
        this.router.navigate([url]);
      }, 2000)
    });
  }

  isOnline() {
    if (this.online) {
      // console.log("online");
      return true;
    }
    else {
      // console.log("offline");

      return false;
    }
  }  
  dynamicWidth(len) {
    let totalWidth = 800;
    let t = Math.round(totalWidth / len);
    let x = Array(len + 1).join("::" + t).split("::");
    return x.filter((data) => {
      return data != '';
    });
  }
    convertHtmlDataToNormalText(html) {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
isJSON(str) {
  try {
      return (JSON.parse(str));
  } catch (e) {
      return false;
  }
}
}
