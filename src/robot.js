
const createRobot = (x, y) => {
//     // lanza error si x o y están fuera de los límites (0 a 10)

    let _x = x;
    let _y = y;

    if( _x < 0 || _x > 10){
        throw 'El valor de X debe estar entre 0 y 10'
    }else if( _y < 0 || _y > 10 ){
        throw 'El valor de Y debe estar entre 0 y 10'
    }
   
    return {
        moveUp: () => [_x, _y += 1],
        moveDown: () => [_x, _y -= 1],
        moveLeft: () => [_x -= 1, _y],
        moveRight: () => [_x += 1, _y],
        getX: () => [_x],
        getY: () => [_y],


       // moveUp - incrementa y en 1
       // moveDown - decrementa y en 1.
       // moveLeft - decrementa x en 1.
       // moveRight - incrementa x en 1
       // getX - retorna x
       // getY - retorna y
    }
  }

  module.exports = {createRobot}