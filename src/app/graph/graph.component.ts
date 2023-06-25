import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnChanges {
  // @ts-ignore
  @Input() apis: { api: string, aantal: number }[];
  // @ts-ignore
  maxAantal: number;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['apis'] && this.apis) {
      this.maxAantal = Math.max(...this.apis.map(item => item.aantal));
    }
  }

  getBarHeight(aantal: number): string {
    const maxHeight = 100; // Set a maximum height for the bars
    const maxAantal = Math.max(...this.apis.map(item => item.aantal));
    const percentage = (aantal / maxAantal) * maxHeight;
    return `${percentage * 3}px`;
  }
}
