import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, retry} from "rxjs";
import {TopData} from "./main.data";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private readonly url = '/assets/data/top20.json';

  constructor(private http: HttpClient) {}

  /*
  * TOP 키워드 목록 가져오기
  * */
  hotKeyword(): Observable<Array<TopData>> {
    return this.http.get<Array<TopData>>(this.url)
      .pipe(retry({count: 3, delay: 3000}));
  }
}
