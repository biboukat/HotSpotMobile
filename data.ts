export const data: IValabularyItem[] = [
  {
    eng: 'lead (verb)',
    rus: 'вести, руководить, направлять',
    exampleEng: ['to lead a discussion', 'to lead a busy life'],
    exampleRus: ['направлять разговор', 'вести занятую жизнь'],
  },
  {
    eng: 'quality (noun)',
    rus: 'качество',
    exampleEng: ['poor/low quality', 'hight quality'],
    exampleRus: ['низкое качество', 'высокое качество'],
  },
  {
    eng: 'tool (noun)',
    rus: 'инструмент',
    exampleEng: ['an effective tool'],
    exampleRus: ['эффективный инструмент'],
  },
  {
    eng: 'responsibility (noun)',
    rus: 'ответственность',
    exampleEng: ['to take resposibility'],
    exampleRus: ['взять на себя ответственность'],
  },
  {
    eng: '',
    rus: '',
    exampleEng: [],
    exampleRus: [],
  },
];

export interface IValabularyItem {
  eng: string;
  rus: string;
  exampleEng?: string[];
  exampleRus?: string[];
}
