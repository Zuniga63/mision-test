import { createRobot } from "./robot.js";

describe("createRobot", () => {
  test("value x is outter scope", () => {
    expect(() => createRobot(-1, 0)).toThrow();
  });

  test("value y is outter scope", () => {
    expect(() => createRobot(0, -1)).toThrow();
  });

  test("get value of x", () => {
    const robot = createRobot(3, 2);
    expect(robot.getX).toBe(3);
  });

  test("get value of y", () => {
    const robot = createRobot(3, 7);
    expect(robot.getY).toBe(7);
  });

  test("move up on y", () => {
    const robot = createRobot(0, 0);
    robot.moveUp();
    expect(robot.getY).toEqual(1);
  });

  test("move up on y and out of range", () => {
    const robot = createRobot(0, 10);
    expect(() => robot.moveUp()).toThrow();
  });

  test("move down on y", () => {
    const robot = createRobot(0, 1);
    robot.moveDown();
    expect(robot.getY).toEqual(0);
  });

  test("move down on y and out of range", () => {
    const robot = createRobot(0, 0);
    expect(() => robot.moveDown()).toThrow();
  });

  test("move the robot to right", () => {
    const robot = createRobot(0, 0);
    robot.moveRight();
    expect(robot.getX).toEqual(1);
  });

  test("move the robot to right and out of range", () => {
    const robot = createRobot(10, 10);
    expect(() => robot.moveRight()).toThrow();
  });

  test("move the robot to left", () => {
    const robot = createRobot(1, 0);
    robot.moveLeft();
    expect(robot.getX).toEqual(0);
  });

  test("move the robot to left and out of range", () => {
    const robot = createRobot(0, 0);
    expect(() => robot.moveLeft()).toThrow();
  });
});