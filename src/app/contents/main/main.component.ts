import {Component, OnInit} from '@angular/core';
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
import {keywordImg, swiperBanner, swiperMainFirst, swiperMainSecond, swiperMainThird, TopData} from "./main.data";
import {MainService} from "./main.service";

SwiperCore.use([Pagination, Autoplay, Navigation]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  keywordData: Array<TopData> = [];

  /*swiper*/
  swiperMainFirst = swiperMainFirst;
  swiperMainSecond = swiperMainSecond;
  swiperMainThird = swiperMainThird;
  swiperBanner = swiperBanner;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.getHotKeyword();
  }

  getHotKeyword() {
    this.mainService.hotKeyword().subscribe(topData => {
      this.keywordData = topData.map((data: TopData) => {
        const k = keywordImg.find(keyword => {
          return data.id === keyword.id;
        })

        if (!!k?.name) data.imgName = k.name;

        // D-Day 계산
        let today = new Date()
        today.setHours(0, 0, 0, 0)
        const diffDate = today.getTime() - new Date(data.esRegdt).getTime();
        const result = Math.ceil(diffDate / (1000 * 3600 * 24));
        data.dDay = 0 < result ? `+${result}` : `-${Math.abs(result)}`;
        return data;
      })
    })
  }
}
