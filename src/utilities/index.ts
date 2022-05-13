// Used in main file components to check the file order the file is in
export const fileIndexCheck = (fileOrder: number[], fileId: number) => {
    let index = fileOrder.indexOf(fileId);
    return index
}
// Random check
export const randomNum = (num: number) => {
    return Math.floor(Math.random() * num) + 1
}