export * from './listening';

export interface IValabularyById {
  [key: string]: IValabularyItem;
}
export interface IValabularyItem {
  id: string;
  eng: {
    vord: string;
    partOfSpeach?: string;
    example?: Array<{value: string; id: string}>;
  };
  rus: {
    vord: string;
    partOfSpeach?: string;
    example?: Array<{value: string; id: string}>;
  };
}

export enum LanguageEnum {
  eng = 'eng',
  rus = 'rus',
}
