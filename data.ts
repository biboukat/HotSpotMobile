export interface IValabularyItem {
  eng: {
    vord: string;
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

export const data: IValabularyItem[] = [
  {
    eng: {
      vord: 'lead (verb)',
      example: [
        {value: 'to lead a discussion', id: '1'},
        {value: 'to lead a busy life', id: '2'},
      ],
    },
    rus: {
      vord: 'вести, руководить, направлять',
      example: [
        {value: 'направлять разговор', id: '1'},
        {value: 'вести занятую жизнь', id: '2'},
      ],
    },
  },
  {
    eng: {
      vord: 'quality (noun)',
      example: [
        {value: 'poor/low quality', id: '1'},
        {value: 'hight quality', id: '2'},
      ],
    },
    rus: {
      vord: 'качество',
      example: [
        {value: 'низкое качество', id: '1'},
        {value: 'высокое качество', id: '2'},
      ],
    },
  },
  {
    eng: {
      vord: 'tool (noun)',
      example: [{value: 'an effective tool', id: '1'}],
    },
    rus: {
      vord: 'инструмент',
      example: [{value: 'эффективный инструмент', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'responsibility (noun)',
      example: [{value: 'to take resposibility', id: '1'}],
    },
    rus: {
      vord: 'ответственность',
      example: [{value: 'взять на себя ответственность', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'patient (adjective)',
      example: [{value: 'a patient teacher', id: '1'}],
    },
    rus: {
      vord: 'терпеливый',
      example: [{value: 'терпеливый учитель', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'patience (noun)',
      example: [{value: 'to have a lot of patience', id: '1'}],
    },
    rus: {
      vord: 'терпение',
      example: [{value: 'иметь много терпения', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'reduce (verb)',
      example: [
        {value: 'to reduce words', id: '1'},
        {value: 'to reduce the cost', id: '2'},
      ],
    },
    rus: {
      vord: 'уменьшать, сокращать',
      example: [
        {value: 'сокращать слова', id: '1'},
        {value: 'сщкращать стоимость', id: '2'},
      ],
    },
  },
  {
    eng: {
      vord: 'resist (verb)',
      example: [{value: 'to resist a plan', id: '1'}],
    },
    rus: {
      vord: 'сопротивляться',
      example: [{value: 'сопротивляться плану', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'score (noun)',
      example: [{value: 'a hight score', id: '1'}],
    },
    rus: {
      vord: 'счет оценка',
      example: [{value: 'высокая оценка', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'hold (verb)',
      example: [
        {value: 'to hold a baby', id: '1'},
        {value: 'to hold a confereence', id: '2'},
      ],
    },
    rus: {
      vord: 'держать (в руках), проводить (мероприятие)',
      example: [
        {value: 'держать ребенка', id: '1'},
        {value: 'проводить мероприятие', id: '2'},
      ],
    },
  },
  {
    eng: {
      vord: 'regret (verb)',
      example: [{value: 'to regret a desicion', id: '1'}],
    },
    rus: {
      vord: 'сожалеть',
      example: [{value: 'сожалеть о решение', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'ability (noun)',
      example: [{value: 'to have an ability', id: '1'}],
    },
    rus: {
      vord: 'способность',
      example: [{value: 'иметь способность', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'punishment (noun)',
      example: [{value: 'to deserve punishment', id: '1'}],
    },
    rus: {
      vord: 'наказание',
      example: [{value: 'заслуживать наказание', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'pill (noun)',
      example: [{value: 'to take a pill', id: '1'}],
    },
    rus: {
      vord: 'таблетка',
      example: [{value: 'принять таблетку', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'option (noun)',
      example: [{value: 'to have several options', id: '1'}],
    },
    rus: {
      vord: 'вариант',
      example: [{value: 'иметь несколько вариантов', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'embarrassed (adjective)',
      example: [{value: 'Why do you feel embarrassed?', id: '1'}],
    },
    rus: {
      vord: 'стыдящийся, пристыженый',
      example: [{value: 'Почему тебе стыдно?', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'kidnap (verb)',
      example: [{value: 'to kidnap a child', id: '1'}],
    },
    rus: {
      vord: 'похитить (человека)',
      example: [{value: 'похитить ребенка', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'damage (verb)',
      example: [{value: 'to damage a car', id: '1'}],
    },
    rus: {
      vord: 'нанести ущерб, повредить',
      example: [{value: 'повредить машину', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'single (adjective)',
      example: [
        {value: "She's single", id: '1'},
        {value: "I didn't hear a single word", id: '2'},
      ],
    },
    rus: {
      vord:
        'единственный, неженатый / незамужний, не состоящий в романтических отношениях',
      example: [
        {value: 'Она не замужем', id: '1'},
        {value: 'Я не слышал ни единого слова', id: '2'},
      ],
    },
  },
  {
    eng: {
      vord: 'trade (verb)',
      example: [{value: 'to trade with China', id: '1'}],
    },
    rus: {
      vord: 'торговать',
      example: [{value: 'торговать с Китаем', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'satisfied (adjective)',
      example: [{value: 'a satisfied teacher', id: '1'}],
    },
    rus: {
      vord: 'удовлетворенный, довольный',
      example: [{value: 'довольный учитель', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'obvious (adjective)',
      example: [{value: 'an obvious answer', id: '1'}],
    },
    rus: {
      vord: 'очевидный',
      example: [{value: 'очевидный ответ', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'compare (verb)',
      example: [{value: 'to compare scores', id: '1'}],
    },
    rus: {
      vord: 'сравнивать',
      example: [{value: 'сравнивать оценки', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'steal (verb)',
      example: [{value: 'to steal a bag', id: '1'}],
    },
    rus: {
      vord: 'украсть',
      example: [{value: 'украсть сумку', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'rent (verb)',
      example: [{value: 'to rent an apartment', id: '1'}],
    },
    rus: {
      vord: 'снимать / сдавать в аренду',
      example: [{value: 'снимать / сдавать квартиру', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'thick (adjective)',
      example: [
        {value: 'a thick sweateer', id: '1'},
        {value: 'a thick forest', id: '2'},
      ],
    },
    rus: {
      vord: 'толстый, плотный, густой',
      example: [
        {value: 'толстый свитер', id: '1'},
        {value: 'густой лес', id: '2'},
      ],
    },
  },
  {
    eng: {
      vord: 'attitude (noun)',
      example: [{value: 'a bad attitude', id: '1'}],
    },
    rus: {
      vord: 'отношение',
      example: [{value: 'плохое отношение', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'matter (verb)',
      example: [{value: "it doesn't matter", id: '1'}],
    },
    rus: {
      vord: 'иметь значение',
      example: [{value: 'Это неважно', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'apologize (verb)',
      example: [{value: 'to apologize to your mother', id: '1'}],
    },
    rus: {
      vord: 'просить прощение',
      example: [{value: 'просить прощение у матери', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'waste (verb)',
      example: [{value: 'to waste time', id: '1'}],
    },
    rus: {
      vord: 'тратить попусту',
      example: [{value: 'тратить время попусту', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'poor (adjective)',
      example: [
        {value: 'a poor man', id: '1'},
        {value: 'poor quality', id: '2'},
        {value: 'poor eyesight', id: '3'},
      ],
    },
    rus: {
      vord: 'бедный, слабый, плохой',
      example: [
        {value: 'бедный человек', id: '1'},
        {value: 'плохое качество', id: '2'},
        {value: 'плохое зрение', id: '3'},
      ],
    },
  },
  {
    eng: {
      vord: 'insurance (noun)',
      example: [{value: 'to get a insurance', id: '1'}],
    },
    rus: {
      vord: 'страховка',
      example: [{value: 'получить страховку', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'approval (noun)',
      example: [{value: 'to give approval', id: '1'}],
    },
    rus: {
      vord: 'одобрение',
      example: [{value: 'выразить одобрение', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'value (verb)',
      example: [{value: 'to value advice', id: '1'}],
    },
    rus: {
      vord: 'ценить',
      example: [{value: 'ценить советы', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'perform (verb)',
      example: [{value: 'to perform on stage', id: '1'}],
    },
    rus: {
      vord: 'выступать, выполнять свои функции',
      example: [{value: 'выступать на сцене', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'recipe (noun)',
      example: [{value: 'a nice recipe', id: '1'}],
    },
    rus: {
      vord: 'рецепт',
      example: [{value: 'хороший рецепт', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'carry (verb)',
      example: [{value: 'to carry a bag', id: '1'}],
    },
    rus: {
      vord: 'нести',
      example: [{value: 'нести сумку', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'deserve (verb)',
      example: [{value: 'to deserve punishment', id: '1'}],
    },
    rus: {
      vord: 'заслуживать',
      example: [{value: 'заслужить наказание', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'vote (verb)',
      example: [{value: 'to vote for Obama', id: '1'}],
    },
    rus: {
      vord: 'голосовать',
      example: [{value: 'голосовать за Обаму', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'be in charge of sth',
    },
    rus: {
      vord: 'быть ответственным, отвечать за что-то',
    },
  },
  {
    eng: {
      vord: 'ask sb out',
      example: [{value: 'Are you asking me out', id: '1'}],
    },
    rus: {
      vord: 'позвать на свидание, позвать гулять',
      example: [{value: 'Ты приглашаешь меня на свидание', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'fill sth in/out',
      example: [{value: 'Please, fill in / out this form', id: '1'}],
    },
    rus: {
      vord: 'заполнить',
      example: [{value: 'Пожалуйста, заполните этот бланк', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'grow up',
      example: [{value: 'When are you going to grow up', id: '1'}],
    },
    rus: {
      vord: 'вырасти, повзраслеть',
      example: [{value: 'Когда ты повзрослеешь?', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'find out',
      example: [{value: 'He is going to find out about it', id: '1'}],
    },
    rus: {
      vord: 'узнать',
      example: [{value: 'Он узнает об этом', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'drop by',
      example: [{value: 'Can you drop by on your way to work', id: '1'}],
    },
    rus: {
      vord: 'зайти, заскочить',
      example: [{value: 'Можешь зайти по дороге на работу', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'turn out to + V',
      example: [{value: 'He turned out to be rich', id: '1'}],
    },
    rus: {
      vord: 'оказаться',
      example: [{value: 'Оказалось, что он богат', id: '1'}],
    },
  },
  {
    eng: {
      vord: 'set of',
      example: [{value: 'What time do we set off tomorrow?', id: '1'}],
    },
    rus: {
      vord: 'отправляться (в путишествие)',
      example: [{value: 'В котором часу мы завтра отправляемся?', id: '1'}],
    },
  },
];
