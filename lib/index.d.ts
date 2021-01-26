interface Path {
    pathname: string;
    query: string;
    hash: string;
    path: string;
}
declare type PathSetter = string | Partial<Path>;
interface SetPath {
    (newPath: PathSetter, noRecord: boolean): void;
    (newPath: PathSetter): void;
}
export declare const usePath: () => [Path, SetPath, SetPath];
export {};
