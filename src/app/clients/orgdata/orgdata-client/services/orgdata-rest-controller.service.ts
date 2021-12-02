/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Orgdata } from '../models/orgdata';

/**
 * Orgdata Rest Controller
 */
@Injectable({
  providedIn: 'root',
})
class OrgdataRestControllerService extends __BaseService {
  //static readonly addOrgdataUsingPOSTPath = '/orgdata/add';
  //static readonly findAllUsingGETPath = '/orgdata/all';
  //static readonly deleteOrgdataUsingDELETEPath = '/orgdata/delete/{orgdataId}';
  //static readonly getOrgdataByIdUsingGETPath = '/orgdata/id/{orgdataId}';
  //static readonly updateOrgdataUsingPUTPath = '/orgdata/update/{orgdataId}';

  static readonly addOrgdataUsingPOSTPath = '/add';
  static readonly findAllUsingGETPath = '/all';
  static readonly deleteOrgdataUsingDELETEPath = '/delete/{orgdataId}';
  static readonly getOrgdataByIdUsingGETPath = '/id/{orgdataId}';
  static readonly updateOrgdataUsingPUTPath = '/update/{orgdataId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * addOrgdata
   * @param theOrgdata theOrgdata
   * @return OK
   */
  addOrgdataUsingPOSTResponse(theOrgdata: Orgdata): __Observable<__StrictHttpResponse<Orgdata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = theOrgdata;
    let req = new HttpRequest<any>(
      'POST',
      //this.rootUrl + `/orgdata/add`,
      this.rootUrl + `/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Orgdata>;
      })
    );
  }
  /**
   * addOrgdata
   * @param theOrgdata theOrgdata
   * @return OK
   */
  addOrgdataUsingPOST(theOrgdata: Orgdata): __Observable<Orgdata> {
    return this.addOrgdataUsingPOSTResponse(theOrgdata).pipe(
      __map(_r => _r.body as Orgdata)
    );
  }

  /**
   * findAll
   * @return OK
   */
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Orgdata>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      //this.rootUrl + `/orgdata/all`,
      this.rootUrl + `/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Orgdata>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET(): __Observable<Array<Orgdata>> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Orgdata>)
    );
  }

  /**
   * deleteOrgdata
   * @param orgdataId orgdataId
   * @return OK
   */
  deleteOrgdataUsingDELETEResponse(orgdataId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      //this.rootUrl + `/orgdata/delete/${encodeURIComponent(String(orgdataId))}`,
      this.rootUrl + `/delete/${encodeURIComponent(String(orgdataId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * deleteOrgdata
   * @param orgdataId orgdataId
   * @return OK
   */
  deleteOrgdataUsingDELETE(orgdataId: number): __Observable<string> {
    return this.deleteOrgdataUsingDELETEResponse(orgdataId).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * getOrgdataById
   * @param orgdataId orgdataId
   * @return OK
   */
  getOrgdataByIdUsingGETResponse(orgdataId: number): __Observable<__StrictHttpResponse<Orgdata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      //this.rootUrl + `/orgdata/id/${encodeURIComponent(String(orgdataId))}`,
      this.rootUrl + `/id/${encodeURIComponent(String(orgdataId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Orgdata>;
      })
    );
  }
  /**
   * getOrgdataById
   * @param orgdataId orgdataId
   * @return OK
   */
  getOrgdataByIdUsingGET(orgdataId: number): __Observable<Orgdata> {
    return this.getOrgdataByIdUsingGETResponse(orgdataId).pipe(
      __map(_r => _r.body as Orgdata)
    );
  }

  /**
   * updateOrgdata
   * @param params The `OrgdataRestControllerService.UpdateOrgdataUsingPUTParams` containing the following parameters:
   *
   * - `theOrgdata`: theOrgdata
   *
   * - `orgdataId`: orgdataId
   *
   * @return OK
   */
  updateOrgdataUsingPUTResponse(params: OrgdataRestControllerService.UpdateOrgdataUsingPUTParams): __Observable<__StrictHttpResponse<Orgdata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.theOrgdata;

    let req = new HttpRequest<any>(
      'PUT',
      //this.rootUrl + `/orgdata/update/${encodeURIComponent(String(params.orgdataId))}`,
      this.rootUrl + `/update/${encodeURIComponent(String(params.orgdataId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Orgdata>;
      })
    );
  }
  /**
   * updateOrgdata
   * @param params The `OrgdataRestControllerService.UpdateOrgdataUsingPUTParams` containing the following parameters:
   *
   * - `theOrgdata`: theOrgdata
   *
   * - `orgdataId`: orgdataId
   *
   * @return OK
   */
  updateOrgdataUsingPUT(params: OrgdataRestControllerService.UpdateOrgdataUsingPUTParams): __Observable<Orgdata> {
    return this.updateOrgdataUsingPUTResponse(params).pipe(
      __map(_r => _r.body as Orgdata)
    );
  }
}

module OrgdataRestControllerService {

  /**
   * Parameters for updateOrgdataUsingPUT
   */
  export interface UpdateOrgdataUsingPUTParams {

    /**
     * theOrgdata
     */
    theOrgdata: Orgdata;

    /**
     * orgdataId
     */
    orgdataId: number;
  }
}

export { OrgdataRestControllerService }
