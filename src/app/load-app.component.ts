import { AfterViewInit, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'load-app',
  templateUrl: './load-app.component.html',
  styleUrls: ['./load-app.component.css']
})
export class LoadAppComponent implements OnInit, AfterViewInit {

  constructor() { }
  
  show: boolean = false;
  @Output() notify = new EventEmitter();
  ngOnInit(): void {
    }

  ngAfterViewInit():void{
    setTimeout(() => {
      this.notify.emit(true);
      this.show = true;
    }, 5000);
  }
}
