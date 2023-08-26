export type Mods = Record<string, boolean | string | undefined>;

export const styleMaker = (mainClass: string, additional: string[] = [], mods: Mods = {}): string => [
    mainClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter((item) => Boolean(item[1]))
        .map(([className]) => className),
].join(' ');
