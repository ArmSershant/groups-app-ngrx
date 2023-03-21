import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups/groups.component';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Groupreducer } from 'src/app/store/group.reducers';
@NgModule({
  declarations: [GroupsComponent, AddgroupComponent],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    FormsModule,
    StoreModule.forFeature('groups', Groupreducer),
  ],
})
export class GroupsModule {}
