import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  private hubConnection!: HubConnection;
  public claims: any[] = [];
  public newClaim = { title: '', description: '' };

  ngOnInit() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:5000/notificationHub')
      .build();

    this.hubConnection.on('ClaimUpdated', (claim: any) => {
      this.claims.unshift(claim);
    });

    this.hubConnection.start()
      .then(() => console.log('SignalR Connected'))
      .catch(err => console.error('SignalR Error:', err));
  }

  createClaim() {
    // Call backend API
    console.log('Creating claim:', this.newClaim);
    this.newClaim = { title: '', description: '' };
  }
                              }
