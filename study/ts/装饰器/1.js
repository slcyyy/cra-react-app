"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 语法：@+函数名
 * target就是装饰的函数
 * 基于原型链来实现
 * 装饰器是可以叠加的
 */
const moveDecorator = (target) => {
    target.prototype.getPosition = () => {
        return { x: 200, y: 300 };
    };
};
const musicDecorator = (target) => {
    target.prototype.playMusic = () => {
        console.log("music is playing");
    };
};
let Tank = class Tank {
    getPosition() { }
    playMusic() { }
};
Tank = __decorate([
    moveDecorator,
    musicDecorator
], Tank);
class Player {
}
console.log(2);
const tank = new Tank();
console.log(tank.getPosition());
console.log(tank.playMusic());
