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
}

export const products: Product[] = [
  {
    key: '20mm-gun-stand',
    name: '20MM Gun Maintenance Stand',
    partNumber: 'X20075010',
    zitecPartNumber: 'Z20MM453-10',
    description: 'The 20MM Gun Maintenance Stand is used to perform maintenance and testing of a 20MM gun system. \n\n The 20MM Gun Maintenance Stand can be used on any flat surface or permanently mounted on a work bench to facilitate maintenance and testing on the 20MM gun. \n\n The stand allows technicians to perform maintenance on the gun in both the horizontal or vertical positions. While in the vertical position, the gun may be rotated 360 degrees and locked at 45 degree increments.'
  },
  {
    key: '275-rocket-storage-stand',
    name: '2.75" Rocket Storage Stand',
  },
  {
    key: 'ame-service-trailer',
    name: 'Alternate Mission Equipment (AME) Service Trailer',
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
    partNumber: 'X20173240',
  },
  {
    key: 'f-22-pylon-stand',
    name: 'F-22 Pylon Storage Stand',
    partNumber: 'X20065083',
  },
  {
    key: 'f-35-storage-rack',
    name: 'F-35 AME Mobility Ready Storage Rack',
    partNumber: 'X20122270-10',
  },
  {
    key: 'f-35-storage-system',
    name: 'F-35 AME Storage and Mobility System',
    partNumber: 'X20143164-10',
    zitecPartNumber: 'Z64039909-10',
    description: 'ZITEC\'s F-35 AME Storage and Mobility System offers users a convenient, organized, and proven method to store, maintain, and transport F-35 bomb racks, air-to-ground pylons, missile launchers, and other aircraft external stores. \n\n This two-part system is comprised of a "Buck", where AME items are secured for storage and transport, and an "Outer Frame", which is used to store and maintain AME when not in use or on the aircraft.'
  },
  {
    key: 'mac',
    name: 'Munitions Assembly Conveyor (MAC)',
  },
  {
    key: 'mac-jd-neuhaus',
    name: 'MAC Hoists - JS Neuhaus',
  },
  {
    key: 'mac-ingersoll-rand',
    name: 'MAC Hoists - Ingersoll Rand',
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
  },
  {
    key: 'mpcu-plus-uninterruptable',
    name: 'MPCU Plus with Uninterruptable Power Supply',
  },
  {
    key: 'munitions-table',
    name: 'Munitions Maintenance and Inspection Table',
    partNumber: '20075135',
    nationalStockNumber: '7195-01-590-6508',
    description: 'The Munitions Maintenance and Inspection Table is all aluminum and can be folded for storage or transport. It also has adjustable feet that can raise or lower the table height to accommodate different working conditions. \n\n It comes painted grey, but the top of the table is bare aluminum and can be grounded to process electically primed munitions. \n\n The table\'s empty weight is 170 lbs, and its maximum capacity is 750 lbs. '
  },
  // Six Inch Rubber Rollers and Universal Extender Assemblies
  {
    key: 'roller-mhu-83',
    name: 'Rubber Roller for MHU-83',
    partNumber: '200414151-10',
  },
  {
    key: 'roller-mj-1',
    name: 'Rubber Roller for MJ-1',
    partNumber: '200414151-30',
  },
  {
    key: 'roller-extender-assembly',
    name: 'Universal Extender Assembly',
    partNumber: '200334009',
  },
  {
    key: 'sdb-lift-bar',
    name: 'Small Diameter Bomb (SDB) Lightweight Lift Bar',
    partNumber: 'X20097192',
  },
  {
    key: 'ter-stand',
    name: 'Triple Ejection Rack Storage Stand',
  },
  {
    key: 'toolkit',
    name: 'Missile and Bomb Assembly and Maintenance Tool Kits',
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
