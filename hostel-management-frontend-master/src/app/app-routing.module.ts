import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './components/email/email.component';
import { AcceptedAdminRequestComponent } from './pages/admin/accepted-admin-request/accepted-admin-request.component';
import { CompletedAdminRequestComponent } from './pages/admin/completed-admin-request/completed-admin-request.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PendingAdminRequestComponent } from './pages/admin/pending-admin-request/pending-admin-request.component';
import { RejectedAdminRequestComponent } from './pages/admin/rejected-admin-request/rejected-admin-request.component';
import { SetLaundryPricesComponent } from './pages/admin/set-laundry-prices/set-laundry-prices.component';
import { UpdateAdminRequestComponent } from './pages/admin/update-admin-request/update-admin-request.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AcceptedRequestComponent } from './pages/user/laundry/accepted-request/accepted-request.component';
import { CompletedRequestComponent } from './pages/user/laundry/completed-request/completed-request.component';
import { NewRequestComponent } from './pages/user/laundry/new-request/new-request.component';
import { PendingRequestComponent } from './pages/user/laundry/pending-request/pending-request.component';
import { RejectedRequestComponent } from './pages/user/laundry/rejected-request/rejected-request.component';
import { UpdateRequestComponent } from './pages/user/laundry/update-request/update-request.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { UserGuard } from './service/user.guard';
import {WelcomeComponent} from './pages/admin/welcome/welcome.component';
import { AddStudentComponent } from './pages/admin/add-student/add-student.component';
import { ViewStudentComponent } from './pages/admin/view-student/view-student.component';
import { DeleteStudentComponent } from './pages/admin/delete-student/delete-student.component';
import { ViewAllStudentComponent } from './pages/admin/view-all-student/view-all-student.component';
import { FeesComponent } from './pages/admin/fees/fees.component';
import { ViewfeesComponent } from './pages/admin/viewfees/viewfees.component';
import { SetfeesComponent } from './pages/admin/setfees/setfees.component';
import { UpdatefeesComponent } from './pages/admin/updatefees/updatefees.component';
import { RoomsComponent } from './pages/admin/rooms/rooms.component';
import { CalculatefeesComponent } from './pages/admin/calculatefees/calculatefees.component';
import { CountofroomsComponent } from './pages/admin/countofrooms/countofrooms.component';
import { CountoffreeroomsComponent } from './pages/admin/countoffreerooms/countoffreerooms.component';
import { AssignroomComponent } from './pages/admin/assignroom/assignroom.component';
import { InitializeroomComponent } from './pages/admin/initializeroom/initializeroom.component';
import { UpdateroomComponent } from './pages/admin/updateroom/updateroom.component';
import { VacateroomComponent } from './pages/admin/vacateroom/vacateroom.component';
import { IsoccupiedComponent } from './pages/admin/isoccupied/isoccupied.component';
import { GetroomComponent } from './pages/admin/getroom/getroom.component';
import { welcomeComponent } from 'src/app/pages/user/welcome/welcome.component';
import { InformationComponent } from './pages/user/information/information.component';
import { ShowfeesComponent } from './pages/user/showfees/showfees.component';
import { RoomComponent } from './pages/user/room/room.component';
import {SportshomeComponent} from "./pages/sportshome/sportshome.component";
import {SportudashComponent} from "./pages/sportudash/sportudash.component";
import {SportsheaderComponent} from "./pages/sportsheader/sportsheader.component";
import {SportsidenavComponent} from "./pages/sportsidenav/sportsidenav.component";
import {SportuformComponent} from "./pages/sportuform/sportuform.component";
import {SportgrantComponent} from "./pages/sportgrant/sportgrant.component";
import {SportadashboardComponent} from "./pages/sportadashboard/sportadashboard.component";
import {AddeqformComponent} from "./pages/addeqform/addeqform.component";
import {SportequpdateComponent} from "./pages/sportequpdate/sportequpdate.component";
import {ReqgranttabComponent} from "./pages/reqgranttab/reqgranttab.component";
import { LaundryhomeComponent } from './pages/admin/laundryhome/laundryhome.component';
import { StudentinfoComponent } from './pages/admin/studentinfo/studentinfo.component';
import { LaundryUserHomeComponent } from './pages/user/laundry/laundry-user-home/laundry-user-home.component';
import { SportsUserHomeComponent } from './pages/user/sports-user-home/sports-user-home.component';
import { BillinghomeComponent } from './pages/admin/billinghome/billinghome.component';
import { RoomshomeComponent } from './pages/admin/roomshome/roomshome.component';

