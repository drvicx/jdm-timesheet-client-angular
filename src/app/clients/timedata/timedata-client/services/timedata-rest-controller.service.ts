/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Timedata } from '../models/timedata';

/**
 * Timedata Rest Controller
 */
@Injectable({
  providedIn: 'root',
})
class TimedataRestControllerService extends __BaseService {
  static readonly addTimedataUsingPOSTPath = '/timedata/add';
  static readonly findAllUsingGETPath = '/timedata/all';
  static readonly getTimedataByDateUsingGETPath = '/timedata/date/{date}';
  static readonly deleteTimedataUsingDELETEPath = '/timedata/delete/{timedataId}';
  static readonly getTimedataByIdUsingGETPath = '/timedata/id/{timedataId}';
  static readonly updateTimedataUsingPUTPath = '/timedata/update/{timedataId}';
  static readonly getTimedataByUserIdAndDateUsingGETPath = '/timedata/userdate/{userId}/{date}';
  static readonly getTimedataByUserIdUsingGETPath = '/timedata/userid/{userId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * addTimedata
   * @param theTimedata theTimedata
   * @return OK
   */
  addTimedataUsingPOSTResponse(theTimedata: Timedata): __Observable<__StrictHttpResponse<Timedata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = theTimedata;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/timedata/add`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Timedata>;
      })
    );
  }
  /**
   * addTimedata
   * @param theTimedata theTimedata
   * @return OK
   */
  addTimedataUsingPOST(theTimedata: Timedata): __Observable<Timedata> {
    return this.addTimedataUsingPOSTResponse(theTimedata).pipe(
      __map(_r => _r.body as Timedata)
    );
  }

  /**
   * findAll
   * @return OK
   */
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Timedata>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/timedata/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Timedata>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET(): __Observable<Array<Timedata>> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Timedata>)
    );
  }

  /**
   * getTimedataByDate
   * @param date date
   * @return OK
   */
  getTimedataByDateUsingGETResponse(date: string): __Observable<__StrictHttpResponse<Array<Timedata>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/timedata/date/${encodeURIComponent(String(date))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Timedata>>;
      })
    );
  }
  /**
   * getTimedataByDate
   * @param date date
   * @return OK
   */
  getTimedataByDateUsingGET(date: string): __Observable<Array<Timedata>> {
    return this.getTimedataByDateUsingGETResponse(date).pipe(
      __map(_r => _r.body as Array<Timedata>)
    );
  }

  /**
   * deleteTimedata
   * @param timedataId timedataId
   * @return OK
   */
  deleteTimedataUsingDELETEResponse(timedataId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/timedata/delete/${encodeURIComponent(String(timedataId))}`,
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
   * deleteTimedata
   * @param timedataId timedataId
   * @return OK
   */
  deleteTimedataUsingDELETE(timedataId: number): __Observable<string> {
    return this.deleteTimedataUsingDELETEResponse(timedataId).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * getTimedataById
   * @param timedataId timedataId
   * @return OK
   */
  getTimedataByIdUsingGETResponse(timedataId: number): __Observable<__StrictHttpResponse<Timedata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/timedata/id/${encodeURIComponent(String(timedataId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Timedata>;
      })
    );
  }
  /**
   * getTimedataById
   * @param timedataId timedataId
   * @return OK
   */
  getTimedataByIdUsingGET(timedataId: number): __Observable<Timedata> {
    return this.getTimedataByIdUsingGETResponse(timedataId).pipe(
      __map(_r => _r.body as Timedata)
    );
  }

  /**
   * updateTimedata
   * @param params The `TimedataRestControllerService.UpdateTimedataUsingPUTParams` containing the following parameters:
   *
   * - `timedataId`: timedataId
   *
   * - `theTimedata`: theTimedata
   *
   * @return OK
   */
  updateTimedataUsingPUTResponse(params: TimedataRestControllerService.UpdateTimedataUsingPUTParams): __Observable<__StrictHttpResponse<Timedata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.theTimedata;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/timedata/update/${encodeURIComponent(String(params.timedataId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Timedata>;
      })
    );
  }
  /**
   * updateTimedata
   * @param params The `TimedataRestControllerService.UpdateTimedataUsingPUTParams` containing the following parameters:
   *
   * - `timedataId`: timedataId
   *
   * - `theTimedata`: theTimedata
   *
   * @return OK
   */
  updateTimedataUsingPUT(params: TimedataRestControllerService.UpdateTimedataUsingPUTParams): __Observable<Timedata> {
    return this.updateTimedataUsingPUTResponse(params).pipe(
      __map(_r => _r.body as Timedata)
    );
  }

  /**
   * getTimedataByUserIdAndDate
   * @param params The `TimedataRestControllerService.GetTimedataByUserIdAndDateUsingGETParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `date`: date
   *
   * @return OK
   */
  getTimedataByUserIdAndDateUsingGETResponse(params: TimedataRestControllerService.GetTimedataByUserIdAndDateUsingGETParams): __Observable<__StrictHttpResponse<Timedata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/timedata/userdate/${encodeURIComponent(String(params.userId))}/${encodeURIComponent(String(params.date))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Timedata>;
      })
    );
  }
  /**
   * getTimedataByUserIdAndDate
   * @param params The `TimedataRestControllerService.GetTimedataByUserIdAndDateUsingGETParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `date`: date
   *
   * @return OK
   */
  getTimedataByUserIdAndDateUsingGET(params: TimedataRestControllerService.GetTimedataByUserIdAndDateUsingGETParams): __Observable<Timedata> {
    return this.getTimedataByUserIdAndDateUsingGETResponse(params).pipe(
      __map(_r => _r.body as Timedata)
    );
  }

  /**
   * getTimedataByUserId
   * @param userId userId
   * @return OK
   */
  getTimedataByUserIdUsingGETResponse(userId: number): __Observable<__StrictHttpResponse<Array<Timedata>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/timedata/userid/${encodeURIComponent(String(userId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Timedata>>;
      })
    );
  }
  /**
   * getTimedataByUserId
   * @param userId userId
   * @return OK
   */
  getTimedataByUserIdUsingGET(userId: number): __Observable<Array<Timedata>> {
    return this.getTimedataByUserIdUsingGETResponse(userId).pipe(
      __map(_r => _r.body as Array<Timedata>)
    );
  }
}

module TimedataRestControllerService {

  /**
   * Parameters for updateTimedataUsingPUT
   */
  export interface UpdateTimedataUsingPUTParams {

    /**
     * timedataId
     */
    timedataId: number;

    /**
     * theTimedata
     */
    theTimedata: Timedata;
  }

  /**
   * Parameters for getTimedataByUserIdAndDateUsingGET
   */
  export interface GetTimedataByUserIdAndDateUsingGETParams {

    /**
     * userId
     */
    userId: number;

    /**
     * date
     */
    date: string;
  }
}

export { TimedataRestControllerService }
