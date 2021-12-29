const SHOP_DATA = [
    {
      id: 1,
      title: 'Booster Sets',
      routeName: 'boosters',
      items: [
        {
          id: 1,
          name: 'Brilliant Stars',
          imageUrl: 'https://www.pokemoncenter.com/products/images/P1414/141-11822/P1414_141-11822_01_full.jpg',
          price: 115
        },
        {
          id: 2,
          name: 'Fusion Strike',
          imageUrl: 'https://www.pokemoncenter.com/products/images/P7737/699-81916/P7737_699-81916_01_full.jpg',
          price: 115
        },
        {
          id: 3,
          name: 'Celebrations',
          imageUrl: 'https://www.pokemoncenter.com/products/images/P7677/290-80986/P7677_290-80986_01.jpg',
          price: 55
        },
        {
          id: 4,
          name: 'Shining Fates',
          imageUrl: 'https://i5.walmartimages.com/asr/996a7f32-2cdb-422b-8d6b-c5114480988f.2c6ab9a6fc1849253f7e35c0bd400780.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
          price: 160
        },
        {
          id: 5,
          name: 'Vivid Voltage',
          imageUrl: 'https://m.media-amazon.com/images/I/71Yit4Tfn4L._AC_SL1500_.jpg',
          price: 125
        },
        {
          id: 6,
          name: 'Hidden Fates',
          imageUrl: 'https://ae01.alicdn.com/kf/Hd7ad5a6f569f478c9e2c9158848ee9ebq/Pokemon-TCG-Hidden-Fates-Elite-Trainer-36-Bags-Sealed-Booster-Box-Collection-Trading-Card-Game-Toys.jpg_Q90.jpg_.webp',
          price: 250
        },
        {
          id: 7,
          name: 'Forbidden Light',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Individual Cards',
      routeName: 'individual',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: 'https://publish.one37pm.net/wp-content/uploads/2021/08/skyridge.jpg?fit=750%2C495',
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: 'https://assets.dicebreaker.com/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg',
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/02/Screen-Shot-2021-02-07-at-9.13.58-PM.jpg',
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: 'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2017/02/01/65d11676-4808-4720-b7d1-eee692235c20/illustrator-pokemon-card',
          price: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: 'https://publish.one37pm.net/wp-content/uploads/2021/08/skyridge.jpg?fit=750%2C495',
          price: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Weekly Featured',
      routeName: 'weekly',
      items: [
        {
          id: 1,
          name: 'Black Jean',
          imageUrl: 'https://assets.dicebreaker.com/pokemon-trading-card-booster-box.jpg/BROK/thumbnail/1200x1200/quality/100/pokemon-trading-card-booster-box.jpg',
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://m.media-amazon.com/images/I/71xA3TNtDCL._AC_SL1000_.jpg',
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://pokevault.com/image/cache/catalog/201707/s6h-silver-lance-booster-box-2-500x500.jpg',
          price: 90
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_df4e926a-7a75-4c10-83bf-977fadf00c8b?wid=488&hei=488&fmt=pjpeg',
          price: 165
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Collectibles',
      routeName: 'collectibles',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl: 'https://assets.dicebreaker.com/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: 'https://assets.dicebreaker.com/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg',
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: 'https://assets.dicebreaker.com/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg',
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: 'https://assets.dicebreaker.com/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg',
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: 'https://assets.dicebreaker.com/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg',
          price: 45
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Starter Decks',
      routeName: 'starters',
      items: [
        {
          id: 1,
          name: 'Camo Down Vest',
          imageUrl: 'https://assets.dicebreaker.com/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg',
          price: 325
        },
        {
          id: 2,
          name: 'Floral T-shirt',
          imageUrl: 'https://assets.dicebreaker.com/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg',
          price: 20
        },
        {
          id: 3,
          name: 'Black Longsleeve',
          imageUrl: 'https://assets.dicebreaker.com/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpgg',
          price: 25
        },
        {
          id: 4,
          name: 'Pink T-shirt',
          imageUrl: 'https://assets.dicebreaker.com/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/2000-neo-genesis-first-edition-holo-lugia-pokemon-card.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 6,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ]

export default SHOP_DATA;