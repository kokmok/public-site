import { Component, OnInit } from '@angular/core';
import {TechnologyService} from 'app/shared/services/technology.service';
import {Technology} from 'app/shared/model/technology.model';

@Component({
  selector: 'jhi-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  technologies: Technology[] = [];

  constructor(private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.technologyService.query()
      .subscribe(res => this.technologies = res.body);
  }

}
