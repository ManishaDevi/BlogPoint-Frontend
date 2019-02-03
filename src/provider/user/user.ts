import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

    host: string = 'http://localhost:5000'
    headers: any = {
        'Content-Type': 'application/json'
    };
    users: any = {

    };
    blogs:any={
        
    }

    constructor(public http: HttpClient) {
        console.log('Hello UserProvider Provider');
    }
    signUp(user: any) {
        return this.http.post(`${this.host}/user/signup`, user, this.headers)
    }

    logIn(user: any) {
        return this.http.post(`${this.host}/user/login`, user, this.headers)
      }
    submitFeeback(feedback:any){
        return this.http.post(`${this.host}/user/feedback`, feedback, this.headers)
    }
    submitBlog(blogs:any){
        return this.http.post(`${this.host}/user/submitBlog`, blogs, this.headers)
    }
    getBlog(blogs:any){
        return this.http.post(`${this.host}/user/getBlog`, blogs, this.headers)
    }
    updatePassword(user:any)
    {
        return this.http.post(`${this.host}/user/updatePassword`, user, this.headers)
    }
    getUserBlog(userName:any)
    {
        return this.http.post(`${this.host}/user/userBlog`, {userName}, this.headers)
    }
    logOut()
    {
        return this.http.post(`${this.host}/user/logout`, this.headers)
    }
    deleteBlog(blogs:any)
    {
        return this.http.post(`${this.host}/user/deleteblog`, blogs,this.headers)
    }
}