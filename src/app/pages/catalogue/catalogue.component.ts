import { Component, OnInit, ViewChild, ElementRef, inject, PLATFORM_ID } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import Aos from 'aos';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  pdfSrc = 'assets/catalogue/HALAJI-MENU.pdf';

  @ViewChild('pdfViewer') pdfViewer!: ElementRef;

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) { 
      Aos.init({
        duration: 1000,
        once: true
      });
    }

  }

  onPageChange(pageNumber: number) {
  }
  
}
