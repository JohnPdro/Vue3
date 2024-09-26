import Emoji from "./Emoji";

export default interface Entry {
    id: number;
    body: string;
    emoji: Emoji | null;
    createAt: Date;
    userId: number;
}