import { ChangeDetectionStrategy, Component, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [
    CalculatorButtonComponent
  ],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // styles: ` .is-command{
  //   @apply bg-indigo-700 bg-opacity-20
  // }
  // `,
  host:{
    '(document:keyup)': 'handleKeyboardEvent($event)'
  }
})

export class CalculatorComponent {

  public calculatorButtons =viewChildren(CalculatorButtonComponent);

  handleClick(key: string) {
    console.log(key);
  }

  // @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    
    
    
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      '*': 'X',
      '/': '÷',
      Enter: '=', 
    };
    const key = event.key
    const keyValue = keyEquivalents[key] ?? key;
    this.handleClick(keyValue)

    this.calculatorButtons().forEach(button => {
      button.keyBoardPressedStyle(keyValue);
    })
  }

}
