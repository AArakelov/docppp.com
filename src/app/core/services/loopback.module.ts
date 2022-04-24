import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserApiService } from './api/user.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [UserApiService],
})
export class LoopbackModule {}
