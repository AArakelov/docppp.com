import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'doc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    '[attr.class]': 'customClass',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() public customClass: string = '';
}
