export function formatNumber(num: number | string): string {
    const str = String(num)

    if (str.length <= 3) return str

    return formatNumber(str.slice(0, str.length - 3)) + " " + str.slice(str.length - 3)
}

export function formatDate(str: string): string {
    try {
        const [y, m, d] = str.split("-")
        return d + "." + m + "." + y
    } catch (error) {
        return "-"
    }
}