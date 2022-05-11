import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnInit {
  ngOnInit() {}
}
