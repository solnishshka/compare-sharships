export const checkNaN = (value: string): string | number => {
    return Number.isNaN(parseInt(value)) ? 'n/a' : parseInt(value);
}