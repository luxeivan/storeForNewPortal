import type { Schema, Attribute } from '@strapi/strapi';

export interface LichniyCabinetRol extends Schema.Component {
  collectionName: 'components_lichniy_cabinet_rol';
  info: {
    displayName: '\u0420\u043E\u043B\u044C';
  };
  attributes: {
    profil: Attribute.Relation<
      'lichniy-cabinet.rol',
      'oneToOne',
      'api::profile.profile'
    >;
    rol: Attribute.Relation<'lichniy-cabinet.rol', 'oneToOne', 'api::rol.rol'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'lichniy-cabinet.rol': LichniyCabinetRol;
    }
  }
}
