import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LaundryService } from 'src/app/service/laundry.service';

@Component({
  selector: 'app-set-laundry-prices',
  templateUrl: './set-laundry-prices.component.html',
  styleUrls: ['./set-laundry-prices.component.css']
})
export class SetLaundryPricesComponent implements OnInit {
  pricesData={
    DryCloths:0,
    IroningCloth:0,
    PerKgCost:0,
  }
  constructor(private snack:MatSnackBar,private laundry:LaundryService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.pricesData.DryCloths<=0 || this.pricesData.IroningCloth<=0 || this.pricesData.PerKgCost<=0)
    {
      this.snack.open("Price cannot be negative!",'OK',{duration:3000});
      return;
    }
    this.laundry.setLaundryPrices({"type":"PerKgCost","amount":this.pricesData.PerKgCost}).subscribe(
      (data:any)=>{
        console.log(data);
      },
      (error)=>{
        console.log('Error!');
        console.log(error);
        this.snack.open('Error!','OK',{
          duration:3000,
        })
      }
    )
    this.laundry.setLaundryPrices({"type":"IroningCloth","amount":this.pricesData.IroningCloth}).subscribe(
      (data:any)=>{
        console.log(data);
      },
      (error)=>{
        console.log('Error!');
        console.log(error);
        this.snack.open('Error!','OK',{
          duration:3000,
        })
      }
    )
    this.laundry.setLaundryPrices({"type":"DryCloths","amount":this.pricesData.DryCloths}).subscribe(
      (data:any)=>{
        console.log(data);
        this.snack.open('Success!','OK',{
          duration:3000,
        })
      },
      (error)=>{
        console.log('Error!');
        console.log(error);
        this.snack.open('Error!','OK',{
          duration:3000,
        })
      }
    )
  }
}
