import {Component, ViewContainerRef} from '@angular/core'

//noinspection TypeScriptCheckImport
import {
  elementVisible,
  computedStyle,
  scrollTo,
  outerHeight,
  outerWidth
} from 'ng2-utils';

@Component({
  selector: 'my-app',
  template: `
    <a id="hello" style="background: #ccc">#hello</a>
    
    <fieldset>
      <legend>DOM functions</legend>
      
      <fieldset id="element-visible"><legend>elementVisible Test</legend>
        <div>elementVisible('#hello', 'body'): {{elementVisible('#hello', 'body') | json}}</div>
      </fieldset>
      
      <fieldset id="computed-style"><legend>computedStyle Test</legend>
        <div>computedStyle('#hello', 'height'): {{computedStyle('#hello', 'height') | json}}</div>
      </fieldset>
      
      <fieldset id="scroll-to"><legend>scrollTo Test</legend>
        <div>scrollTo('#hello', 'body'): {{scrollToResult}}</div>
      </fieldset>
      
      <fieldset id="height-width"><legend>outerHeight/outerWidth Test</legend>
        <div id="outer-height">outerHeight('#hello'): {{outerHeight('#hello')}}</div>
        <div id="outer-width">outerWidth('#hello'): {{outerWidth('#hello')}}</div>
      </fieldset>
      
    </fieldset>
    
    <fieldset>
      <legend>Pipes</legend>
      <fieldset id="html-code">
        <legend>HtmlCodePipe: htmlCode</legend>
        myHtml: {{myHtml}}
        <div id="pie1">myHtml | htmlCode: <pre>{{myHtml | htmlCode}}</pre></div>
        <div id="pie2">myHtml | htmlCode:'include' : <pre>{{myHtml | htmlCode:'include'}}</pre></div>
        <div id="pie3">myHtml | htmlCode:'-include' <pre>{{myHtml | htmlCode:'-include'}}</pre></div>
      </fieldset>
      
      <fieldset id="javascript-code">
        <legend>JavascriptCodePipe: jsCode</legend>
        ngOnInit | jsCode:
        <pre>{{ngOnInit | jsCode}}</pre>
      </fieldset>
      
    </fieldset>
      
    <fieldset>
      <legend>Directives</legend>
      <ng2-utils-1> 1 </ng2-utils-1>
      <ng2-utils-2> 2 </ng2-utils-2>
      <ng2-utils-3> 3 </ng2-utils-3>
      <ng2-utils-4> 4 </ng2-utils-4>
      <ng2-utils-5> 5 </ng2-utils-5>
    </fieldset>
  `
})
export class AppComponent {
  el: HTMLElement;
  resp: any = {};
  elementVisible: any = elementVisible;
  computedStyle: any = computedStyle;
  outerHeight: any = outerHeight;
  outerWidth: any = outerWidth;
  myHtml = '<include>I</include><exclude>E</exclude>';

  scrollToResult: boolean;

  ngOnInit() {
    scrollTo('#hello', 'body');
    this.scrollToResult = true;
  }
}
