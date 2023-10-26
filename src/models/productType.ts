export enum ProductType {
    TwitchViewerPlan = 0,
    YoutubeViewBotPlan = 1,
    TrovoBotPlan = 2,
    TwitchFollower = 3,
    KickViewerPlan = 4,
}

export const ProductTypeDisplayNames: { [key in ProductType]: string } = {
    [ProductType.TwitchViewerPlan]: "Twitch Viewer Plan",
    [ProductType.YoutubeViewBotPlan]: "Youtube View Bot Plan",
    [ProductType.TrovoBotPlan]: "Trovo Bot Plan",
    [ProductType.TwitchFollower]: "Twitch Follower",
    [ProductType.KickViewerPlan]: "Kick Viewer Plan",
};

export function getProductTypeDisplayName(type: ProductType): string {
    return ProductTypeDisplayNames[type];
}