import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { GhubDev } from '../interfaces/ghub-dev-response';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, AfterViewInit {
  form = this.fb.group({
    name: [''],
  });
  dev!: GhubDev;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private ghub: GithubService) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.value.name) {
      this.ghub.getDev(this.form.value.name).subscribe((res) => {
        console.log(res);
        if (res) {
          this.formSubmitted = true;
          this.dev = res as GhubDev;
        }
      });
    }
    this.form.reset();
  }
}
