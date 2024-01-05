/**
 * 语法：@+函数名
 * target就是装饰的函数
 * 基于原型链来实现
 * 装饰器是可以叠加的
 */
const moveDecorator: ClassDecorator = (target: Function) => {
  target.prototype.getPosition = (): { x: number; y: number } => {
    return { x: 200, y: 300 };
  };
};

const musicDecorator: ClassDecorator = (target: Function) => {
  target.prototype.playMusic = () => {
    console.log("music is playing");
  };
};

@moveDecorator
@musicDecorator
class Tank {
  public getPosition() {}
  public playMusic() {}
}

class Player {}
console.log(2);

const tank = new Tank();
console.log(tank.getPosition());
console.log(tank.playMusic());
