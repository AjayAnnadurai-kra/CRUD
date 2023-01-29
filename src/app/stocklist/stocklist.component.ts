import { Component, OnInit } from '@angular/core';
import stocklist from '../stock.json';
interface stock {
  id: Number;
  name: string;
  mfd: string;
  price: string;
}

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.scss']
})
export class StocklistComponent implements OnInit {

  stocks: stock[] = stocklist;
  detail:any = {};

  constructor() { }


  removeData(row: any) {
    let value = this.stocks.findIndex(column => row.id == column.id);
    this.stocks.splice(value, 1)
    //  this.myarray = this.myarray.filter(column => row.id !== column.id);
  }

  editData(row: any) {
    this.detail = this.stocks.filter(m => row.id == m.id)[0];
  }

  saveOrEditData() {
    if (this.detail.id > 0) {
      this.stocks;
      this.detail = {};
      alert('Updated Successfully');
    }
    else if(this.detail.name.length >= 3 && this.detail.price.length >= 1 || this.detail.mfd.length >=3) {
      this.detail.id = this.stocks.length + 1;
      this.stocks.push(this.detail);
      this.detail = {};
      alert('Saved Successfully');
    }
  }
  cancel() {
    this.detail = {};
  }


  ngOnInit(): void {
  }

}
