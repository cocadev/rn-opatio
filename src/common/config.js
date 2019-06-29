import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.04;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export const LONGITUDE = -32.571482;
export const LATITUDE = -64.105139;
// export const LATITUDE = 37.795690;
// export const LONGITUDE = -122.434728;
export const MARKERS_LATITUDE_DELTA = 0.03;
export const MARKERS_LONGITUDE_DELTA = MARKERS_LATITUDE_DELTA * ASPECT_RATIO;
export const MAP_LATITUDE_DELTA = 0.3;
export const MAP_LONGITUDE_DELTA = MAP_LATITUDE_DELTA * ASPECT_RATIO;
export const NUM_MARKERS = 7;
export const PERCENT_SPECIAL_MARKERS = 0.1;

export const REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
export const SERVICE_API_URL = 'https://api.qa.optiagro.com/'

export const INTRO = 'Con nuestra plataforma podrás ver imágenes satelitales, imágenes de indice verde, detectar anomalías y ambientar tus lotes.'

export const contratistas = [
  {
    id: 0,
    name: 'Oscar Rodriguez',
    img: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/14ED4/production/_105661758_zhaitianlin.jpg',
    address: 'Rodriguez y Marquez S.A',
    name: 'John Deere 8030J',
    count: 3,
    visible: true,
  },
  {
    id: 1,
    name: 'Oscar Rodriguez',
    img: 'https://i.pinimg.com/236x/d3/1e/b4/d31eb42ae4427b511d6553958e2b06bf--chinese-list.jpg',
    address: 'Rodriguez y Marquez S.A',
    name: 'John Deere 5444Y',
    count: 9,
    visible: true,
  },
  {
    id: 2,
    name: 'Oscar Rodriguez',
    img: 'https://www.indiewire.com/wp-content/uploads/2018/10/shutterstock_7755619v.jpg',
    address: 'Emmay Kolo S.A',
    name: 'Martin Deere 1130J',
    count: 2,
    visible: false,
  },
  {
    id: 3,
    name: 'Oscar Rodriguez',
    img: 'https://i.pinimg.com/236x/0a/e0/54/0ae0549df05c447c7bf2dd3b75737788--wang-leehom-asian-guys.jpg',
    address: 'Rodriguez y Marquez S.A',
    name: 'John Deere 6150J',
    count: 3,
    visible: false,
  },
  {
    id: 4,
    name: 'Oscar Rodriguez',
    img: 'https://pbs.twimg.com/profile_images/995277422676262912/qcOu-dcR_400x400.jpg',
    address: 'Waston y Marquez S.A',
    name: 'Long Geng 6130J',
    count: 1,
    visible: true,
  },
  {
    id: 5,
    name: 'Oscar Rodriguez',
    img: 'http://img2.chinadaily.com.cn/images/201811/01/5bdabb73a310eff36903ea74.jpeg',
    address: 'Rodriguez y Marquez S.A',
    name: 'Kelvin Deere 2130J',
    count: 8,
    visible: false,
  },
]

export const Tractores = [
  {
    id: 0,
    type: 'success',
    title: 'En vivo',
    number: 150,
    name: 'John Deere 6130J',
    status: 'Cesar Cuestas',
    switch: true,
  },
  {
    id: 1,
    type: 'grey',
    title: '5 días sin datos',
    number: 152,
    name: 'John Deere 6130J',
    status: 'Cesar Cuestas',
    switch: false,
  },
  {
    id: 2,
    type: 'red',
    title: '5 días sin datos',
    number: 153,
    name: 'John Deere 6130J',
    status: 'Cesar Cuestas',
    switch: false,
  },
  {
    id: 3,
    type: 'orange',
    title: 'Sin GPS asignado',
    number: 158,
    name: 'John Deere 6130J',
    status: 'Cesar Cuestas',
    switch: false,
  },
]

export const CULTIVOS = [
  {
    id: 0,
    time: "2019/2020",
    accept: false
  },
  {
    id: 1,
    time: "2018/2019",
    accept: true

  },
  {
    id: 2,
    time: "2017/2018",
    accept: true

  },
];

