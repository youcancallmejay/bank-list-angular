import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BanksComponent } from './banks/banks.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BanksComponent, BankDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Investment Banks';
}
