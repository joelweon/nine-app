import {Component, ElementRef, EventEmitter, HostListener, OnInit, ViewChild} from '@angular/core';
import {HeaderService} from "./header.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {merge, switchMap} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('openClose', [
      state('closed', style({
        height: '0',
      })),
      transition('open <=> closed', [
        animate('300ms'),
      ]),
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  searchInputFocus = false;
  gnbInfo: any;
  isFixed = false;
  searchEmitter = new EventEmitter<any>();

  @ViewChild('headerBox') headerBox: ElementRef<HTMLInputElement> | any;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isFixed = this.headerBox.nativeElement.scrollHeight < document.documentElement.scrollTop;
  }

  constructor(private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.gnbInfo = this.headerService.gnbInfo;
    this.search();
  }

  private search() {
    merge(this.searchEmitter).pipe(
      switchMap(value => {
        return this.headerService.search(value)
      })
    ).subscribe();
  }
}
