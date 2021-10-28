import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { RouterService } from '../services/router.service';
import { arrayModle } from '../../../src/types/interfases'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  langth: number = 0
  myNumbers: [] = []
  localHistoryData: arrayModle[] = []

  localdata = {
    isEqual: null,
    numberOfEqual: null
  }



  upForm = this.form.group({

    numbers: this.form.array([
      new FormGroup({ num: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]) }),
      new FormGroup({ num: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]) }),
      new FormGroup({ num: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]) }),
      new FormGroup({ num: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]) }),
      new FormGroup({ num: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]) })
    ])
  });


  constructor(private form: FormBuilder, private ruoter: RouterService) { }

  ngOnInit(): void { 
    this.getHistory()
  }

  get numbers() {
    return this.upForm.controls["numbers"] as FormArray;
  }

  addNumber() {
    const numbersForm = new FormGroup({
      num: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    });
    this.numbers.push(numbersForm);
  }

  checkLangth(): number {
    let langth = this.numbers.length
    return langth
  }

  check(): any {
    let langth = this.numbers.length
    let myNumbers: number[] = []
    for (let i = 0; i < langth; i++) {
      let convert = parseInt(this.upForm.get(['numbers', i, 'num'])?.value)
      myNumbers.push(convert)
    } this.ruoter.addArray(myNumbers).subscribe((data: any) => {
      
      this.localdata.isEqual = data.isEqual
      this.localdata.numberOfEqual = data.numberOfEqual
      this.getHistory()
    })
  }

  getHistory() {
    this.ruoter.getArrays().subscribe((data: arrayModle[]) => {
      this.localHistoryData = data
    })
  }
}


