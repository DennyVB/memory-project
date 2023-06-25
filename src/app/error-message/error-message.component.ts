import { Component, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})


export class ErrorMessageComponent {
  constructor(private renderer: Renderer2) { }
  closeErrorMessage() {
    const div = this.renderer.parentNode(this.renderer.selectRootElement('.alert'));
    setTimeout(() => {
      this.renderer.setStyle(div, 'display', 'none');
    }, 600);
  }
}
