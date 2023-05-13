type Modifiers = { [key: string]: boolean }
type ExtraClasses = string[]

function bem(block: string, modifiers: Modifiers, extraClasses?: ExtraClasses): string
function bem(block: string, element: string, modifiers: Modifiers, extraClasses?: ExtraClasses): string
function bem(
    block: string, element: string | Modifiers, modifiers?: Modifiers | ExtraClasses, extraClasses?: ExtraClasses): string {
    let baseClass = block
    let classes = ''
    if (typeof element === 'string') {
        baseClass += `__${element}`
    } else if (typeof element === 'object') {
        extraClasses = modifiers as ExtraClasses
        modifiers = element
        element = null
    }
    classes += baseClass
    if (modifiers) {
        for (const [key, value] of Object.entries(modifiers)) {
            if (value) {
                classes += ` ${baseClass}--${key}`
            }
        }
    }
    if (extraClasses) {
        extraClasses.forEach((extraClass) => {
            classes += ` ${extraClass}`
        })
    }
    return classes
}

export default bem

//  Пример использования:
// <div className={bem('app', {[theme]: true})}/>