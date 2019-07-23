import { Component, OnInit, Input } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { IRepoUser, IUser } from 'src/app/helpers/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: IRepoUser;

  userMeta: Observable<IUser> | null = null;

  constructor(public repoService: RepositoryService) { }

  ngOnInit() {
    this.userMeta = this.repoService.getUser(this.user);
  }
}
