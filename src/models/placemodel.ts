/** @format */

interface IChurchAbout {
    text: string;
}
interface IChurchStory {
    title: string;
    content: string;
    color: string;
}
interface IChurchGallery {
    src: string;
    alt: string;
}
interface IChurchLocalizedData {
    name: string;
    miniDesc: string;
    location: string;
    aboutHeading: string;
    storyHeading: string;
    photoHeading: string;
    about: IChurchAbout[];
    story: IChurchStory[];
}
interface IChurch {
    id: string;
    type: string;
    en: IChurchLocalizedData;
    ru: IChurchLocalizedData;
    hy: IChurchLocalizedData;
    galleryChurch: IChurchGallery[];
}
export type { IChurch };
