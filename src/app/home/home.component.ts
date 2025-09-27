import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private profileService: ProfileService) { }

  profile?: Profile;

  TextSeeMoreSeeLess: string = 'Ler mais';
  SeeMore: boolean = false;
  serviceNotAvailableMessage: boolean = false;

  ngOnInit() {
    this.profile = this.profileService.getProfile();

    AOS.init();
  }

  toggleText() {
    this.SeeMore = !this.SeeMore;

    this.TextSeeMoreSeeLess = this.SeeMore ? 'Ler menos' : 'Ler mais';
  }

  serviceNotAvailable() {
    this.serviceNotAvailableMessage = true;

    setTimeout(() => {
      this.serviceNotAvailableMessage = false;
    }, 5000);
  }

}
