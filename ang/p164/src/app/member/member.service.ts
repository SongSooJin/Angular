import { Injectable } from '@angular/core';

export class Member { 
  constructor(
    public name: string,
    public age: number) { } 
}

const MEMBERS: Member[] = [
  new Member('유비', 30), 
  new Member('관우', 29), 
  new Member('장비', 28)
];

@Injectable() 
export class MemberService {

  getMembers(): Promise<Member[]> {
    // 프라미스 객체를 리턴한다. 배열은 1초 후 비동기적으로 전달된다.     
    return new Promise<Member[]>(resolve => {
      setTimeout(() => { resolve(MEMBERS); }, 1000);
    });
  }

  getMember(name: string) {
    return this.getMembers()
      .then(members => members.find(member => member.name === name));
  }

}