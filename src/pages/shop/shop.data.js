const SHOP_DATA = [
    {
      id: 1,
      title: 'Booster Sets',
      routeName: 'boosters',
      items: [
        {
          id: 1,
          name: 'Brilliant Stars',
          imageUrl: 'https://cdn11.bigcommerce.com/s-ua4dd/images/stencil/1280x1280/products/50298/136394/pku80996_1__07837.1638313392.jpg?c=2',
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
          imageUrl: 'https://m.media-amazon.com/images/I/71WbvHF6uHL._AC_SL1500_.jpg',
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
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
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
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
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
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
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
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 2,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 3,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 4,
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
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