export * from './listening';

export interface IValabularyItem {
  eng: {
    vord: string;
    partOfSpeach?: string;
    example?: Array<{value: string; id: string}>;
  };
  rus: {
    vord: string;
    example?: Array<{value: string; id: string}>;
  };
}

export enum LanguageEnum {
  eng = 'eng',
  rus = 'rus',
}
