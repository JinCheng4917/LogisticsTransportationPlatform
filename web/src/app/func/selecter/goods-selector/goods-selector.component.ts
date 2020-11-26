import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {GoodsType} from '../../GoodsType';
import {GoodsService} from '../../../service/goods.service';

@Component({
  selector: 'app-goods-select',
  templateUrl: './goods-selector.component.html',
  styleUrls: ['./goods-selector.component.scss']
})
export class GoodsSelectorComponent implements OnInit {
  public state = {} as {
    goods: GoodsType,
    goodsTypes: Array<GoodsType>
  };


  @Input()
   set goods(value: GoodsType){
    console.log(value);
    this.state.goods = value;
  }


  get goods(): GoodsType {
    console.log(this.state.goods);
    return this.state.goods;
  }

  @Output()
  goodsSelect: EventEmitter<GoodsType> = new EventEmitter();

  constructor(private goodsService: GoodsService) {
  }

  ngOnInit(): void {
    this.state.goods = null;
    this.getAllGoodsType();
  }

  public getAllGoodsType(): void {
    this.goodsService.getAll().subscribe((goodsTypes: Array<GoodsType>) => {
      console.log(goodsTypes);
      this.state.goodsTypes = goodsTypes;
    });
  }

  public change(goodsType: GoodsType): void {
    this.goodsSelect.emit(goodsType);
  }

  comparedWithId(item1, item2): any {
    const result1: boolean = item1 === item2;
    let result2: boolean;
    if (item1 && item2) {
      result2 = item1.id === item2.id;
    }
    return result1 || result2;
  }

}

