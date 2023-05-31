type Modifiers = { [key: string]: boolean }
type ExtraClasses = string[]

function bem(block: string, modifiers: Modifiers, extraClasses?: ExtraClasses): string
// eslint-disable-next-line no-redeclare
function bem(block: string, element: string | null, modifiers: Modifiers, extraClasses?: ExtraClasses): string
// eslint-disable-next-line no-redeclare
function bem(block: string, element: string | Modifiers  | null, modifiers?: Modifiers | ExtraClasses | undefined | null, extraClasses?: ExtraClasses): string {
    let baseClass = block;
    let classes = '';
    if (typeof element === 'string') {
        baseClass += `__${element}`;
    } else if (typeof element === 'object') {
        // eslint-disable-next-line no-param-reassign
        extraClasses = modifiers as ExtraClasses;
        // eslint-disable-next-line no-param-reassign
        modifiers = element;
        // eslint-disable-next-line no-param-reassign
        element = null;
    }
    classes += baseClass;
    if (modifiers) {
        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of Object.entries(modifiers)) {
            if (value) {
                classes += ` ${baseClass}--${key}`;
            }
        }
    }
    if (extraClasses) {
        extraClasses.forEach((extraClass) => {
            classes += ` ${extraClass}`;
        });
    }
    return classes;
}

export default bem;

//  Пример использования:
// <div className={bem('app', {[theme]: true})}/>
