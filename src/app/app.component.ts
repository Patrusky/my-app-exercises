import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  showSecret1 = false;
  showSecret2 = false;
  log  = [ 1 ];

  onToggleShowSecret(){
    this.showSecret2 = !this.showSecret2;
  }
  onAddNumber() {
    this.log.push (this.log.length + 1);
  }
}
