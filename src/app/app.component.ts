import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: { email: string, role: string, name: string } =
    { email: "user@email.com", role: "admin", name: "Lucas" }
  userAge: number = 26;
  title = 'curso-angular';
}
