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

  stockDetails: stock[] = stocklist;
  stockDetail:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
