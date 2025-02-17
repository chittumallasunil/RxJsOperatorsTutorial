import { bootstrapApplication } from '@angular/platform-browser';
import { UsersComponent } from './users/users.component';
import { provideHttpClient } from '@angular/common/http';



bootstrapApplication(UsersComponent,{
  providers: [provideHttpClient()]
});
