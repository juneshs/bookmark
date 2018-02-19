import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

import {MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';



export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'app-atsearch',
  templateUrl: './atsearch.component.html',
  styleUrls: ['./atsearch.component.css']
})
export class AtsearchComponent {


  txtInput: string;



  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: State[] = [
    {
      name: 'Lemon',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'Lime',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Apple',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    }
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  filterStates(name: string) {

    return this.states.filter(state =>
    state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);

  }



  //For chip
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
// Enter, comma
  separatorKeysCodes = [ COMMA];

  fruits = [

  ];


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  addStatus(event: MatAutocompleteSelectedEvent): void{

   //console.log(event)
   //this.stateCtrl.setValue(event.option.value);

    //this.txtInput = 'ABC';

  }

  onKey(event: any) { // without type info
    console.log(event.target.value);


      if (event.keyCode == 13 && event.target.value.indexOf(':') != -1) {
      this.fruits.push({name: event.target.value});
      event.target.value='';
    }

  }



  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }




}


