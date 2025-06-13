import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private profileService: ProfileService) { }

  profile?: Profile;

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}
