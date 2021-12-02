/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';

/**
 * User Rest Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserRestControllerService extends __BaseService {
  //static readonly addUserUsingPOSTPath = '/users/add';
  //static readonly findAllUsingGETPath = '/users/all';
  //static readonly deleteUserUsingDELETEPath = '/users/delete/{userId}';
  //static readonly getUserByIdUsingGETPath = '/users/id/{userId}';
  //static readonly getUserByPersonalNumberUsingGETPath = '/users/num/{personalNumber}';
  //static readonly updateUserUsingPUTPath = '/users/update/{userId}';

  static readonly addUserUsingPOSTPath = '/add';
  static readonly findAllUsingGETPath = '/all';
  static readonly deleteUserUsingDELETEPath = '/delete/{userId}';
  static readonly getUserByIdUsingGETPath = '/id/{userId}';
  static readonly getUserByPersonalNumberUsingGETPath = '/num/{personalNumber}';
  static readonly updateUserUsingPUTPath = '/update/{userId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * addUser
   * @param theUser theUser
   * @return OK
   */
  addUserUsingPOSTResponse(theUser: User): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = theUser;
    let req = new HttpRequest<any>(
      'POST',
      //this.rootUrl + `/users/add`,
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
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * addUser
   * @param theUser theUser
   * @return OK
   */
  addUserUsingPOST(theUser: User): __Observable<User> {
    return this.addUserUsingPOSTResponse(theUser).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * findAll
   * @return OK
   */
  findAllUsingGETResponse(): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      //this.rootUrl + `/users/all`,
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
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * findAll
   * @return OK
   */
  findAllUsingGET(): __Observable<Array<User>> {
    return this.findAllUsingGETResponse().pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * deleteUser
   * @param userId userId
   * @return OK
   */
  deleteUserUsingDELETEResponse(userId: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      //this.rootUrl + `/users/delete/${encodeURIComponent(String(userId))}`,
      this.rootUrl + `/delete/${encodeURIComponent(String(userId))}`,
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
   * deleteUser
   * @param userId userId
   * @return OK
   */
  deleteUserUsingDELETE(userId: number): __Observable<string> {
    return this.deleteUserUsingDELETEResponse(userId).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * getUserById
   * @param userId userId
   * @return OK
   */
  getUserByIdUsingGETResponse(userId: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      //this.rootUrl + `/users/id/${encodeURIComponent(String(userId))}`,
      this.rootUrl + `/id/${encodeURIComponent(String(userId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * getUserById
   * @param userId userId
   * @return OK
   */
  getUserByIdUsingGET(userId: number): __Observable<User> {
    return this.getUserByIdUsingGETResponse(userId).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * getUserByPersonalNumber
   * @param personalNumber personalNumber
   * @return OK
   */
  getUserByPersonalNumberUsingGETResponse(personalNumber: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      //this.rootUrl + `/users/num/${encodeURIComponent(String(personalNumber))}`,
      this.rootUrl + `/num/${encodeURIComponent(String(personalNumber))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * getUserByPersonalNumber
   * @param personalNumber personalNumber
   * @return OK
   */
  getUserByPersonalNumberUsingGET(personalNumber: number): __Observable<User> {
    return this.getUserByPersonalNumberUsingGETResponse(personalNumber).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * updateUser
   * @param params The `UserRestControllerService.UpdateUserUsingPUTParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `theUser`: theUser
   *
   * @return OK
   */
  updateUserUsingPUTResponse(params: UserRestControllerService.UpdateUserUsingPUTParams): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.theUser;
    let req = new HttpRequest<any>(
      'PUT',
      //this.rootUrl + `/users/update/${encodeURIComponent(String(params.userId))}`,
      this.rootUrl + `/update/${encodeURIComponent(String(params.userId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * updateUser
   * @param params The `UserRestControllerService.UpdateUserUsingPUTParams` containing the following parameters:
   *
   * - `userId`: userId
   *
   * - `theUser`: theUser
   *
   * @return OK
   */
  updateUserUsingPUT(params: UserRestControllerService.UpdateUserUsingPUTParams): __Observable<User> {
    return this.updateUserUsingPUTResponse(params).pipe(
      __map(_r => _r.body as User)
    );
  }
}

module UserRestControllerService {

  /**
   * Parameters for updateUserUsingPUT
   */
  export interface UpdateUserUsingPUTParams {

    /**
     * userId
     */
    userId: number;

    /**
     * theUser
     */
    theUser: User;
  }
}

export { UserRestControllerService }
