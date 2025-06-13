import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private profileService: ProfileService) { }

  profile?: Profile;

  date: Date = new Date();

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}
