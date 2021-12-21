import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IUe } from 'app/shared/model/ue.model';

type EntityResponseType = HttpResponse<IUe>;
type EntityArrayResponseType = HttpResponse<IUe[]>;

@Injectable({ providedIn: 'root' })
export class UeService {
  public resourceUrl = SERVER_API_URL + 'api/ues';

  constructor(protected http: HttpClient) {}

  create(ue: IUe): Observable<EntityResponseType> {
    return this.http.post<IUe>(this.resourceUrl, ue, { observe: 'response' });
  }

  update(ue: IUe): Observable<EntityResponseType> {
    return this.http.put<IUe>(this.resourceUrl, ue, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IUe>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  findBySlug(slug: string): Observable<EntityResponseType> {
    return this.http.get<IUe>(`${this.resourceUrl}/${slug}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IUe[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }


}
