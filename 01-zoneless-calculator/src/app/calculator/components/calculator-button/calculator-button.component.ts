import { booleanAttribute, ChangeDetectionStrategy, Component, ElementRef, HostBinding, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [
  ],
  templateUrl: './calculator-button.component.html',
  styleUrl : './calculator-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class: "w-1/4 border-r border-b border-indigo-400"
  },
  // encapsulation: ViewEncapsulation.None
})
export class CalculatorButtonComponent{

  public onClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');
  
  public isCommand = input(false ,{
    transform: booleanAttribute
  });

  public isDoubleSize = input(false, {
    transform: booleanAttribute
  });

  handleClick() {
    if (!this.contentValue()?.nativeElement) {
      return
    }
    const value = this.contentValue()!.nativeElement.innerText;
    this.onClick.emit(value.trim());
  }
  
  
  @HostBinding('class.w-2/4') get commandStyle(){
    return this.isDoubleSize()
  }
 
  // @HostBinding('class.is-command') get commandStyle(){
  //   return this.isCommand()
  // }
}
