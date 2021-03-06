import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BEComService {

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  private createUserUrl = 'https://tim-front2.herokuapp.com/api/users/userCreated'
  private createAppointmentUrl = 'https://tim-front2.herokuapp.com/api/appointments/createdAppointment'

  private doctorUrl = 'https://tim-front2.herokuapp.com/api/users/doctors';
  private treatmentUrl = 'https://tim-front2.herokuapp.com/api/treatments/';
  private appointmentUrl = 'https://tim-front2.herokuapp.com/api/appointments/';

  private appointmentEditUrl = 'https://tim-front2.herokuapp.com/api/appointments';
  private userEditUrl = 'https://tim-front2.herokuapp.com/api/user';
  private userByEmailUrl = 'https://tim-front2.herokuapp.com/api/users/u/';
  private userUrl = 'https://tim-front2.herokuapp.com/api/users/';



  constructor(
    private http: Http,
    private router: Router
  ) { }


  getDoctors(): any {
    return this.http.get(this.doctorUrl);
  }

  getUsers(): any {
    return this.http.get(this.userUrl);
  }

  getUserByEmail(email): any {
    return this.http.get(this.userByEmailUrl + email)
  }

  getTreatments(): any {
    return this.http.get(this.treatmentUrl);
  }

  getAppointments(): any {
    return this.http.get(this.appointmentUrl);
  }

  rejectAppointment(key: any): any {
    return this.http.put(this.appointmentEditUrl, key)
  }

  acceptAppointment(key: any): any {
    return this.http.put(this.appointmentEditUrl, key)
  }

  deleteAppointment(key: any): any {
    return this.http.delete(this.appointmentUrl, key)
  }

  createAppointment(event): any {
    this.http.post(this.createAppointmentUrl, event, this.options)
      .subscribe(
        res => {
          if (res.ok) {
            alert('Pomyślnie ustalono termin');
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  createUser(user): any {
    return this.http.post(this.createUserUrl, user, this.options)
      .subscribe(
        res => {
          if (res.ok) {
            alert('Pomyślnie dodano użytkownika');
            this.router.navigate(["/home"]);
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  editUser(user): any {
    return this.http.put(this.userEditUrl, user, this.options);
  }
}
