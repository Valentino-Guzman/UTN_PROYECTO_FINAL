import { Component, ViewChild } from '@angular/core';
import { SvgChecklistComponent } from "../../svg/inicio/svg-checklist/svg-checklist.component";
import { CdkScrollable, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [SvgChecklistComponent, ScrollingModule, CommonModule],
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.scss'
})
export class DescripcionComponent {
  isInView: boolean = false

  @ViewChild(CdkScrollable) scrollable!: CdkScrollable;
}
