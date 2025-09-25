import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {
    let profile: Profile = {
      email: 'rafaelalvesdecarvalho25@gmail.com',
      name: 'Rafael Alves De Carvalho',
      whatsApp: 'https://wa.me/5561996672005?text=ol%C3%A1%20estou%20no%20seu%20portfolio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
      linkedIn: 'https://www.linkedin.com/in/rafael-alves-de-carvalho'
    }

    return profile;
  }
}
