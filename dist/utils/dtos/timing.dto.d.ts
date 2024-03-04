export type OpeningTime = string;
export type ClosingTime = string;
export type OpeningClosingTime = [OpeningTime, ClosingTime];
export declare class Timing {
    MON?: OpeningClosingTime;
    TUE?: OpeningClosingTime;
    WED?: OpeningClosingTime;
    THU?: OpeningClosingTime;
    FRI?: OpeningClosingTime;
    SAT?: OpeningClosingTime;
    SUN?: OpeningClosingTime;
}
