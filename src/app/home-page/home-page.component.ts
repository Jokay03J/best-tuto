import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbService } from '../services/db/db.service';
import { Tags, Tuto } from '../types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomePageComponent implements OnInit {
  tutos: any;
  loading = true;
  constructor(private db: DbService, private cdr: ChangeDetectorRef) { }

  getTutos() {
    this.db.getTutos().subscribe((data: any) => {
      this.tutos = data;
      this.loading = false;
      this.cdr.markForCheck();
    });
  }

  ngOnInit(): void {
    this.getTutos();
  }


}
