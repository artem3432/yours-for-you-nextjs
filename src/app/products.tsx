export type Product = {
  id: string
  title: string[]
  color: string[]
  price: number
  sizes: string[]
  photos: { src: string; alt: string }[]
  oldprice?: number[]
}

export const products: Product[] = [
  {
    id: "T-1",
    title: ["BRODY - T-Shirt basic"],
    color: [
      "light brown"
    ],
    price: 29.9,
    sizes: ["S", "M", "L", "XL", "XXL"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/197f773aff8f4106b3a7f434a474d8e8/7002c4da558845c99476b28487f35a9a.jpg?imwidth=1800&filter=packshot",
        alt: "T-Shirt basic - light brown",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/0b02a63a845d47df912136eaf311618b/e07da4d88a02409b922b484edd877581.jpg?imwidth=1800",
        alt: "T-Shirt basic - light brown",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/1f3eabc6887b489f8b9cbd8b17b6a178/7224f093cdae4625ab76ce19156be945.jpg?imwidth=1800",
        alt: "T-Shirt basic - light brown",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/4a1fd80d60a14a7287606d95ea0d5d22/ca84a121655045d1bb151706674f73e8.jpg?imwidth=1800",
        alt: "T-Shirt basic - light brown"
      }

    ]
  },
  {
    id: "T-2",
    title: ["BRODY - T-Shirt basic"],
    color: [
      "black"
    ],
    price: 29.9,
    sizes: ["S", "M", "L", "XL"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/8fdaf3ee7ff74c28840a2a464bc0906a/283f5086bd5043bcafb82b7c76de9793.jpg?imwidth=1800&filter=packshot",
        alt: "T-Shirt basic - dark brown",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/a49f8c8ed6514e99b9f227d0eb90764c/cdd9faa7800d43d5b45d91822b137d1c.jpg?imwidth=1800",
        alt: "T-Shirt basic - dark brown",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/9f0fa794c73a44ca9394912ff9f75a4f/57d5d19ef0f6436697a7d04808e1ca7a.jpg?imwidth=156",
        alt: "T-Shirt basic - dark brown",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/8df4b32c558c407eabfe89d513b5bc5a/c20f68a8b75c43978905e5c109507b12.jpg?imwidth=156",
        alt: "T-Shirt basic - dark brown",
      },
    ]
  },
  {
    id: "T-3",
    title: ["BRODY - T-Shirt basic"],
    color: [
      "green"
    ],
    price: 29.95,
    sizes: ["S", "M", "L"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/ee5135370db44c549d6017e4d76d9315/a811d854f131478baaa9bd9a8470455d.jpg?imwidth=156&filter=packshot",
        alt: "T-Shirt basic - green",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/26e7d9cff31f4c438fea824937d5cf99/adaf2cef9196452490d429b27c2d67b9.jpg?imwidth=156",
        alt: "T-Shirt basic - green",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/f7efe873180240d3b5810751e5cfbc7e/0072e480122b4a8d9826d8153fd1bcf6.jpg?imwidth=156",
        alt: "T-Shirt basic - green",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/255b3e391c9c48b69695a9bb5c553779/9a08ba1778b6404bb31f54e4dce91099.jpg?imwidth=156",
        alt: "T-Shirt basic - green",
      }
    ],
  },
  {
    id: "T-4",
    title: ["HEAVYWEIGHT - T-Shirt basic"],
    color: [
      "chocolate brown"
    ],
    price: 23.00,
    sizes: ["S", "M", "L", "XL", "XXL"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/4722b01b885d4e5085cd90fca4406637/bf722889ebb845b5b4991a5b6d0c0baf.jpg?imwidth=156&filter=packshot",
        alt: "T-Shirt basic - chocolate brown",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/64f470ffe2cc44249f330c6914641b1a/f18beb97c81a43dcb4d7793f437e9799.jpg?imwidth=156",
        alt: "T-Shirt basic - chocolate brown",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/7351b1c8f1b34f719c753128ab404d44/7678c2f67675467fa1f8de1bb190340d.jpg?imwidth=156",
        alt: "T-Shirt basic - chocolate brown",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/cfc7e3af4c314869a5a532c5d98c0f3c/cb93af31b3944e3fafc912ba9d4b4299.jpg?imwidth=156",
        alt: "T-Shirt basic - chocolate brown",
      }
    ],
  },
  {
    id: "T-5",
    title: ["HEAVYWEIGHT - T-Shirt basic"],
    color: [
      "blue"
    ],
    price: 23.00,
    sizes: ["S", "M", "L", "XL", "XXL"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/424e648c1c804c4cb586976fc45e5410/66bee40516c04708b899217a3607f616.jpg?imwidth=156&filter=packshot",
        alt: "T-Shirt basic - blue",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/7e5a901067c141a7b5bb72368892966e/d1d74da372874f1087185f7cfbe9aee2.jpg?imwidth=156",
        alt: "T-Shirt basic - blue",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/bd6ab73e2d654e4c91d1bc735999e004/b91caf6a047443c6adefc356bf7fe2c4.jpg?imwidth=156",
        alt: "T-Shirt basic - blue",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/899a4900d8b1448d92fc095a18f500c6/2dba240f26bc4d3f9c394eea00ea04ec.jpg?imwidth=156",
        alt: "T-Shirt basic - blue",
      }
    ],
  },
  {
    id: "T-6",
    title: ["HEAVYWEIGHT - T-Shirt basic"],
    color: [
      "black"
    ],
    oldprice: [23.00],
    price: 12.50,
    sizes: ["XS", "S", "M", "L", "XL"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/a51b1e9adb084443af66a747e609dbd3/0f31d45a5a6748d5b834048473c091fb.jpg?imwidth=156&filter=packshot",
        alt: "T-Shirt basic - black",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/cf69cedda03748ae9e4959119d74db1a/12c1b81f027248289b10fa74c63813c0.jpg?imwidth=156",
        alt: "T-Shirt basic - black",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/5d47d131e35b4f77a403cb67c4c9d4ca/9362294420a04ccc85337c15b04fcd46.jpg?imwidth=156",
        alt: "T-Shirt basic - black",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/93bea6b33774484f8a06a2be38af61f3/37ad2b902b594cd197febd4c3c8814b8.jpg?imwidth=156",
        alt: "T-Shirt basic - black",
      }
    ],
  },
  {
    id: "T-7",
    title: ["RELAXED FIT - T-Shirt basic"],
    color: [
      "green pine"
    ],
    price: 13.00,
    sizes: ["S", "M", "L", "XL", "XXL"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/c30f9922b5c7424ca25f80503de7332b/60881fb57dbb4c84a8a37b636e5df614.jpg?imwidth=156&filter=packshot",
        alt: "T-Shirt basic - green pine",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/5096c96820e7454daa85d3ac79bc0f37/cd700a96a9bc430590f533d2e006428c.jpg?imwidth=156",
        alt: "T-Shirt basic - green pine",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/883581be9ad2475392b764a05225c3e6/f9bfdcb0aa9b40b4afd49dca7cf37f46.jpg?imwidth=156",
        alt: "T-Shirt basic - green pine",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/24f8d5a3012c47d6af367a10e9446a52/bdfc9c4db13d4ff5b25ee5c903975f99.jpg?imwidth=156",
        alt: "T-Shirt basic - green pine",
      }
    ],
  },
  {
    id: "T-8",
    title: ["ULTRA HEAVY OVERSIZED - T-Shirt basic"],
    color: [
      "whitesand"
    ],
    price: 19.99,
    sizes: ["S", "M", "L", "XL", "XXL"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/d83f6254b2ce4d3aa901da06178f082a/fd9ef4227e414e6eb3661dc8b797a509.jpg?imwidth=156&filter=packshot",
        alt: "T-Shirt basic - whitesand",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/6c4656907ab544e08e70800f20251aa1/ff8ac25103e94abb9d23d69e72edabd2.jpg?imwidth=156",
        alt: "T-Shirt basic - whitesand",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/c0c960efcf424f409fc1af51b1b6ccce/c7098f724d7d456583b75b7e250ef6d3.jpg?imwidth=156",
        alt: "T-Shirt basic - whitesand",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/db25164326ff4e39bb3e8263fe4fb34f/6538f9b0bf50463b9b2ba88ec157d23a.jpg?imwidth=156",
        alt: "T-Shirt basic - whitesand",
      }
    ],
  },
  {
    id: "T-9",
    title: ["ULTRA HEAVY OVERSIZED - T-Shirt basic"],
    color: [
      "white"
    ],
    oldprice: [25.49],
    price: 23.99,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/175fabe2f48f472c91f44be44a237ca9/fa91af6389b94bb18f9f9456dc10eb25.jpg?imwidth=156&filter=packshot",
        alt: "T-Shirt basic - white",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/a2e942114f414adca2d75c01d2fa514f/5c0543a038e3461b9529e90ded2bd1ce.jpg?imwidth=156",
        alt: "T-Shirt basic - white",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/b4533e9390e644c4b809019f5875cf67/e489651688bc4bcba4f0713d5b30eb98.jpg?imwidth=156",
        alt: "T-Shirt basic - white",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/7ff06367c0a24353ba08222a3625e995/246e47dc5f984a2fbc477a908838683c.jpg?imwidth=156",
        alt: "T-Shirt basic - white",
      }
    ],
  },
  {
    id: "T-10",
    title: ["ULTRA HEAVY OVERSIZED - T-Shirt basic"],
    color: [
      "black"
    ],
    oldprice: [24.99],
    price: 17.49,
    sizes: ["S", "M", "L", "XL", "XXL"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/392ceae6142545f8922e2664d610c97f/9e8772d30a494ba58f6d9f6cf5edbfb0.jpg?imwidth=156&filter=packshot",
        alt: "T-Shirt basic - black",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/47400e525daf430db9088e7f1ec2b86e/96088ebff31d4926941ddf88622a06c9.jpg?imwidth=156",
        alt: "T-Shirt basic - black",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/390a1d387ed4497cbe7adf0806843f50/efb427adc4624a0aad30e25006667139.jpg?imwidth=156",
        alt: "T-Shirt basic - black",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/1d14c7e4917c4d06982d6e72bc7030e8/a591abac75984d6fb6fc8b6035cc0bc5.jpg?imwidth=156",
        alt: "T-Shirt basic - black",
      }
    ],
  },
  {
    id: "T-11",
    title: ["SDOSRICK - T-Shirt print"],
    color: [
      "off white"
    ],
    price: 24.95,
    sizes: ["M", "L", "XL", "XXL"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/3984f75692b444fe8708d1d1ae803e09/d2ecf25079f74993a57b46dd847a61d5.jpg?imwidth=156&filter=packshot",
        alt: "T-Shirt print - off white",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/aef668b7836a4c04b114787960e7fa87/17ea9c0cb6304c8f98323820669d9f53.jpg?imwidth=156",
        alt: "T-Shirt print - off white",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/74520d243a084511b12cda4b6b1dff2c/bc20b9b46a954810af2cbee463d6c0f4.jpg?imwidth=156",
        alt: "T-Shirt print - off white",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/cdae6dea21b94382947071d9594ada42/46a66ea4e68743819c54bbe4b9787186.jpg?imwidth=156",
        alt: "T-Shirt print - off white",
      }
    ],
  },
  {
    id: "T-12",
    title: ["THINK DIFFERENT HEAVY - T-Shirt print"],
    color: [
      "duskrose"
    ],
    price: 29.95,
    sizes: ["S", "M", "L", "XL", "XXL"],
    photos: [
      {
        src: "https://img01.ztat.net/article/spp-media-p1/4d747fc90e06458ab36488c0f77eb32d/484f766f0e51427ca604881bdc991fe3.jpg?imwidth=156&filter=packshot",
        alt: "T-Shirt print - duskrose",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/19dba4ac26294dfe9ca77f8a3e04ad5c/5e7a1a5d39a444aab5ba4bb2fff1d287.jpg?imwidth=156",
        alt: "T-Shirt print - duskrose",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/1c75fed730434e9c8d9ea925fdf94eb0/511150871a5c42acb21cc0e485c87d50.jpg?imwidth=156",
        alt: "T-Shirt print - duskrose",
      },
      {
        src: "https://img01.ztat.net/article/spp-media-p1/9b4690eb88d34d0ca3afb7fd40e934e1/8afd503963654954b47583cbdfd41e71.jpg?imwidth=156",
        alt: "T-Shirt print - duskrose",
      }
    ],
  },
]