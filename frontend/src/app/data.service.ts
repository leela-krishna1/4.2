import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Players } from './players';

@Injectable({
  providedIn: 'root'
})
export class DataService {
url : string = 'http://localhost:3000/Players';
  constructor(private http: HttpClient) { }

getAllPlayers():Observable<Players[]>{
  return this.http.get<Players[]>(this.url);
}


getPlayerById(id:string):Observable<Players>{
  return this.http.get<Players>(this.url+'/'+id);
}


deletePlayerById(id:string):Observable<Players>{
  return this.http.delete<Players>(this.url+'/'+id);
}


updatePlayerById(player:Players):Observable<Players>{
  return this.http.put<Players>(this.url+'/'+player._id,player);
}

createPlayer(player:Players):Observable<Players> {

  return this.http.post<Players>(this.url,player);
}


}
