import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = 'DefaultServer';
  serverCreated = false;
  servers = ['TestServer', 'DefaultServer'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2250)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server \"" +this.serverName+ "\" was created!";
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
