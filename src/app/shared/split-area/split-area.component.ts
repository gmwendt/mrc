import {
  Component,
  HostListener,
  ElementRef,
  Input,
  Inject,
  forwardRef,
  Injectable,
  Renderer,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewEncapsulation,
  OnDestroy
} from '@angular/core';

//import { Subscription } from 'rxjs/Subscription';

// this component should be generic

//import { PortalComponent } from '../../portal/portal.component';

//import { RulerService, IRulerService, } from '../../core/ruler.service';

@Component({
  selector: 'split-area',
  templateUrl: './split-area.component.html',
  styleUrls: ['./split-area.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SplitAreaComponent implements AfterViewInit, OnDestroy {

  @Input() collapsedWidth: string = '16px';
  @Input() rightpaneWidth: string = '100%';
  @Input() leftpaneWidth: string;

	public move_cursor: string;
	
  constructor(private m_target: ElementRef, private m_detector: ChangeDetectorRef, private m_renderer: Renderer) {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  
}