/**
 * Created by zhanghongtao on 2017/7/8.
 */

let EventEmitter = require('events'); //导入events库

class Main extends EventEmitter{
    constructor(){
        super();
    }
}
let man = new Main();
function buyCar(who,who1) {console.log('买车给'+who+who1);}
function buyPack(who,who1) {console.log('买包给'+who+who1);}
man.once('有钱',buyCar);
man.once('有钱',buyPack);
man.once('有钱',buyPack);
man.once('有钱',buyPack);
// man.removeListener('有钱',buyPack);
// man.removeListener('有钱',buyPack);
// man.removeListener('有钱',buyPack);
man.emit('有钱','妹子','妹子2');
man.emit('有钱','妹子','妹子2');