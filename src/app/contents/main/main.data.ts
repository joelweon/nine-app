import {SwiperOptions} from "swiper";

export interface TopData {
  id: number;
  title: string;
  licenseOrgan: string;
  esRegdt: Date;
  imgName: string; // 내부 사용
  dDay: string // 내부 사용
}

export const keywordImg = [
  {id: 1, name: 'toeic.png'},
  {id: 2, name: 'korean_history.png'},
  {id: 3, name: 'electrical.png'},
  {id: 4, name: 'realtor.png'},
  {id: 5, name: 'industrial_safety.png'},
  {id: 6, name: 'kbs_korean.png'},
  {id: 7, name: 'helper.png'},
  {id: 8, name: 'itq.png'},
]

/*swiper 옵션 세팅*/
export const swiperMainFirst: SwiperOptions = {
  loop: true,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 1,
  pagination: {
    type: 'fraction',
    el: '.swiper-event-pagination'
  },
}
export const swiperMainSecond: SwiperOptions = {
  loop: true,
  navigation: {
    enabled: true,
    prevEl: '.swiper-main-info-prev',
    nextEl: '.swiper-main-info-next',
  },
};
export const swiperMainThird: SwiperOptions = {
  loop: true,
  navigation: {
    enabled: true,
    prevEl: '.swiper-chart-prev',
    nextEl: '.swiper-chart-next',
  },
}
export const swiperBanner: SwiperOptions = {
  loop: true,
  navigation: {
    enabled: true,
    prevEl: '.swiper-banner-prev',
    nextEl: '.swiper-banner-next',
  },
  slidesPerView: 3,
};
