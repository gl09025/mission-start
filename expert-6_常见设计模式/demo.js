//1.构造函数 constructor

function Person(name,sex) {
    this.name = name
    this.sex = sex
}

Person.prototype.sayName = function () {
    console.log(this.name)
}

var student = new Person('ganli',20)

// //2.工厂模式

function createPerson(name) {
    var person = {
        name: name,
        sayName: function () {
            console.log(this.name)
        }
    }
    return person
}

createPerson('ganli')

//3.单例模式
var People = (function () {
    var instance
    function initName(name) {
        return {
            name: name
        }
    }
    return {
        createPeople: function (name) {
            if (!instance) {
                instance = initName(name)
            }
            return instance
        }
    }
}())

console.log(People.createPeople('jirengu'))
console.log(People.createPeople('jirengu'))

//4.混合模式

var Person = function (name,age) {
    this.name = name
    this.age = age
}

Person.prototype = {
    sayName: function () {
        console.log(this.name)
    }
}

var Student = function (name,age,score) {
    Person.call(this,name,age)
    this.score = score
}

Student.prototype = create(Person.prototype)

function create(parentObj) {
    function F() {}
    F.prototype = parentObj
    return new F()
}

Student.prototype.sayScore = function () {
    console.log(this.score)
}

var student = new Student('ruoyu',28,90)

//5.模块模式

var Person = (function () {
    var name = 'ganli'
    function sayName() {
        console.log(name)
    }
    return {
        name: name,
        sayname: sayname
    }
}())

//6.订阅发布模式

var EventsCenter = (function () {
    var events = {}
    function on(evt,handler) {
        events[evt] = events[evt] || []
        events[evt].push({
            handler: handler
        })
    }

    function fire(evt,args) {
        if (!events[evt]) {
            return
        }
        for (let i = 0; i < events[evt].length; i++) {
            events[evt][i].handler(args)
        }
    }

    function off(evt) {
        delete events[evt]
    }
    return {
        on: on,
        fire: fire,
        off:off
    }
})()