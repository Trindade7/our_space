export interface CardModel {
    id: string;
    message: string;
    textColor: string;
    backgroundColor: string;
    backgroundImageUrl: string;
    createdAt: {
        milliseconds: number;
        seconds: number;
    };
    createdBy: string;
}


export function newCard(card: CardModel = {
    id: '',
    createdAt: {
        milliseconds: new Date().getMilliseconds(),
        seconds: new Date().getSeconds()
    },
    backgroundColor: '#fff',
    backgroundImageUrl: '',
    message: '',
    textColor: '#000',
    createdBy: 'testing'
}): CardModel {
    return card;
}
export function mockCard(): CardModel {
    const newDate = new Date();
    return {
        id: randomString(3, ''),
        message: randomString(100),
        textColor: randomColor(),
        backgroundColor: randomColor(),
        backgroundImageUrl: 'https://placehold.it/100x100?text=user%20avatar',
        createdAt: {
            milliseconds: newDate.getMilliseconds(),
            seconds: newDate.getSeconds()
        },
        createdBy: 'testing'
    };
}


function randomString(maxWords = 4, separator = ' '): string {
    const words = [
        'Ad',
        'laborum',
        'tempor',
        'magna',
        'ut',
        'amet',
        'veniam',
        ',',
        'officia',
        'pariatur',
        'qui',
        'consectetur',
        'nostrud',
        'culpa',
        'reprehenderit',
        'non',
        'tempor',
        ',',
        'est',
        'irure',
        'officia',
        'Lorem',
        'officia',
        'Adipisicing',
        ',',
        'cupidatat',
        'dolor',
        'sunt',
        'Lorem',
        'incididunt',
        'non',
        'proident', '.',
        'non',
        'sunt',
        'excepteur',
        'est',
        'aute',
        'anim', '.',
        'Ex',
        'aliqua',
        'tempor',
        ',',
        'aute',
        'qui',
        'velit',
        'Proident',
        'velit',
        'et',
        'ea',
        'do',
        'cillum',
        'consectetur',
        'duis',
        'labore',
        'velit',
        'Sunt',
        'tempor',
        'dolore',
        'ullamco',
        ',',
        'ex',
        'consectetur',
        'excepteur',
        'consectetur',
        'commodo',
        'cupidatat',
        'proident',
        'est',
        'Officia',
        'elit',
        'minim',
        'elit',
        ',',
        'voluptate',
        'deserunt',
        'in',
        'do',
        'proident',
        'qui',
        'do',
        'ullamco',
        '.',
    ];

    const newPhrase = [];
    const phraseSize = Math.floor(Math.random() * maxWords);

    for (let i = 0; i < phraseSize; i++) {
        const wordIndex = Math.floor(Math.random() * words.length);
        newPhrase.push(words[wordIndex]);
    }

    return newPhrase.join(separator);
}

export function randomColor(): string {
    const colorIndex = Math.floor(Math.random() * PLACEHOLDER_COLORS.length);

    return PLACEHOLDER_COLORS[colorIndex];
}

const PLACEHOLDER_COLORS = [
    '#176ba3',
    '#ffa1a1b2',
    '#e7e7e7',
    '#ffa1a1b2',
    '#ffa1a1b2',
    '#ff6e6eb2',
    '#ff6e6eb2',
    '#15202b',
    '#ff3b3bb2',
    '#ffa1a1b2',
];
