import { IUe } from 'app/shared/model/ue.model';

export interface ITechnology {
  id?: number;
  title?: string;
  link?: string;
  pictureId?: number;
  ues?: IUe[];
}

export class Technology implements ITechnology {
  constructor(public id?: number, public title?: string, public link?: string, public pictureId?: number, public ues?: IUe[]) {}
}