export const TAREAS = [
  {
    id:1,
    name: "LUN",
    time: "10/03/18",
    title: "Sembrar",
    description: "Asignado: Marcelo Rodriguez",
    published: '12/03/17',
    type: 0,
    visible:  true
  },
  {
    id:2,
    name: "SAB",
    time: "10/03/18",
    title: "Reparar alambrado",
    description: "Asignado: Marcelo Rodriguez",
    published: '09/03/17',
    type: 1,
  },  
  {
    id:3,
    name: "JUE",
    time: "06/03/18",
    title: "Re-fertilizar",
    description: "Asignado: Marcelo Rodriguez",
    published: '08/03/17',
    type: 2
  },
  {
    id:4,
    name: "MAR",
    time: "04/03/18",
    title: "Pulverizar",
    description: "Asignado: Marcelo Rodriguez",
    published: '05/03/17',
    type: 2
  },
];

export const TAREAS2 = [
  {
    id:1,
    name: "LUN",
    time: "10/03/18",
    title: "Sembrar",
    description: "Asignado: Marcelo Rodriguez",
    published: '12/03/17',
    type: 0,
  },
];

export const TAREAS3 = [
  {
    id:1,
    name: "LUN",
    time: "10/03/18",
    title: "Sembrar",
    description: "Asignado: Marcelo Rodriguez",
    published: '12/03/17',
    type: 0,
    visible:  true
  },
  {
    id:2,
    name: "SAB",
    time: "10/03/18",
    title: "Reparar alambrado",
    description: "Asignado: Marcelo Rodriguez",
    published: '09/03/17',
    type: 1,
  },
];

export const NOTAS = [
  {
    id:1,
    name: "LUN",
    time: "10/03/18",
    title: "Manchon de malezas",
    visible: true
  },
  {
    id:2,
    name: "SAB",
    time: "10/03/18",
    title: "Alambrado roto"
  },  
  {
    id:3,
    name: "JUE",
    time: "06/03/18",
    title: "Plaga - Cogollera",
    visible: true

  },
  {
    id:4,
    name: "MAR",
    time: "04/03/18",
    title: "Inundado",
    visible: true

  },
  {
    id:5,
    name: "SAB",
    time: "10/03/18",
    title: "Alambrado roto"
  },  
  {
    id:6,
    name: "JUE",
    time: "06/03/18",
    title: "Plaga - Cogollera",
  },
  {
    id:7,
    name: "MAR",
    time: "04/03/18",
    title: "Inundado"
  }
];

export const LOTES1 = [
  {
    id:21,
    count: 100,
    visible: false,
    download: true
  },
  {
    id:22,
    count: 66,
    visible: true,
    download: true

  },  
  {
    id:23,
    count: 27,
    visible: false,
    download: false
  }
];

export const LOTES2 = [
  {
    id:5,
    count: 100,
    visible: false,
    download: true

  },
  {
    id:6,
    count: 66,
    visible: true,
    download: false

  },  
  {
    id:7,
    count: 27,
    visible: true,
    download: true

  }
];

export const LOTES3 = [
  {
    id:5,
    count: 75,
    visible: true,
    download: false

  },
  {
    id:6,
    count: 22,
    visible: true,
    download: true

  },  
  {
    id:7,
    count: 18,
    visible: true,
    download: false

  }
];

export const NOTIFICATION = [
    {
      id:0,
      title: 'BBC NEWS',
      content: 'satellites',
      name: 'La Marie'
    },
    {
      id:1,
      title: 'France Women Football News',
      content: 'victory',
      name: 'Janu Darke'
    },  
    {
      id:2,
      title: 'Relationship is progressing',
      content: 'best nice',
      name: 'Balaladeba'
    }
  ];

export const COORDINATES =[
  {
    longitude: -122.442753,
    latitude: 37.798790,
  },
  {
    longitude: -122.424728,
    latitude: 37.801232,
  },
  {
    longitude: -122.422497,
    latitude: 37.790651,
  },
  {
    longitude: -122.440693,
    latitude: 37.788209,
  },
];

export const CENTER = {
  longitude: -122.4326648935676,
  latitude: 37.79418561114521,
};

export const CUSTOM_STYLE = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#746855',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#263c3f',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6b9a76',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#38414e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#212a37',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9ca5b3',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#746855',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#f3d19c',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
  ];

export const customCalendarStyles = {
  container: {
    borderColor: '#1982e5',
    borderWidth: 2,
    borderRadius: 0
  }
}

