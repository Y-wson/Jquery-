var aQuery=function () {
    return new aQuery.prototype.init();
}
aQuery.prototype={
    init:function () {
        this.age=20;
        return this;
    },
    age:18,
    name:20
}
aQuery.prototype.init.prototype=aQuery.prototype;
console.log(aQuery().age);


