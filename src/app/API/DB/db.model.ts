import {ApiChampion, ApiItem} from '../SERVER/api.model';
import {RunePage} from '../../champion-details/components/section-runes/runes.model';

export interface Build {
  _id?: string;
  championName?: string;
  buildName: string;
  items: Array<ApiItem>;
}
export interface Note {
  _id?: string;
  championName?: string;
  title: string;
  note: string;
}
export interface UserChampion {
  _id: string;
  name: string;
  notes: Array<Note>;
  builds: Array<Build>;
  runes: Array<RunePage>;
}
export interface ChampionSources {
  ApiChamp: ApiChampion;
  DbChamp: UserChampion | Object;
  apiRunes: any;
}
