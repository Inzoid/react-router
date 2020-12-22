import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2020/11/09/b116e8b0-ec97-4c30-8d7d-ea981b00cc2c-1604894650189-29e0e8ce927b2f1bbddad89f0950a288.jpg',
    key: '1',
    altText: '',
    caption: '',
    header: 'Header',
  },
  {
    src: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2020/11/09/b52abcae-4d75-4b4e-be48-e60e3badd76a-1604894647223-4986e3f6b10ef99a7ff9fe469671b818.jpg',
    key: '2',
    altText: '',
    caption: '',
    header: 'Header',
  },
  {
    src: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2020/11/09/0e514135-8710-4e04-ae85-87710a7610f1-1604894648580-206d8599df0b7072820dfc07597537f9.jpg',
    key: '3',
    altText: '',
    caption: '',
    header: 'Header',
  },
  {
    src: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2020/11/09/5ece2ca1-f3f6-4d82-ad7b-3ca55bd70d06-1604894651635-7da576552d56dda3a5654a2f8159757e.jpg',
    key: '4',
    altText: '',
    caption: '',
    header: 'Header',
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;