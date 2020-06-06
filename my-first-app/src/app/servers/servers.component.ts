import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  showSecret = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  serverCreated = false;
  servers =['TestServer','TestServer 2'];
  logs = [];
  constructor() {
    setTimeout(( ) => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created';
    this.servers.push(this.serverName);

  }
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;

  }
  onToggleClick() {
    this.showSecret = !this.showSecret;
    //this.logs.push(this.logs.length + 1);
    this.logs.push(new Date);
    if(this.logs.length > 4){

    }
  }
}

