import { ITechnology } from 'app/shared/model/technology.model';
import { Category } from 'app/shared/model/enumerations/category.model';

export interface IUe {
  id?: number;
  title?: string;
  slug?: string;
  subtitle?: string;
  summary?: string;
  content?: any;
  periodes?: number;
  category?: Category;
  pictureId?: number;
  technologies?: ITechnology[];
}

export class Ue implements IUe {
  constructor(
    public id?: number,
    public title?: string,
    public slug?: string,
    public subtitle?: string,
    public summary?: string,
    public content?: any,
    public periodes?: number,
    public category?: Category,
    public pictureId?: number,
    public technologies?: ITechnology[]
  ) {}
}
