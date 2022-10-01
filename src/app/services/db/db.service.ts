import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private http: HttpClient) {}

  getTutos() {
    return this.http.get(
      `${environment.supabaseUrl}/rest/v1/tutos`,
      {
        headers: {
          apikey: environment.supabaseKey,
          Authorization: `Bearer ${environment.supabaseKey}`,
        },
      }
    );
  }
}
