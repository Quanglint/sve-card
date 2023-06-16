
type Craft = "Dragon" | "Forest" | "Heaven" | "Neutral" | "Nightmare" | "Rune" | "Sword";
type CardType = "Follower" | "FollowerEvo" | "Spell" | "Amulet" | "Leader" | "AmuletToken" | "SpellToken" | "FollowerToken";
type Rarity = "BR" | "SR" | "GR" | "LG" | "UR";

interface CardData {
    name: string;
    imageSrc: string;
    cardType: CardType;
    craft: Craft;
    rarity: Rarity;
    attack?: number;
    defense?: number;
    cost?: number;
    desc?: string;
}

declare class Card {
    constructor(params: {
        data: CardData,
        canvas: HTMLCanvasElement,
    });
}

declare namespace SVECard {
    export {
        Card,
    }
}

export = SVECard;
