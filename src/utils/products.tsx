export default interface ProductCategory {
  path: string;
  title: string;
  menuTitle?: string; // shorter form of title for menu dropdown. If not provided, use normal title
  info?: string;
  // If there is only one product, assume the category and product are synonymous
  // If there are multiple products, the category is a collection of products
  products?: Product[];
}

export interface Product {
  key: string;
  name?: string;
  partNumber?: string;
}

export const productCategories: ProductCategory[] = [
  {
    path: '20mm-gun-stand',
    title: '20mm Gun Maintenance Stand',
    products: [
      {
        key: '20mm-gun-stand',
        partNumber: 'P/N X20075010\nP/N Z20MM453-10',
      },
    ],
  },
  {
    path: 'rocket-storage-stand',
    title: '2.75" Rocket Storage Stand',
    products: [
      {
        key: '275-rocket-storage-stand',
      },
    ],
  },
  {
    path: 'ame-trailer',
    title: 'Alternate Mission Equipment (AME) Service Trailer',
    menuTitle: 'AME Service Trailer',
    products: [
      {
        key: 'ame-service-trailer',
      },
    ],
  },
  {
    path: 'bru-57',
    title: 'BRU-57 Stands',
    products: [
      {
        key: 'bru-57-maintenance-stand',
        name: 'BRU-57 Maintenance and Inspection Stand',
      },
      {
        key: 'bru-57-storage-stand',
        name: 'BRU-57 Storage Stand',
      },
    ],
  },
  {
    path: 'bru-61',
    title: 'BRU-61 Loading Adapter',
    products: [
      {
        key: 'bru-61-loading-adapter',
        partNumber: 'P/N 20075010',
      },
    ],
  },
  {
    path: 'f22-pylon-stand',
    title: 'F-22 Pylon Storage Stand',
    products: [
      {
        key: 'f-22-pylon-stand',
        partNumber: 'P/N X20065083',
      },
    ],
  },
  {
    path: 'f35-mobility-platforms',
    title: 'Mobility Platforms for F-35 Aircraft AME',
    menuTitle: 'F-35 Mobility Platforms',
    products: [
      {
        key: 'f-35-storage-rack',
        name: 'F-35 AME Mobility Ready Storage Rack',
        partNumber: 'P/N X20122270-10',
      },
      {
        key: 'f-35-storage-fixture',
        name: 'F-35 AME Storage Fixture',
        partNumber: 'P/N X20143164-10',
      },
    ],
  },
  {
    path: 'mac',
    title: 'Munitions Assembly Conveyer',
    products: [
      {
        key: 'mac',
      },
    ],
  },
  {
    path: 'mac-hoists',
    title: 'MAC Hoists',
    info: 'We also provide MAC Hoist reconditioning services.',
    products: [
      {
        key: 'mac-jd-neuhaus',
      },
      {
        key: 'mac-ingersoll-rand',
      },
    ],
  },
  {
    path: 'molt',
    title: 'Manually Operated Lift Truck (MOLT)',
    products: [
      {
        key: 'molt',
        partNumber: 'NSN: 1730-01-227-8152\nP/N 8644725-10',
      },
    ],
  },
  {
    path: 'mpcu',
    title: 'Mobile Power Conditioning Unit (MPCU)',
    products: [
      {
        key: 'mpcu',
        name: 'MPCU/MPCU Plus',
      },
      {
        key: 'mpcu-plus-uninterruptable',
        name: 'MPCU Plus with Uninterruptable Power Supply',
      },
    ],
  },
  {
    path: 'munitions-tables',
    title: 'Munitions Maintenance and Inspection Tables',
    menuTitle: 'Munitions Tables',
    products: [
      {
        key: 'munitions-table',
        partNumber: 'P/N 20075135',
      },
    ],
  },
  {
    path: 'rubber-rollers',
    title: 'Six Inch Rubber Rollers and Universal Extender Assemblies',
    menuTitle: 'Rubber Rollers and Extenders',
    products: [
      {
        key: 'roller-mhu-83',
        name: 'Rubber Roller for MHU-83',
        partNumber: 'P/N 200414151-10',
      },
      {
        key: 'roller-mj-1',
        name: 'Rubber Roller for MJ-1',
        partNumber: 'P/N 200414151-10',
      },
      {
        key: 'roller-extender-assembly',
        name: 'Universal Extender Assembly',
        partNumber: 'P/N 200334009',
      },
    ],
  },
  {
    path: 'sdb-lift-bar',
    title: 'Small Diameter Bomb (SDB) Lightweight Lift Bar',
    menuTitle: 'SDB Lift Bar',
    products: [
      {
        key: 'sdb-lift-bar',
        partNumber: 'P/N X20097192',
      },
    ],
  },
  {
    path: 'ter-stand',
    title: 'Triple Ejection Rack (TER) Storage Stand',
    products: [
      {
        key: 'ter-stand',
      },
    ],
  },
  {
    path: 'toolkits',
    title: 'Missile and Bomb Assembly and Maintenance Tool Kits',
    menuTitle: 'Toolkits',
    products: [
      {
        key: 'toolkit',
      },
    ],
  },
  {
    path: 'transport-modules',
    title: 'Transportation Modules',
    products: [
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
      },
    ],
  },
];
