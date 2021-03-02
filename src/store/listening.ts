import {action, makeObservable, observable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  listeningWeek6ById,
  listeningWeek6Ids,
} from '~/data';

const hardToLearnStorageKey = 'hardToLearnStorageKey';
export class ListeningStore {
  constructor() {
    makeObservable(this);
    this.getStorageData();
  }

  private async getStorageData() {
    try {
      const hardToLearnStorageData = await AsyncStorage.getItem(
        hardToLearnStorageKey,
      );
      if (hardToLearnStorageData !== null) {
        this.hardToLearn = JSON.parse(hardToLearnStorageData);
      }
    } catch (e) {
      console.error(
        `async storage error getItem with key -> ${hardToLearnStorageKey}`,
        e,
      );
    }
  }

  @observable baseLnaguage: LanguageEnum = LanguageEnum.eng;
  @observable weeek1Ids: Array<string> = listeningWeek1Ids;
  @observable weeek2Ids: Array<string> = listeningWeek2Ids;
  @observable weeek5Ids: Array<string> = listeningWeek5Ids;
  @observable weeek6Ids: Array<string> = listeningWeek6Ids;
  @observable hardToLearn: {[key: string]: boolean} = {};

  @observable wordsById: IValabularyById = {
    ...listeningWeek1ById,
    ...listeningWeek2ById,
    ...listeningWeek5ById,
    ...listeningWeek6ById,
  };

  @action changeBaseLanguage() {
    if (this.baseLnaguage === LanguageEnum.eng) {
      this.baseLnaguage = LanguageEnum.rus;
    } else {
      this.baseLnaguage = LanguageEnum.eng;
    }
  }

  @action changeHardToLearnStatusByWordId(id: string) {
    if (this.hardToLearn[id]) {
      delete this.hardToLearn[id];
    } else {
      this.hardToLearn[id] = true;
    }

    AsyncStorage.setItem(
      hardToLearnStorageKey,
      JSON.stringify(this.hardToLearn),
    );
  }

  @action clearHardToLearn() {
    this.hardToLearn = {};
    AsyncStorage.setItem(hardToLearnStorageKey, JSON.stringify({}));
  }

  getWordById(id: string): IValabularyItem {
    return this.wordsById[id];
  }

  getWeekIds(weekNumber: string): Array<string> {
    switch (weekNumber) {
      case 'hardToLearn':
        return Object.keys(this.hardToLearn);
      case 'week1':
        return this.weeek1Ids;
      case 'week2':
        return this.weeek2Ids;
      case 'week5':
        return this.weeek5Ids;
      case 'week6':
        return this.weeek6Ids;

      default:
        return [];
    }
  }
}
