import { classNames } from './classNames';

describe('classNames', () => {
    test('With only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('With additional class', () => {
        const toBe = 'someClass class1 class2';

        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(toBe);
    });

    test('With mods true', () => {
        const toBe = 'someClass hovered scrollable class1 class2';

        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(toBe);
    });

    test('With mods false', () => {
        const toBe = 'someClass hovered class1 class2';

        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(toBe);
    });

    test('With mods undefined', () => {
        const toBe = 'someClass hovered class1 class2';

        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(toBe);
    });
});
