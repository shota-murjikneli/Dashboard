import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'User Management Dashboard';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.initializeDefaultAdmin();
    if (!this.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
