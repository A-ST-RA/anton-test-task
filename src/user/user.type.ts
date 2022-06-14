export type DirectionType = 'Back' | 'Front';

export type RankType = 'Junior' | 'Middle' | 'Senior';

export type UserType = {
    id: number;
    name: string;
    rank: RankType;
    direction: DirectionType;
};
