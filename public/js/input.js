import Keyboard from './KeyboardState.js';

export function setupKeyboard(mario) {
    const input = new Keyboard();

    ['KeyP', 'Space'].forEach(eventName => {
        input.addMapping(eventName, keyState => {
            if (keyState) {
                mario.jump.start();
            } else {
                mario.jump.cancel();
            }
        });
    })    

    input.addMapping('KeyO', keyState => {
        mario.turbo(keyState);
    });

    ['KeyD', 'ArrowRight'].forEach(eventName => {
        input.addMapping(eventName, keyState => {
            mario.go.dir += keyState ? 1 : -1;
        });
    });

    ['KeyA', 'ArrowLeft'].forEach(eventName => {
        input.addMapping(eventName, keyState => {
            mario.go.dir += keyState ? -1 : 1;
        });
    });

    return input;
}
