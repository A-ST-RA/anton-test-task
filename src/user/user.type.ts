type DirectionType = {
    id: number;
    name: string;
}

type RankType = {
    id: number;
    name: string;
};

export type UserType = {
    id: number;
    name: string;
    rank: RankType;
    direvtion: DirectionType;
};
