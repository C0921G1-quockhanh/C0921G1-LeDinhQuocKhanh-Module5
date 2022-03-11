import { Injectable } from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  dictionaries: Word[] = [
    {
      word: 'hello',
      mean: 'xin chao'
    },
    {
      word: 'computer',
      mean: 'may tinh'
    },
    {
      word: 'image',
      mean: 'buc anh'
    },
    {
      word: 'cat',
      mean: 'con meo'
    },
    {
      word: 'lion',
      mean: 'su tu'
    }
  ];

  constructor() { }

  getAll() {
    return this.dictionaries;
  }

  translate(word: string): string {
    const wordValue = this.dictionaries.find(item => item.word === word);
    // console.log(wordValue);
    return wordValue.mean;
  }
}
