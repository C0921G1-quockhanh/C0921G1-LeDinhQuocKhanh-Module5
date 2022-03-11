import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {Word} from "../../model/word";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  dictionaries: Word[];
  mean: string = '';

  constructor(
    private dictionaryService: DictionaryService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.dictionaries = this.dictionaryService.getAll();
  }

  getMean(word: string) {
    // console.log(word);
    this.mean = this.dictionaryService.translate(word);
  }

}
