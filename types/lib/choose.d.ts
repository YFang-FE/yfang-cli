export declare type Answer = {
    projectType: string;
    VueVersion?: string;
    LibraryType?: string;
};
declare enum RepoKey {
    LibraryTS = "LibraryTS",
    LibraryJS = "LibraryJS",
    Vue2 = "Vue2",
    Vue3TS = "Vue3TS",
    React = "React",
    ReactTS = "ReactTS",
    Vue2Admin = "Vue2Admin"
}
declare type RepoKeyKey = keyof typeof RepoKey;
export declare const RepoAddressMap: Record<RepoKeyKey, string>;
declare const chooseType: () => Promise<Answer>;
export default chooseType;
