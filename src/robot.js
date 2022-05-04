/**
 * @param {Number} x
 * @param {Number} y
 * @returns {object}
 */
export const createRobot = (x, y) => {
  const validateX = (x) => {
    if (x < 0 || x > 10) throw "El valor de X debe estar entre 0 y 10";
  };

  const validateY = (y) => {
    if (y < 0 || y > 10) throw "El valor de Y debe estar entre 0 y 10";
  };

  validateX(x);
  validateY(y);

  let _x = x;
  let _y = y;

  return {
    moveUp() {
      _y++;
      validateY(_y);
    },
    moveDown() {
      _y--;
      validateY(_y);
    },
    moveLeft() {
      _x--;
      validateX(_x);
    },
    moveRight() {
      _x++;
      validateX(_x);
    },
    get getX () {
      return _x;
    },
    get getY(){
      return _y;
    }
  };
};
