import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prosettings',
  template: `
   <div class="panel panel-info" style="margin: 1em;">
                    <div class="panel-heading">
                        <h3 class="panel-title">Notification</h3>
                    </div>
                    <div class="panel-body">
                        <div class="label label-success">allowed</div>
                    </div>
                </div>
                <div class="panel panel-info" style="margin: 1em;">
                    <div class="panel-heading">
                        <h3 class="panel-title">Newsletter</h3>
                    </div>
                    <div class="panel-body">
                        <div class="badge">Monthly</div>
                    </div>
                </div>
  `,
  styles: []
})
export class ProsettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
