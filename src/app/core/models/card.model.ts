export interface CardModel {
    id: string;
    message: string;
    textColor: string;
    textStrokeColor: string;
    backgroundColor: string;
    backgroundImageUrl: string;
    backgroundSize: number;
    backgroundRepeat: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
    backgroundPositionX: 'left' | 'center' | 'right';
    backgroundPositionY: 'top' | 'center' | 'bottom';
    createdAt: {
        milliseconds: number;
        seconds: number;
    };
    createdBy: string;
    creator?: {
        name: string,
        email: string;
    };
}


export function newCard(cardIn?: CardModel): CardModel {
    const card = Object.assign({
        id: '',
        createdAt: {
            milliseconds: new Date().getMilliseconds(),
            seconds: new Date().getSeconds()
        },
        backgroundColor: '#fff',
        backgroundImageUrl: '',
        backgroundSize: 400,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'left',
        backgroundPositionY: 'bottom',
        message: '',
        textColor: '#000',
        textStrokeColor: 'transparent',
        createdBy: 'testing'
    }, cardIn);

    return card;
}
export function mockCard(): CardModel {
    const newDate = new Date();
    return {
        id: randomString(3, ''),
        message: randomString(100),
        textStrokeColor: 'transparent',
        textColor: randomColor(),
        backgroundColor: randomColor(),
        backgroundImageUrl: 'https://placehold.it/100x100?text=user%20avatar',
        backgroundSize: 400,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'left',
        backgroundPositionY: 'bottom',
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
