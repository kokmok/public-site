export interface IPicture {
  id?: number;
  dataContentType?: string;
  data?: any;
}

export class Picture implements IPicture {
  constructor(public id?: number, public dataContentType?: string, public data?: any) {}
}
