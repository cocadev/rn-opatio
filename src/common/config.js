import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.05;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export const LATITUDE = 37.798790;
export const LONGITUDE = -122.424728;
export const MARKERS_LATITUDE_DELTA = 0.03;
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

export const NOTAS = [
  {
    id:1,
    name: "LUN",
    time: "10/03/18",
    title: "Manchon de malezas"
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
    title: "Plaga - Cogollera"
  },
  {
    id:4,
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





