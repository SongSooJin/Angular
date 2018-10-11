import { Component, OnInit } from '@angular/core';
import { EmpHttpService } from './emp-http.service';
import { Emp } from './emp.model';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  employees: any = [
    { id: 1, firstName: 'AA', lastName: 'aa' },
    { id: 2, firstName: 'BB', lastName: 'bb' },
    { id: 3, firstName: 'CC', lastName: 'cc' },
    { id: 4, firstName: 'DD', lastName: 'dd' },
  ];
  errorMessage: string;

  constructor(private empHttpService: EmpHttpService) { }

  ngOnInit() {
    this.getEmps();
  }

  getEmps() {
    // getEmps() 메소두는 Observable  겍체를 리턴한다.
    // 신문사 - 구독자 패턴
    this.empHttpService.getEmps()
      .subscribe(
        emps => this.employees = emps, // 성공
        error => this.errorMessage = <any>error); // 실패 
  }

  // addEmp(firstName: string, lastName: string) {
  //   alert('addEmp() # ' + firstName + ' ' + lastName);
  // }

  removeEmp(person: any) {
    alert(JSON.stringify(person));

    let id = person.id;
    
    // 원격 서버에 삭제를 요청해서 정상응답을 받으면
    // 컴포넌트 객체가 가진 배열에서 삭제한다.
    this.empHttpService.removeEmp(person)
    .subscribe(
      noResponse => {
        let targetIndex = this.employees.findIndex(emp => emp.id === id);
        this.employees.splice(targetIndex, 1);
      },
        error => this.errorMessage = <any>error);
        
    return false;
    // preventDefault
    // stopPropagation
  }

  onSubmit(f) {
    if (f.valid) {
      var emp = f.value;
      console.log(emp);

      alert('onSubmit() # ' + emp.firstName + ' ' + emp.lastName);

      // let maxId = Math.max(...this.employees.map(emp => emp.id));
      // 
      // this.employees.push({
      //   id: maxId + 1,
      //   firstName: emp.firstName,
      //   lastName: emp.lastName
      // });

      this.empHttpService.addEmp(emp.firstName, emp.lastName)
        .subscribe(
          res => {
            this.employees.push({
              id: res.id,
              firstName: emp.firstName,
              lastName: emp.lastName
            });

          },
          error => this.errorMessage = <any>error);
    }
  }
}