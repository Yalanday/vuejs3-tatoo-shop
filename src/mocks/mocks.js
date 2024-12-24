const navItems = [
  {
    text: 'Промокоды',
    href: 'javascript:void(0)',
    id: 1
  },
  {
    text: 'Скидки',
    href: 'javascript:void(0)',
    id: 2
  },
  {
    text: 'Помощь',
    href: 'javascript:void(0)',
    id: 3
  },
  {
    text: 'О нас',
    href: 'javascript:void(0)',
    id: 4
  }, {
    text: 'Контакты',
    href: 'javascript:void(0)',
    id: 5
  }
];

const itemsCatalog = [
  {
    id: 1,
    text: 'Aliance'
  }, {
    id: 2,
    text: 'Aloe Tattoo'
  }, {
    id: 3,
    text: 'Anchored by Nikko Hurtado\n'
  }, {
    id: 4,
    text: 'BC Invention Comrany\n'
  }, {
    id: 5,
    text: 'Beauty Bit\n'
  }, {
    id: 6,
    text: 'Bishop Rotary\n'
  }, {
    id: 7,
    text: 'Burlak Tattoo Machines\n'
  }, {
    id: 8,
    text: 'Cheyenne HAWK\n'
  }, {
    id: 9,
    text: 'Critical Tattoo\n'
  }, {
    id: 10,
    text: 'Dermalize Protective\n'
  }, {
    id: 11,
    text: 'Dynamic Colors'
  }, {
    id: 12,
    text: 'EGO Bez’s Rotary\n'
  }, {
    id: 13,
    text: 'Eikon Device Inc.\n'
  }, {
    id: 14,
    text: 'Electrum\n'
  }, {
    id: 15,
    text: 'EQUALISER by Kwadron\n'
  }, {
    id: 16,
    text: 'Eternal\n'
  }, {
    id: 17,
    text: 'Excalibur\n'
  }, {
    id: 18,
    text: 'Fantasia Art Supply\n'
  }, {
    id: 19,
    text: 'FKirons\n'
  }, {
    id: 20,
    text: 'Hanafy\n'
  }, {
    id: 21,
    text: 'HM Tattoo Machines\n'
  }, {
    id: 22,
    text: 'Ink Machines'
  }, {
    id: 23,
    text: 'InkJecta Tattoo Machine\n'
  }, {
    id: 24,
    text: 'Intenze\n'
  }, {
    id: 25,
    text: 'JACK & ALEXX\n'
  }, {
    id: 26,
    text: 'Kashalot Rotary\n'
  }, {
    id: 27,
    text: 'Kuro Sumi\n'
  }, {
    id: 28,
    text: 'KWADRON™\n'
  }, {
    id: 29,
    text: 'Lauro Paolini\n'
  }, {
    id: 30,
    text: 'Lithuanian Irons\n'
  }, {
    id: 31,
    text: 'Lucky Supply\n'
  }, {
    id: 32,
    text: 'Mercator Medical\n'
  }, {
    id: 33,
    text: 'Millenium Mom’s Ink'
  }, {
    id: 34,
    text: 'NEMESIS\n'
  }, {
    id: 35,
    text: 'Nocturnal Tattoo Ink\n'
  }, {
    id: 36,
    text: 'Panthera\n'
  }, {
    id: 37,
    text: 'Perma Blend\n'
  }, {
    id: 38,
    text: 'Precision Needles\n'
  }, {
    id: 39,
    text: 'Precision Tattoo Supply\n'
  }, {
    id: 40,
    text: 'Premier Products\n'
  }, {
    id: 41,
    text: 'Radiant\n'
  }, {
    id: 42,
    text: 'Reprofx® Spirit™\n'
  }, {
    id: 43,
    text: 'Right Stuuf\n'
  }, {
    id: 44,
    text: 'S8TATTOO'
  }, {
    id: 45,
    text: 'Skinductor\n'
  }, {
    id: 46,
    text: 'Starbrite\n'
  }, {
    id: 47,
    text: 'Tattoorevive\n'
  }, {
    id: 48,
    text: 'TURANIUM Fabrika Rotary\n'
  }, {
    id: 49,
    text: 'UNI–CART'
  }, {
    id: 50,
    text: 'Vlad Blad'
  }
];

const itemsFilter = [
  {
    id: 1,
    text: "Хиты продаж"
  },
  {
    id: 2,
    text: "Самые популярные"
  },
  {
    id: 3,
    text: "Новые поступления"
  },
  {
    id: 4,
    text: "Акционные товары"
  }
];

