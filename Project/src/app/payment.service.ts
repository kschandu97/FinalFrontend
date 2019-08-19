import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions={
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable()
export class PaymentService{
    constructor(private http:HttpClient){}

    private userUrl='http://localhost:1887/Mode';

  
    public sendData(payStore: any) {
        console.log(payStore)
        return this.http.get(this.userUrl + "/payment/"+payStore);
    }
    


}