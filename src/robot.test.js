const { createRobot } =  require("./robot");



describe('createRobot', () => {

    test('value x is outter scope', () => {
        try{
            createRobot(-1,0);
        }catch(error){
            expect(error).toEqual('El valor de X debe estar entre 0 y 10')
        }
    })

    test('value y is outter scope', () => {
        try{
            createRobot(0,12);
        }catch(error){
            expect(error).toEqual('El valor de Y debe estar entre 0 y 10')
        }
    })

    test('move up on y', () => {
        const moveUpY = createRobot(0,0).moveUp;
        expect(moveUpY()).toEqual([0,1]);
    })

    test('move up on y', () => {
        const moveUpY = createRobot(0,0).moveUp;
        moveUpY();
        expect(moveUpY()).toEqual([0,2]);
    })

    test('move down on y', () => {
        const moveDownY = createRobot(0,1).moveDown;
        expect(moveDownY()).toEqual([0,0]);
    })

    test('move left on x', () => {
        const moveLeftX = createRobot(1,0).moveLeft;
        expect(moveLeftX()).toEqual([0,0]);
    })

    test('move right on x', () => {
        const moveRightX = createRobot(0,0).moveRight;
        expect(moveRightX()).toEqual([1,0]);
    })

    test('get value of x', () => {
        const getValueX = createRobot(3,2).getX;
        expect(getValueX()[0]).toBe(3);
    })

    test('get value of y', () => {
        const getValueY = createRobot(3,7).getY;
        expect(getValueY()[0]).toBe(7);
    })
}) 