import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  @Input() apis: { api: string; aantal: number }[] = [];

  constructor() {}
}
