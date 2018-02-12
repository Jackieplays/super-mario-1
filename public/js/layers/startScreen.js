export function createStartScreen(font) {
    const LINE1 = 8 * font.size;
    const LINE2 = LINE1 + 6 * font.size;
    const LINE3 = LINE1 + 10 * font.size;
    const LINE4 = LINE1 + 11 * font.size;
    const LINE5 = LINE1 + 12 * font.size;

    return function drawDashboard(context) {
        font.print('SUPER MARIO BROS', context, 4*16, LINE1);
        font.print('PRESS ANY BUTTON TO START', context, 2*16, LINE2);
        font.print('WASD TO MOVE', context, 5*16, LINE3);
        font.print('O    TO SPRINT', context, 5*16, LINE4);
        font.print('P    TO JUMP', context, 5*16, LINE5);
    };
}
