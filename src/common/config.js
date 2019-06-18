import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.04;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export const LATITUDE = 37.795690;
export const LONGITUDE = -122.434728;
export const MARKERS_LATITUDE_DELTA = 0.0003;
export const MARKERS_LONGITUDE_DELTA = MARKERS_LATITUDE_DELTA * ASPECT_RATIO;
export const MAP_LATITUDE_DELTA = 0.3;
export const MAP_LONGITUDE_DELTA = MAP_LATITUDE_DELTA * ASPECT_RATIO;
export const NUM_MARKERS = 2;
export const PERCENT_SPECIAL_MARKERS = 0.1;

export const REGION = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

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





