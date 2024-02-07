import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardTitle: string = '';
  @Input() cardValue: number | string = 0;
  @Input() iconName?: string = '';
}
