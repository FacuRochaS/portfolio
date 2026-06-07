import { Component, inject, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { WindowManagerService } from '../../core/services/window-manager.service';

@Component({
  selector: 'app-boot-console',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="console">
      <div *ngFor="let line of visibleLines">{{ line }}</div>
      <div *ngIf="isGreeting" class="greeting">hola<span class="cursor">_</span></div>
    </div>
  `,
  styles: [`
    .console {
      width: 100%;
      height: 100%;
      background-color: black;
      color: #0f0;
      font-family: 'Courier New', Courier, monospace;
      padding: 20px;
      box-sizing: border-box;
      font-size: 14px;
      overflow: hidden;
    }
    .greeting {
      margin-top: 20px;
      font-size: 18px;
    }
    .cursor {
      animation: blink 1s step-end infinite;
    }
    @keyframes blink {
      50% { opacity: 0; }
    }
  `]
})
export class BootConsoleComponent implements OnInit {
  windowManager = inject(WindowManagerService);

  lines: string[] = [
    'Initializing Boot Sequence...',
    'Loading Kernel...',
    'Mounting Virtual File System... OK',
    'Starting Network Interfaces... OK',
    'Loading User Profile... OK',
    'Starting GUI Modules...'
  ];
  visibleLines: string[] = [];
  isGreeting = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.simulateBoot();
    }
  }

  simulateBoot(i: number = 0) {
    if (i < this.lines.length) {
      this.visibleLines.push(this.lines[i]);
      setTimeout(() => this.simulateBoot(i + 1), 200 + Math.random() * 300);
    } else {
      setTimeout(() => {
        this.visibleLines = [];
        this.isGreeting = true;

        setTimeout(() => {
          this.windowManager.setPhase('desktop');
        }, 1500);
      }, 500);
    }
  }
}
