import { Component, OnInit } from '@angular/core';
import { developersList } from '../models/dev-skills.mock';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer = developersList[1];
  developers = developersList;

  constructor() {}

  ngOnInit() {}

}
