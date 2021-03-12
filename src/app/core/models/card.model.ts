export interface CardBackgroungModel {
    color: string;
    imageUrl: string;
    size: number;
    repeat: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
    positionX: 'left' | 'center' | 'right';
    positionY: 'top' | 'center' | 'bottom';
}
export interface CardFontModel {
    color: string;
    fontFamily: string;
    size: number | 'inherit';
    fontWeight: 200 | 300 | 500 | 900 | 'inherit';
    italic: boolean;
    strokeSize: number | 'inherit';
    strokeColor: string;
}

export interface CardModel {
    id: string;
    message: string;
    textColor: string;
    textStrokeColor: string;
    background: CardBackgroungModel,
    createdAt: {
        milliseconds: number;
        seconds: number;
    };
    creator: {
        id: string;
        name: string,
        email: string;
    };
    font?: CardFontModel;
}


export function newCard(cardIn?: CardModel): CardModel {
    const card: CardModel = Object.assign({
        id: '',
        createdAt: {
            milliseconds: new Date().getMilliseconds(),
            seconds: new Date().getSeconds()
        },
        background: {
            color: '#fff',
            imageUrl: '',
            size: 400,
            repeat: 'no-repeat',
            positionX: 'left',
            positionY: 'bottom',
        },
        message: '',
        textColor: '#000',
        textStrokeColor: 'transparent',
        font: newCardFont(),
        creator: {
            id: randomString(1),
            name: 'testing',
            email: 'trindade.jose77@gmail.com'
        },
    }, cardIn);

    return card;
}

export function mockCard(): CardModel {
    const newDate = new Date();
    return {
        id: randomString(1),
        message: randomString(100),
        textStrokeColor: 'transparent',
        textColor: randomColor(),
        background: mockBackground(),
        createdAt: {
            milliseconds: newDate.getMilliseconds(),
            seconds: newDate.getSeconds()
        },
        creator: {
            id: randomString(1),
            name: 'testing',
            email: 'trindade.jose77@gmail.com'
        },
        font: newCardFont()
    };
}

export function createColorBackground(color: string): CardBackgroungModel {
    return {
        color: color,
        imageUrl: '',
        size: 0,
        repeat: 'no-repeat',
        positionX: 'left',
        positionY: 'bottom',
    };
}

export function mockBackground(): CardBackgroungModel {
    return {
        color: randomColor(),
        imageUrl: 'https://placehold.it/100x100?text=user%20avatar',
        size: 400,
        repeat: 'no-repeat',
        positionX: 'left',
        positionY: 'bottom',
    };
}

export function newCardFont(font?: Partial<CardFontModel>): CardFontModel {
    return {
        color: font?.color ?? 'inherit',
        fontFamily: font?.fontFamily ?? 'inherit',
        size: font?.size ?? 'inherit',
        fontWeight: font?.fontWeight ?? 'inherit',
        italic: font?.italic ?? false,
        strokeSize: font?.strokeSize ?? 'inherit',
        strokeColor: font?.strokeColor ?? 'inherit',
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
