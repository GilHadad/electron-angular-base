import {Component, OnInit} from '@angular/core';
import {foo} from '../../../nodejs/fs';

interface MenuOption {
  index: number;
  active: boolean;
  text: string;
  icon: string;

}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  showFiller = false;
  public readmeContent = '';
  menuOptions: MenuOption[] = [
    {index: 1, active: true, text: 'Home', icon: 'fas fa-home'},
    {index: 2, active: false, text: 'Package Generator', icon: 'fas fa-cubes'},
    {index: 3, active: false, text: 'Files', icon: 'fas fa-folder-open'},
    {index: 4, active: false, text: 'Web', icon: 'fas fa-globe'},
    {index: 5, active: false, text: 'Rates', icon: 'fas fa-star'},
    {index: 6, active: false, text: 'About', icon: 'fas fa-info'},
  ];

  selectedMenuOption: MenuOption = this.menuOptions[0];
  test = 'app-package-generator';
  constructor() {}

  ngOnInit() {
    foo().then(s => this.readmeContent = s);
  }

  selectedOption(option: MenuOption) {
    this.menuOptions.forEach(el => {
      if (el.index === option.index) {
        el.active = true;
        this.selectedMenuOption = option;
      } else {
        el.active = false;
      }
    });

  }

}
