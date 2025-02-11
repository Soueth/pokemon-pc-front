import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';
import { IPokemonBox } from './interfaces/pokemon-box';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {
	public readonly $pokemonBoxes = new BehaviorSubject<IPokemonBox[]>([]); // Em todas as Boxes
	public readonly $pokemon = new BehaviorSubject<IPokemonBox[]>([]); // Na box atual

	private pokemonSocket$!: WebSocketSubject<any>;

  	constructor(private httpClient: HttpClient) { }

}
