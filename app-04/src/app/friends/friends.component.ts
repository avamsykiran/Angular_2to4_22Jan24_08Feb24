import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  friends:string[];
  friend!:string;

  constructor(){
    this.friends=[
      "Vamsy","Sagar","Suresh","Yogi","Dileep","Girish"
    ];
  }

  addFriend(){
    if(this.friend && this.friend.trim().length>0){
      this.friends.push(this.friend);
      this.friend="";
    }
  }

  removeFriend(friend:string){
    let index = this.friends.indexOf(friend);
    if(index>-1){
      this.friends.splice(index,1);
      this.friend="";
    }
  }
}
