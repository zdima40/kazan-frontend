import { Injectable } from '@angular/core';
import { PartnerCard } from '@classtypes/PartnerCard';

const MOCK_PARTNER_CARDS = [
  {
    id: 1,
    title: 'Пятерочка',
    logo: 'assets/partner-card-logo/pyaterochka.png',
    description: 'продукты питания',
    discount: 0.08,
    priceScore: 100
  }, {
    id: 2,
    title: 'М-Видео',
    logo: 'assets/partner-card-logo/m-video.jpg',
    description: 'Видео и аудио техника',
    discount: 0.05,
    priceScore: 200
  }, {
    id: 3,
    title: 'Литрес',
    logo: 'assets/partner-card-logo/litres.png',
    description: 'Книги для чтения',
    discount: 0.1,
    priceScore: 200
  },  {
    id: 4,
    title: 'Макдак',
    logo: 'assets/partner-card-logo/macdonalds.png',
    description: 'Сеть общественного питания',
    discount: 0.12,
    priceScore: 300
  }
];

@Injectable()
export class PartnerCardService {

  public constructor() { }

  public getAll(): PartnerCard[] {
    return MOCK_PARTNER_CARDS;
  }
}
