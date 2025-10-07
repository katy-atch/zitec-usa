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
  zitecPartNumber?: string;
  partNumber?: string;
  nationalStockNumber?: string;
  description?: string;
  imgPrefix?: string;
}

export const products: Product[] = [
  {
    key: '20mm-gun-stand',
    name: '20mm Gun Stand',
    imgPrefix: '20mmgun',
  },
  {
    key: '275-rocket-storage-stand',
    name: '275 Rocket Storage Stand',
    imgPrefix: '275-rocket-storage-stand'
  },
  {
    key: 'ame-service-trailer',
    name: 'AME Service Trailer',
    imgPrefix: 'ame-service-trailer'
  },
  {
    key: 'bru-57-maintenance-stand',
    name: 'BRU-57 Maintenance and Inspection Stand',
  },
  {
    key: 'bru-57-storage-stand',
    name: 'BRU-57 Storage Stand',
  },
  {
    key: 'bru-61-loading-adapter',
    name: 'BRU-61 Loading Adapter',
    partNumber: '20075010',
  },
  {
    key: 'f-22-pylon-stand',
    name: 'F-22 Pylon Stand',
    partNumber: 'X20065083',
  },
  {
    key: 'f-35-storage-rack',
    name: 'F-35 AME Mobility Ready Storage Rack',
    partNumber: 'X20122270-10',
  },
  {
    key: 'f-35-storage-fixture',
    name: 'F-35 AME Storage Fixture',
    partNumber: 'X20143164-10',
  },
  {
    key: 'mac',
    name: 'MAC',
  },
  {
    key: 'mac-jd-neuhaus',
    name: 'MAC JS Neuhaus',
  },
  {
    key: 'mac-ingersoll-rand',
    name: 'MAC Ingersoll Rand',
  },
  {
    key: 'molt',
    name: 'Manually Operated Lift Truck (MOLT)',
    partNumber: '8644725-10',
    nationalStockNumber: '1730-01-227-8152',
    description: 'ZITEC manufactures the <b>MHU-194/E</b> Manually Operated Lift Truck (MOLT) designed for loading bombs, missiles, fuel tanks, and other aircraft stores weighing up to 2,450 lbs. \n\n The MOLT is a very easy and inexpensive piece of ground support equipment to operate and maintain as it has no hydraulic, electrical, internal combustion, or motor-driven components — it is a fully mechanical lifting device using hand cranks to operate. \n\n It is highly reliable, durable, safe to operate, and robust and has been in use worldwide for over 30 years.',
  },
  {
    key: 'mpcu',
    name: 'MPCU/MPCU Plus',
    description: '!!!!!!!! THIS A DESCRIPTION!!!! YEAHHHHH !!!!!!!!!'
  },
  {
    key: 'mpcu-plus-uninterruptable',
    name: 'MPCU Plus with Uninterruptable Power Supply',
  },
  {
    key: 'munitions-table',
    name: 'Munitions Table',
    partNumber: '20075135',
  },
  {
    key: 'roller-mhu-83',
    name: 'Rubber Roller for MHU-83',
    partNumber: '200414151-10',
  },
  {
    key: 'roller-mj-1',
    name: 'Rubber Roller for MJ-1',
    partNumber: '200414151-10',
  },
  {
    key: 'roller-extender-assembly',
    name: 'Universal Extender Assembly',
    partNumber: '200334009',
  },
  {
    key: 'sdb-lift-bar',
    name: 'SDB Lift Bar',
    partNumber: 'X20097192',
  },
  {
    key: 'ter-stand',
    name: 'TER Stand',
  },
  {
    key: 'toolkit',
    name: 'Toolkit',
  },
  {
    key: 'transport-module-105mm',
    name: '105mm Transport Module',
  },
  {
    key: 'transport-module-2-75mm',
    name: '2.75MM Transport Module',
  },
  {
    key: 'transport-module-ale-40',
    name: 'ALE-40 Chaff & Flare Transport Module',
  },
  {
    key: 'transport-module-ale-50',
    name: 'ALE-50 Transport Module',
  },
  {
    key: 'transport-module-b-1b',
    name: 'B-1B Chaff & Flare Transport Module',
  },
  {
    key: 'transport-module-bdu-33',
    name: 'BDU-33 Transport Module',
  },
  {
    key: 'transport-module-f-22',
    name: 'F-22 Chaff and Flare Transport Module',
  }
];
