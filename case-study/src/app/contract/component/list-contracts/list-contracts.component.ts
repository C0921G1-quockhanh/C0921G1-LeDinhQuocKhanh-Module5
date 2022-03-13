import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.css']
})
export class ListContractsComponent implements OnInit {

  contracts: Contract[];

  constructor(private contractService: ContractService) { }

  ngOnInit() {
    this.getAllContracts();
  }

  getAllContracts() {
    this.contractService.getAllContracts().subscribe(contracts => {
      this.contracts = contracts;
      console.log('list contracts success!');
    }, error => {
      console.log(error);
    })
  }

}
