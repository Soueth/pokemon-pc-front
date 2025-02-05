export const localStorageAvalible = () => {
    return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}