//Array
const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"laundryhome",
    component:LaundryhomeComponent,
    pathMatch:"full"
  },
  {
    path:"laundryUserHome",
    component:LaundryUserHomeComponent,
    pathMatch:"full"
  },
  {
    path:'set-laundry-prices',
    component:SetLaundryPricesComponent,
    pathMatch:"full"
  },
  {
    path:'pending-admin-request',
    component:PendingAdminRequestComponent,
    pathMatch:"full"
  },
  {
    path:'accepted-admin-request',
    component:AcceptedAdminRequestComponent,
    pathMatch:"full"
  },
  {
    path:'rejected-admin-request',
    component:RejectedAdminRequestComponent,
    pathMatch:"full"
  },
  {
    path:'completed-admin-request',
    component:CompletedAdminRequestComponent,
    pathMatch:"full"
  },
  {
    path:'update-admin',
    component:UpdateAdminRequestComponent,
    pathMatch:"full"
  },
  {
    path:'new-request',
    component:NewRequestComponent,
    pathMatch:"full"
  },
  {
    path:'pending-request',
    component:PendingRequestComponent,
    pathMatch:"full"
  },
  {
    path:'accepted-request',
    component:AcceptedRequestComponent,
    pathMatch:"full"
  },
  {
    path:'rejected-request',
    component:RejectedRequestComponent,
    pathMatch:"full"
  },
  {
    path:'completed-request',
    component:CompletedRequestComponent,
    pathMatch:"full"
  },
  {
    path:'update',
    component:UpdateRequestComponent,
    pathMatch:"full"
  },
  {
    path:"sportshome",
    component:SportshomeComponent,
    pathMatch:"full"
  },
  {
    path:"sportsUserHome",
    component:SportsUserHomeComponent,
    pathMatch:"full"
  },
  {
    path:"studentinfo",
    component:StudentinfoComponent,
    pathMatch:"full"
  },
  {
    path:"sportudash",
    component:SportudashComponent,
    pathMatch:"full"
  },
  {
    path:"sportsheader",
    component:SportsheaderComponent,
    pathMatch:"full"
  },
  {
    path:"sportadashboard",
    component:SportadashboardComponent,
    pathMatch:"full"
  },
  {
    path:"addeqform",
    component:AddeqformComponent,
    pathMatch:"full"
  },
  {
    path:"sportequpdate",
    component:SportequpdateComponent,
    pathMatch:"full"
  },
  {
    path:"reqgranttab",
    component:ReqgranttabComponent,
    pathMatch:"full"
  },
  {
    path:"sportgrant",
    component:SportgrantComponent,
    pathMatch:"full"
  },
  {
    path:"sportuform",
    component:SportuformComponent,
    pathMatch:"full"
  },
  {
    path:"sportssidenav",
    component:SportsidenavComponent,
    pathMatch:"full"
  },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"sendemail",
    component:EmailComponent,
    pathMatch:"full"
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
    pathMatch:"full"
  },
  {
    path: 'view-student',
    component: ViewStudentComponent,
    pathMatch:"full"
  },
  {
    path: 'delete-student',
    component: DeleteStudentComponent,
    pathMatch:"full"
  },
  {
    path:'view-all-student',
    component:ViewAllStudentComponent,
    pathMatch:"full"
  },
  {
    path:'showfees',
    component:ShowfeesComponent,
    pathMatch:"full"
  },
  {
    path:'room',
    component:RoomComponent,
    pathMatch:"full"
  },
  {
    path:'information',
    component:InformationComponent,
    pathMatch:"full"
  },
  {
    path:'billinghome',
    component:BillinghomeComponent,
    pathMatch:"full"
  },
  {
    path:'viewfees',
    component:ViewfeesComponent,
    pathMatch:"full"
  },
  {
    path:'setfees',
    component:SetfeesComponent,
    pathMatch:"full"
  },
  {
    path:'updatefees',
    component:UpdatefeesComponent,
    pathMatch:"full"
  },
  {
    path:'calculatefees',
    component:CalculatefeesComponent,
    pathMatch:"full"
  },
  {
    path:'roomshome',
    component:RoomshomeComponent,
    pathMatch:"full"
  },
  {
    path:'countofrooms',
    component:CountofroomsComponent,
    pathMatch:"full"
    },
    {
      path:'countoffreerooms',
      component:CountoffreeroomsComponent,
      pathMatch:"full"
    },
    {
      path:'assignroom',
      component:AssignroomComponent,
      pathMatch:"full"
    },
    {
      path:'getroom',
      component:GetroomComponent,
      pathMatch:"full"
    },
    {
      path:'initializeroom',
      component:InitializeroomComponent,
      pathMatch:"full"
    },
    {
      path:'vacateroom',
      component:VacateroomComponent,
      pathMatch:"full"
    },
    {
      path:'isoccupied',
      component:IsoccupiedComponent,
      pathMatch:"full"
    },
  {
    path:"user-dashboard",
    component:UserDashboardComponent,
    canActivate: [UserGuard],
    children:[
      {
        path:'',
        component: welcomeComponent,
      },
      {
        path: 'welcome',
        component:  welcomeComponent,
      },      
    ]
  },
    {
      path:"admin-dashboard",
      component:DashboardComponent,
      canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
        {
          path:'rooms',
          component:RoomsComponent,
          children:
          [
           
          ]
        },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
