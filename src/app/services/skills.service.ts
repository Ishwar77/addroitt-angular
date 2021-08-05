import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  currentArticle: any;

  constructor(private http: HttpClient) { }

  getData(url){
    return this.http.get('`${API_URL}/${url}&apikey=${API_KEY}`');
  }
}
