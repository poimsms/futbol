import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  isHome = false;
  showSidenav = false;
  isUser = true;
  showBuyNow = false;
  showBestPlayer = false;
  showRankingGame = false;
  showLogin = false;

  isModal: boolean;
  isPartido: boolean;
  back = '';

  pages = [
    {
      page: 'partidos',
      back: '',
      isActive: false
    },
    {
      page: 'partido',
      back: 'partidos',
      isActive: false
    },
    {
      page: 'mensajes',
      back: '',
      isActive: false
    },
    {
      page: 'mensaje',
      back: 'mensajes',
      isActive: false
    }
  ];

  constructor() { }

  setPage() {

  }

  activeOnePage(page) {
    this.pages.forEach(data => {
      if (data.page == page) {
        data.isActive = true;
      } else {
        data.isActive = false;
      }
    });
  }

  getBack() {
    let back = '';
    this.pages.forEach(data => {
      if (data.isActive) {
        back = data.back;
      }
    });
    return back;
  }

  openPage(page, type) {
    if (type == 'modal') {
      this.isModal = true;
    } else {
      this.isModal = false;
      console.log('pasoo');
      
    }
      this.isHome = true;
      this.activeOnePage(page);
      this.back = this.getBack();    
  }

  openModal(page) {
    this.activeOnePage(page);
    this.back = this.getBack();
  }

}
