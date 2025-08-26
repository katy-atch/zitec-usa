export interface ProductCategory {
  key: string;
  title: string;
  menuTitle?: string; // shorter form of title for menu dropdown. If not provided, use normal title
  info?: string;
  // If there is only one product, assume the category and product are synonymous
  // If there are multiple products, the category is a collection of products
  productKeys: string[];
}

export interface Product {
  key: string;
  name: string;
  zitecPartNumber: string;
  partNumber?: string;
  description?: string;
  imgPrefix?: string;
}

export const products: Product[] = [
  {
    key: '20mm-gun-stand',
    name: '20mm Gun Stand',
    partNumber: 'P/N X20075010',
    zitecPartNumber: 'P/N Z20MM453-10',
    imgPrefix: '20mmgun',
  },
  {
    key: '275-rocket-storage-stand',
    name: '275 Rocket Storage Stand',
    zitecPartNumber: '!!! NEED A PART NUMBER',
    imgPrefix: '275-rocket-storage-stand'
  },
  {
    key: 'ame-service-trailer',
    name: 'AME Service Trailer',
    zitecPartNumber: '!!! NEED A PART NUMBER',
    imgPrefix: 'ame-service-trailer'
  },
  {
    key: 'bru-57-maintenance-stand',
    name: 'BRU-57 Maintenance and Inspection Stand',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'bru-57-storage-stand',
    name: 'BRU-57 Storage Stand',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'bru-61-loading-adapter',
    name: 'BRU-61 Loading Adapter',
    partNumber: 'P/N 20075010',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'f-22-pylon-stand',
    name: 'F-22 Pylon Stand',
    partNumber: 'P/N X20065083',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'f-35-storage-rack',
    name: 'F-35 AME Mobility Ready Storage Rack',
    partNumber: 'P/N X20122270-10',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'f-35-storage-fixture',
    name: 'F-35 AME Storage Fixture',
    partNumber: 'P/N X20143164-10',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'mac',
    name: 'MAC',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'mac-jd-neuhaus',
    name: 'MAC JS Neuhaus',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'mac-ingersoll-rand',
    name: 'MAC Ingersoll Rand',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'molt',
    name: 'MOLT',
    partNumber: 'NSN: 1730-01-227-8152\nP/N 8644725-10',
    zitecPartNumber: '!!! NEED A PART NUMBER',
    description: 'This a molt bro, I aint playin youll love it'
  },
  {
    key: 'mpcu',
    name: 'MPCU/MPCU Plus',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'mpcu-plus-uninterruptable',
    name: 'MPCU Plus with Uninterruptable Power Supply',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'munitions-table',
    name: 'Munitions Table',
    partNumber: 'P/N 20075135',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'roller-mhu-83',
    name: 'Rubber Roller for MHU-83',
    partNumber: 'P/N 200414151-10',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'roller-mj-1',
    name: 'Rubber Roller for MJ-1',
    partNumber: 'P/N 200414151-10',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'roller-extender-assembly',
    name: 'Universal Extender Assembly',
    partNumber: 'P/N 200334009',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'sdb-lift-bar',
    name: 'SDB Lift Bar',
    partNumber: 'P/N X20097192',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'ter-stand',
    name: 'TER Stand',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'toolkit',
    name: 'Toolkit',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'transport-module-105mm',
    name: '105mm Transport Module',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'transport-module-2-75mm',
    name: '2.75MM Transport Module',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'transport-module-ale-40',
    name: 'ALE-40 Chaff & Flare Transport Module',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'transport-module-ale-50',
    name: 'ALE-50 Transport Module',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'transport-module-b-1b',
    name: 'B-1B Chaff & Flare Transport Module',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'transport-module-bdu-33',
    name: 'BDU-33 Transport Module',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  },
  {
    key: 'transport-module-f-22',
    name: 'F-22 Chaff and Flare Transport Module',
    zitecPartNumber: '!!! NEED A PART NUMBER'
  }
];
