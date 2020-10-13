import { BikeService } from './../../services/bike.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.sass']
})
export class ViewRegistrationComponent implements OnInit {

  public bikeReg;

  constructor(private bikeService: BikeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBikeReg(this.route.snapshot.params.id);
  }

  getBikeReg(id: number) {
    this.bikeService.getBike(id).subscribe(
      data =>  {
        this.bikeReg = data;
      },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }

  deleteBikeReg(id: number) {
    this.bikeService.removeBike(id).subscribe(
      data =>  {
        this.router.navigate(['/admin']);
      },
      err => console.error(err),
      () => console.log('bike deleted')
    );
  }

}
