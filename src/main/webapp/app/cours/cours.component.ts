import {Component, OnInit} from '@angular/core';
import {UeService} from 'app/shared/services/ue.service';
import {Ue} from 'app/shared/model/ue.model';
import {Category} from 'app/shared/model/enumerations/category.model';
import {HasColorClass} from 'app/shared/HasColorClass';

@Component({
  selector: 'jhi-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  ues: Ue[] = [];
  uesFiltered: Ue[] = [];
  categories = [Category.BACK_END, Category.FRONT_END, Category.GENERIC ];
  selectedCategory: Category | null = null;

  constructor(private ueService: UeService) { }

  ngOnInit(): void {
    this.ueService.query({size: 2000}).subscribe(res => {
      this.ues = res.body !== null ? res.body : [];
      this.uesFiltered = this.ues;
    });
  }

  resetCategoryFilter(e:Event): void {
    e.preventDefault();
    this.uesFiltered = this.ues;
    this.selectedCategory = null;
  }

  filterCategory(e:Event, category: Category): void {
    e.preventDefault();
    this.selectedCategory = category;
    this.uesFiltered = this.ues.filter(ue => ue.category === category);
  }

  getColorClass(category: Category | undefined): string {
    let color = '';
    if (category) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      color = HasColorClass.COLOR_CLASSES[this.categories.indexOf(category)];
    }
    return color;
  }

  categorySelectChanged($event: Category): void {
    if ($event) {
      this.selectedCategory = $event;
      this.uesFiltered = this.ues.filter(ue => ue.category === $event);

    }else {
      this.uesFiltered = this.ues;
      this.selectedCategory = null;
    }
  }
}

