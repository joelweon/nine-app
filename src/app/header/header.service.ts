import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HeaderService {

  readonly gnb = [
    [
      {router: '', name: '자격증정보', isTitle: true},
      {router: '', name: '직무별 자격증'},
      {router: '', name: '계열별정보'},
      {router: '', name: '국제자격증'},
      {router: '', name: '자격증일정'},
      {router: '', name: '시험접수안내'},
      {router: '', name: '과정평가형 자격'},
      {router: '', name: '직업정보검색'},
      {router: '', name: '직업사전'},
      {router: '', name: '국가자격대여 근절캠패인'},
    ],
    [
      {router: '', name: '어학/공무원', isTitle: true},
      {router: '', name: '어학'},
      {router: '', name: '어학 원서접수 안내'},
      {router: '', name: '공무원'},
      {router: '', name: '공무원 원서접수 안내'},
      {router: '', name: '직업사전'},
      {router: '', name: '국가자격대여 근절캠패인'},
    ],
    [
      {router: '', name: '자넷info', isTitle: true},
      {router: '', name: '자넷뉴스'},
      {router: '', name: '자넷매거진'},
      {router: '', name: '큐넷 이용안내'},
      {router: '', name: '청년지원정책'},
      {router: '', name: '자격증 공모전'},
      {router: '', name: '국가혜택정보'},
      {router: '', name: '대학별 자격특전'},
    ],
    [
      {router: '', name: '자넷톡', isTitle: true},
      {router: '', name: '자격증 토론방'},
      {router: '', name: '일반 토론방'},
      {router: '', name: 'FAQ'},
      {router: '', name: '자넷TV'},
      {router: '', name: '우리동네학원', isTitle: true, isSub: true},
      {router: '', name: '맞춤학원검색'},
      {router: '', name: '학원 찾아드림'},
      {router: '', name: '우리동네학원 info'},
    ],
    [
      {router: '', name: '자넷추천', isTitle: true},
      {router: '', name: '추천테스트'},
      {router: '', name: '추천AI'},
      {router: '', name: '커뮤니티'},
    ],
    [
      {router: '', name: 'MY PAGE', isTitle: true},
      {router: '', name: '나의 자격증'},
      {router: '', name: '자넷톡'},
      {router: '', name: '즐겨찾기'},
      {router: '', name: '나의정보수정'},
      {router: '', name: '자격증정보수정'},
    ],
  ]

  private readonly url = "/search"

  constructor(private httpClient: HttpClient) {
  }

  /*
  * 검색
  * @params value : string
  */
  search<T>(value: string) {
    return this.httpClient.get<T>(`${this.url}/${value}`);
  }

  /*
  * 메뉴 목록
  * */
  get gnbInfo() {
    return this.gnb;
  }
}
