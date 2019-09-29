import { Component, OnInit } from '@angular/core';
import { PartnerCard } from '@classtypes/PartnerCard';
import { PartnerCardService } from '@services/partner-card.service';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss']
})
export class PartnersListComponent implements OnInit {

  public partnerCards: PartnerCard[];

  public constructor(private partnerCardsService: PartnerCardService) { }

  public ngOnInit() {
    this.getPartnerCards();
  }

  private getPartnerCards() {
    this.partnerCards = this.partnerCardsService.getAll();
  }

}
