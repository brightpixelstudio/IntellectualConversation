import { Component } from '@angular/core';
import { Content } from '../../sections/content/content';
import { Nextdoorconnect } from '../../sections/nextdoorconnect/nextdoorconnect';
import { Contact } from '../../sections/contact/contact';

@Component({
  selector: 'home',
  imports: [Content, Nextdoorconnect, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
