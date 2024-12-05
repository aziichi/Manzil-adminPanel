import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { io, Socket } from 'socket.io-client';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-layout',
  standalone: false,
  
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  alertMessage: string = '';

  newEmergency: any = [];

  isSocketConnected: boolean = false; 

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object){

  }

  private socket: Socket | undefined;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log("Connecting");
      this.ioConnect();
      console.log("connected");
    }
  }

  ioConnect(){
    this.isSocketConnected = true;
    this.socket = io('https://shrimp-select-vertically.ngrok-free.app');
    this.socket.on('connect', () => {
      console.log('connected');
    });

    this.socket.on('newEmergency', (data: any) => {
      console.log(data);
      this.newEmergency.push(data);
    });
  }

  removeNotification(index: number) {
    this.newEmergency.splice(index, 1);
  }

  ioDisconnect(){
    this.socket?.disconnect();
    this.isSocketConnected = false;
  }

}
