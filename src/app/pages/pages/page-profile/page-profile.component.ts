import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
