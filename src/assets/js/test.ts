

export function add(arg0: number, arg1: number): Promise<number> {
    return new Promise((resolve) => {
        resolve(arg0 + arg1)
    })
}