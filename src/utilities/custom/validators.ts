export const objectSanitizer = (obj: object | any) => {
    Object.keys(obj).forEach((key) => [undefined, '', null].includes(obj[key]) && delete obj[key])
    return obj
}