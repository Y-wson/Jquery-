var aQuery=function () {
    return aQuery.prototype.init();
}
aQuery.prototype={
    init:function () {
        return this;
    }
}
console.log(aQuery.prototype.init());