import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import { ToastService } from './services/toast.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ToastComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [ToastComponent],
  providers: [ToastService]
})
export class ToastsModule { }
