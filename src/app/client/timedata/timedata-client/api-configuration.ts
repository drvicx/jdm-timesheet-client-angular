/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//localhost:9002/api/service-timedata';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