const cards = [
  {
    id: 1,
    new: false,
    favorite: true,
    title: 'Foxxx Kitsune Mini Black Vintage RCA',
    price: 6000,
    incart: true,
    quantitu: 1,
    data: [
      {
        src: " /cards/1.png",
        alt: "Card image cap",
        id: 1,
      },
      {
        src: " /cards/7.png",
        alt: "Card image cap",
        id: 2,
      },
      {
        src: " /cards/5.png",
        alt: "Card image cap",
        id: 3,
      },
      {
        src: " /cards/8.png",
        alt: "Card image cap",
        id: 4,
      }
    ],
  }, {
    id: 2,
    new: false,
    favorite: false,
    title: 'Foxxx Viper Fox Golden Vintage Lot #1 RCA',
    price: 7500,
    incart: false,
    quantitu: 0,
    data: [
      {
        src: " /cards/2.png",
        alt: "Card image cap",
        id: 1,
      },
      {
        src: " /cards/5.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: " /cards/1.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: " /cards/6.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 3,
    new: true,
    favorite: false,
    title: 'Нитровиниловые перчатки Wally Plastic S',
    price: 6312,
    incart: false,
    quantitu: 0,
    data: [
      {
        src: "/cards/5.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "/cards/6.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "/cards/7.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "/cards/8.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 4,
    new: false,
    favorite: true,
    title: 'Forever Cartridge Grip Ergo 30 mm Огненно-Рыжий',
    price: 25456,
    incart: false,
    quantitu: 0,
    data: [
      {
        src: "/cards/1.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "/cards/5.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "/cards/6.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "/cards/2.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 5,
    new: false,
    favorite: false,
    title: 'Verge Direct 2.1 Pink gip EGO 4 mm liners',
    price: 6000,
    incart: false,
    quantitu: 0,
    data: [
      {
        src: "/cards/5.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "/cards/1.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "/cards/2.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "/cards/7.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 6,
    new: false,
    favorite: false,
    title: 'Deuce Machines Direct Drive #7 RCA Samurai',
    price: 2000,
    incart: false,
    quantitu: 0,
    data: [
      {
        src: "/cards/6.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "/cards/8.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "/cards/7.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "/cards/1.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 7,
    new: false,
    favorite: false,
    title: 'Cyborg Machines Alter Rotary Axis Cross Sexy Nymph',
    price: 666000,
    incart: false,
    quantitu: 0,
    data: [
      {
        src: "/cards/7.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "/cards/1.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "/cards/2.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "/cards/5.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  }, {
    id: 8,
    new: true,
    favorite: true,
    title: 'Verge Direct 2.1 Gunmetal',
    price: 13000,
    incart: false,
    quantitu: 0,
    data: [
      {
        src: "/cards/8.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "/cards/6.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "/cards/5.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "/cards/2.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  },{
    id: 9,
    new: true,
    favorite: true,
    title: 'Verge Direct 2.1 Gunmetal',
    price: 9000,
    incart: false,
    quantitu: 0,
    data: [
      {
        src: "/cards/8.png",
        alt: "Card image cap",
        id: 1
      },
      {
        src: "/cards/6.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "/cards/5.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "/cards/2.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  },{
    id: 10,
    new: true,
    favorite: true,
    title: 'Verge Direct 2.1 Gunmetal',
    price: 10000,
    incart: false,
    quantitu: 0,
    data: [
      {
        src: '/cards/8.png',
        alt: "Card image cap",
        id: 1
      },
      {
        src: "/cards/6.png",
        alt: "Card image cap",
        id: 2
      },
      {
        src: "/cards/5.png",
        alt: "Card image cap",
        id: 3
      },
      {
        src: "/cards/2.png",
        alt: "Card image cap",
        id: 4
      }
    ]
  },
];

const catalogItems = [
  {
    id: 1,
    title: "Тату </br> наборы",
    url: "/catalog/1.jpg",
    class: 'section-catalog__item--medium'
  },
  {
    id: 2,
    title: "Держатели",
    url: "/catalog/2.jpg",
    class: 'section-catalog__item--big'
  },
  {
    id: 3,
    title: "Тату машинка",
    url: "/catalog/3.jpg",
    class: 'section-catalog__item--small'
  },
  {
    id: 4,
    title: "Педали </br> и провода",
    url: "/catalog/4.jpg",
    class: 'section-catalog__item--medium'
  },
  {
    id: 5,
    title: "Краски",
    url: "/catalog/5.png",
    class: 'section-catalog__item--small'
  },
  {
    id: 6,
    title: "Блоки питания",
    url: "/catalog/6.jpg",
    class: 'section-catalog__item--medium'
  },
  {
    id: 7,
    title: "Наконечники",
    url: "/catalog/7.jpg",
    class: 'section-catalog__item--small'
  },
  {
    id: 8,
    title: "Тату иглы",
    url: "/catalog/8.jpg",
    class: 'section-catalog__item--small'
  },
  {
    id: 9,
    title: "Защита, ёмкости, </br> расходники",
    url: "/catalog/9.jpg",
    class: 'section-catalog__item--small'
  },
  {
    id: 10,
    title: "Аксессуары",
    url: "/catalog/10.jpg",
    class: 'section-catalog__item--small'
  },
  {
    id: 11,
    title: "Принтеры и планшеты",
    url: "/catalog/11.jpg",
    class: 'section-catalog__item--medium'
  }
]

export {navItems, itemsCatalog, itemsFilter, cards, catalogItems};