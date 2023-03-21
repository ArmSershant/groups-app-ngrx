import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  {
    path: 'app-groups',
    component: GroupsComponent,
  },
  {
    path: 'app-addgroup',
    component: AddgroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsRoutingModule {}
