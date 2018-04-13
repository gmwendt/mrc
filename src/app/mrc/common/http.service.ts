import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

export class MrcDataBaseHeaders {
	public static NFsentrada: string = 'NFsentrada';
}

@Injectable()
export class HttpService {
	
	private _endpoint: string = 'http://localhost:3004/';
	
	constructor(private _http: HttpClient) {
		
	}
	
	get endpoint(): string {
		return this._endpoint;
	}
	
	set endpoint(value: string) {
		this._endpoint = value;
	}
	
	
	addInstance(jsonBody: string, childOf: string): Observable<string> {
		var options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'Authorization': '12345'
			})
		}
		return this._http.post<string>(this.endpoint + childOf, jsonBody, options)
			.pipe(
				catchError(this.handleError('addHero', jsonBody))
			);
	}
	
	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an ErrorObservable with a user-facing error message
		return new ErrorObservable(
			'Something bad happened; please try again later.');
	}
}