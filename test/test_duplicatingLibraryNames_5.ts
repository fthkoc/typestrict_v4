import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title: string = 'title';
  subtitle: string = 'subtitle';

  constructor() { }

  /**
   * 
   * @param left 
   * @param right 
   * @returns number 
   */
  sum(left: number, right: number): number {
    return left + right;
  }


  printToConsole(message) {
    const debug = 'DEBUG';
    const SEPERATOR = '::';
    var methodName = 'printToConsole';
    console.log(debug + SEPERATOR + methodName + SEPERATOR + message);
  }

}
