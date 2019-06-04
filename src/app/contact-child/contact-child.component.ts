import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-child',
  templateUrl: './contact-child.component.html',
  styleUrls: ['./contact-child.component.scss']
})
export class ContactChildComponent implements OnInit {

  @Input() contactName: string;

  constructor() { }

  ngOnInit() {
  }

}