export const TTTTT = [
  {
      "nombre": "testing german",
      "campo_id": "976a71d3-b858-11e8-84f4-12d9585c98a0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "La Morocha",
      "campo_id": "27030f13-bb69-11e8-84f4-12d9585c98a0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "Demo",
      "campo_id": "7a27383d-bb71-11e8-84f4-12d9585c98a0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "LL",
      "campo_id": "d2f672d1-bb75-11e8-84f4-12d9585c98a0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "prueba",
      "campo_id": "f77c2471-bdae-11e8-84f4-12d9585c98a0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "dc",
      "campo_id": "e768c595-bdc6-11e8-84f4-12d9585c98a0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "test_gonza",
      "campo_id": "ff85f87d-c0c8-11e8-84f4-12d9585c98a0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "Campo Abuelo guille",
      "campo_id": "77c1c553-c644-11e8-84f6-12d9585c98a0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "Inta manfredi",
      "campo_id": "44486b1d-c64f-11e8-84f6-12d9585c98a0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "Río Cuarto",
      "campo_id": "c49775ad-c8c4-11e8-84f6-12d9585c98a0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "LC",
      "campo_id": "978b1e8d-c8c5-11e8-84f6-12d9585c98a0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "depetris",
      "campo_id": "a00aa875-d2f8-11e8-9299-12ad69fe4ff0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "prueba depetris",
      "campo_id": "4e51ce59-d2f9-11e8-9299-12ad69fe4ff0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "Córdoba",
      "campo_id": "a6e9d479-d4a9-11e8-9299-12ad69fe4ff0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "test_gonza",
      "campo_id": "a3c9be37-dc72-11e8-929b-12ad69fe4ff0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "Demo",
      "campo_id": "9df1b277-ddfc-11e8-9b94-12ad69fe4ff0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": [
          {
              "name": "1",
              "ha": 96.98,
              "field_id": "9df1b276-ddfc-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "2",
              "ha": 97.22,
              "field_id": "b8300128-ddfd-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "3",
              "ha": 97.73,
              "field_id": "2da7d620-de02-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "4",
              "ha": 97.37,
              "field_id": "68453aca-de02-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "5",
              "ha": 98.29,
              "field_id": "74cec2a2-de02-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "6",
              "ha": 98.59,
              "field_id": "7db83e3e-de02-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "7",
              "ha": 98.89,
              "field_id": "86f16a02-de02-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "8",
              "ha": 98.24,
              "field_id": "90e8bd9e-de02-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "9A",
              "ha": 64.14,
              "field_id": "c05bbb76-de02-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "10",
              "ha": 102.89,
              "field_id": "caa40f34-de02-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "11",
              "ha": 100.65,
              "field_id": "d75877a6-de02-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "12",
              "ha": 101.84,
              "field_id": "e0b83e26-de02-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "Demo",
              "ha": 346.92,
              "field_id": "a2b2d318-0e9d-11e9-9b95-12ad69fe4ff0"
          },
          {
              "name": "9B",
              "ha": 35.8,
              "field_id": "9c8ef3c0-19da-11e9-9b96-12ad69fe4ff0"
          },
          {
              "name": "test",
              "ha": 845.62,
              "field_id": "e5d36b72-588e-11e9-bee1-123cbe7b1526"
          }
      ]
  },
  {
      "nombre": "Demo Maquinarias",
      "campo_id": "12621235-ed1d-11e8-9b94-12ad69fe4ff0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": [
          {
              "name": "1",
              "ha": 40.43,
              "field_id": "12621234-ed1d-11e8-9b94-12ad69fe4ff0"
          }
      ]
  },
  {
      "nombre": "el durazno",
      "campo_id": "d7404c21-f03c-11e8-9b94-12ad69fe4ff0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  },
  {
      "nombre": "Río Cuarto",
      "campo_id": "45a3328f-f193-11e8-9b94-12ad69fe4ff0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": [
          {
              "name": "Centro",
              "ha": 33.21,
              "field_id": "45a3328e-f193-11e8-9b94-12ad69fe4ff0"
          },
          {
              "name": "Clima",
              "ha": 4709.99,
              "field_id": "b8867388-2497-11e9-bcca-12ad69fe4ff0"
          }
      ]
  },
  {
      "nombre": "bbb",
      "campo_id": "25040359-1878-11e9-9b96-12ad69fe4ff0",
      "company_id": "67415a6c-e842-11e8-9b94-12ad69fe4ff0",
      "active": 1,
      "user_id": "33",
      "fields": []
  }
]

export const PPPPPPPP = [
  [
      [
          -32.571482,
          -64.105139
      ],
      [
          -32.573336,
          -64.094859
      ],
      [
          -32.58192,
          -64.09713
      ],
      [
          -32.579999,
          -64.107541
      ],
      [
          -32.571482,
          -64.105139
      ]
  ]
]