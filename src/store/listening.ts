import {action, makeObservable, observable} from 'mobx';

import {
  IValabularyById,
  IValabularyItem,
  LanguageEnum,
  listeningWeek1ById,
  listeningWeek1Ids,
  listeningWeek2ById,
  listeningWeek2Ids,
  listeningWeek5ById,
  listeningWeek5Ids,
} from '~/data';

export class ListeningStore {
  constructor() {
    makeObservable(this);
  }
  @observable baseLnaguage: LanguageEnum = LanguageEnum.eng;
  @observable weeek1Ids: Array<string> = listeningWeek1Ids;
  @observable weeek2Ids: Array<string> = listeningWeek2Ids;
  @observable weeek5Ids: Array<string> = listeningWeek5Ids;

  @observable wordsById: IValabularyById = {
    ...listeningWeek1ById,
    ...listeningWeek2ById,
    ...listeningWeek5ById,
  };

  @action changeBaseLanguage() {
    if (this.baseLnaguage === LanguageEnum.eng) {
      this.baseLnaguage = LanguageEnum.rus;
    } else {
      this.baseLnaguage = LanguageEnum.eng;
    }
  }

  getWordById(id: string): IValabularyItem {
    return this.wordsById[id];
  }

  getWeekIds(weekNumber: string): Array<string> {
    switch (weekNumber) {
      case 'week1':
        return this.weeek1Ids;
      case 'week2':
        return this.weeek2Ids;
      case 'week5':
        return this.weeek5Ids;

      default:
        return [];
    }
  }
}
