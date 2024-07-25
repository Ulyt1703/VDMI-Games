/* let numberFirst = 0
while(numberFirst < 1500 ){
    console.log(numberFirst)
    numberFirst += 1
}  */

/* let numberFirst = 63
while(numberFirst <  100){
    console.log(numberFirst)
    numberFirst += 1
} */

/* let pass =''
do {
    pass = prompt("ведіть пароль не менше 5 символів")
} while (pass.length < 5  )
console.log(pass) */

/* let num = 50 
for(let i = 0; i++ ){
    if(i % 2 !==0){
        console.log(i)
    }
}
 */

/* let num = ''
do{
    num = Number(prompt('num'))
}while(num < 100){
    console.log('')
} */


/* let mark = 12
for(i = mark; i > 0; i--){
    if(i === 7){
        break
    }
    console.log(i)
} */

/* let employees = 5
totalSalary = 0
for(let i = 0; i < employees; i++){
    let randomaze = Math.floor(Math.random()*(5000 - 500) + 500 )
        totalSalary += randomaze
}
console.log(totalSalary); */


/* let user = prompt("вдедіть пароль")
let message
do {
    user = prompt("ведіть пароль")
    if (userPassword === null) {
        message = 'Скасовано користувачем!'
    } else if (userPassword === ADMIN_PASSWORD) {
        message = 'Ласкаво просимо!'
    } else {
        message = 'Доступ заборонений, невірний пароль!'
    }
    alert(message)
    
} while (user.length === "ADMIN_PASSWORD")

 */


/* let numberFirst = 9
for (let i = 0; i <= numberFirst; i++){
    console.log(i*numberFirst)
} */


/* let numberFirst = 0 
for(let i = 10; i >= numberFirst; i-- ){
setTimeout(function(){  
    console.log(i)
    },(10 - i)*1000)
} */



/* let credits = 23580;
let pricePerPazzle  = 3000; 
let puzzleCount = Number.parseInt(prompt("Кількість пазлів: "))
if(puzzleCount !== NaN){
    alert('Скасовано користувачем!')
}else if(  puzzleCount < 0){
    alert("Ви вели некоретне число")
}else if( puzzleCount * pricePerPazzle > credits){
    alert("У вас не вистачає кредитів")
}else if(puzzleCount === 0){
    alert ("Введіть кількість пазлів більше ніж нуль.")
}else if(puzzleCount * pricePerPazzle <= credits){
    let totalPrice = credits -
puzzleCount * pricePerPazzle
    alert ("У вас залишилося: " +totalPrice)
}

 */

/* let height = 5
for(i = 0; i <= height; i++){
    let hooles 
    let tree 

    for(j = 0;j < height; j++ ){
        hooles = hooles + 
    }
}
let a 
let b 
 */




/* let total = 0;
while(true){
    let input = prompt("натисни canel")
    if(input === null){
        alert("полная сумма " + total)
        break
    }else if(!isNaN(nput))
    total += input(input)
}
    
    else{ 
        alert("нормально пиши")
    
    
}
    
 */


/* let numbers = [1, 2, 5, 7, 8,]
let names = ["lera", "vara","valeriy", "kirill"]
names.length = 2
names[6] = "qweerty"
console.log(names) */



/* let nums = [1,6,9,11]
for(let i = 0;i < nums.length; i++){
    console.log(nums[i])
} */
/* 
let numbers = []
for(let i = 0;i < 10; i++ ){
    numbers.push(i)

}
console.log(numbers) */

/* let cars = ["Toyota", "bmwy" , "merin", "volcwagen"]
for(let car of cars){
console.log(car);
}
 */

/* let objects = "povens"
for(let objects of object ){
    console.log(objects)
} */

/* let matrix = [
    [5,6,8],
    [9,10,11],
    [12,13,14],
]
console.log(matrix[0][0]) */


/* const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;
for(let i = 0; i < cart.length; i++){
    total += cart[i] 
}
console.log(total) */

/* let Arr1 = [1,5,"4","hello"]
let Arr2 = ["true",2, {}, ["a"],222 ]

console.log(Arr1[1] + Arr2[1]) */

/* let array = ["true",2, {}, ["a"],222 ]
for(let arr of array  )
console.log(typeof arr); */

/* const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
for(let i = 0;i < numbers.length; i++ ){
    if(numbers[i] % 2 === 0 ){
        total += numbers[i]
    }
}
console.log(total) */

/* const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let sum1 = 0
let sum2 = 0
for(let i = 10; i < array1,array2.length; i++){
sum1 +=  array1[i]
}
for(let j = 10; j < array1,array2.length; i++){
    sum1 +=  array1[i]
}
let sum = sum1 + sum2
console.log(sum) */

/* let logins = ["mango", "vhuvak","volume"]
let userlog = prompt("ведіть свої слова")
let loginfound = false
for(let i = 0; i < logins.length; i++){
    if(logins[i] === loginfound){
        loginfound = true
        alert("virniy")
    }
    else(
        alert("takogo nety")
    )
} */

/* let messege = "lorema a a cdd  dadda"
console.log(messege.split(' ')) */
/* let massive = ['anna', 'pola', 'nekit', 'nazar']
console.log(massive.join('==')); */
/* let main = ['rab', 'polina', 'i nasta)(']
console.log(main.indexOf('rab'))
let main2 = ['rab', 'polina', 'i nasta)(']
console.log(main2.includes('rab')) */
/* 
let masiveplotniy = ["i", '69', '+380' ]
masiveplotniy.push('01')
console.log(masiveplotniy); */

/* let massive = ['martin', 19023, 'klan', 'taburetka', 7878, 19083 ]
console.log(massive.slice(4,6))
 */
/* let pivo = ['martin', 19023, 'klan', 'taburetka', 7878, 19083 ]
pivo.slice(2,2,"auto","laptop")
console.log(pivo) */
/* let array6 = [129, 9000, undefined, {}, "string)"]
let array7 = [9000000, false, "red"]
let sum = array6.concat(array7)
console.log(sum) */
/* let rototo = ['summer','memas','bandura',88885553535, ]
rototo.push('fdfd')
rototo.unshift('ggghgh')
console.log(rototo) */

/* let cgisla = [1,2,3,4,5,6,7,8,9,10]
cgislopo = cgisla.slice[0,5]
console.log(cgislopo) */
/* let masa = [1,2,3,4,5]
console.log(masa.join(',')) */
/* let masa = [1,2,3,4,5]
console.log(masa.indexOf(1,2,3,4,5)) */



/* const title = 'Top 10 benefits of React framework';
title.split  ("")
console.log()
title.join("-")
console.log(title) */
/* 
let myArray = [1, 2, 3];
myArray[1] = 10;
console.log(myArray); */
/* let myArray = ["рядок1", "рядок2", "рядок3"];
myArray.push("новий рядок");
console.log(myArray); */

/* let myArray = [1, 2, 3, 4, 5];
let sumOfNumbers = myArray.reduce((acc, current) => acc + current, 0);
console.log(sumOfNumbers);
 */


/* let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
} */

/* let myArray = ["рядок1", "рядок2", "дужеДовгийРядок", "рядок4", "ще1Рядок"];
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].length > 5) {
        console.log(myArray[i]);
    }
}
 */

/* let myArray = [3, 7, 1, 10, 5, 8, 2, 9, 4, 6];
let maxValue = Math.max(...myArray);
console.log("Максимальне значення:", maxValue);
 */


/* const titlle =['Top 10 benefits of React framework']
titlle.slice
console.log(titlle.join('-')); */

/* let gra = ['miha', 'ivan','rab' ]
let mas = []
for(let i = 0;i < gra.length ; i++  ){
    mas.push(`${gra[i]}-$[i]`)
}

console.log(mas) */


/* const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0
let array3 = array1.concat(array2)
for(let i = 0;i < array3.length; i++  ){
    total += array3[i]
}
console.log(total) */

/* let arrayMusik = ['juzz', 'blues']
arrayMusik.push('RokandRoll')
arrayMusik.Math.floor(arrayMusik.length / 2)
arrayMusik.unshift('Реп','Реггі' )
console.log(arrayMusik) */
/* const message = 'Welcome to Ukraine!'
message.split */
 

/* function giveString(){
    return "privet"
}
console.log(giveString) */

/* let nameVlavilus = "василь"
function findNameVasia(){
    return " privet"  + nameVlavilus
}
console.log(nameVlavilus) */

/* 
function find(n,m){
    console.log(n*m)
    console.log(n+m)
    console.log(n-m)

}
find(5,6) */

/* function myAverageScore(arr){

    let sum = 0
    for(let i = 0;i < arr.lenght;i++ ){
        sum += arr[i]
    }
    let sckore = ''
    let averange = sum / arr.lenght
    if(averange >= 91 && averange <= 100){
        let sckore = 'a'
    }
    else if(averange >= 81 && averange <= 90){
        let sckore = 'b'
    }
    else if(averange >= 71 && averange <= 80){
        let sckore = 'c'
    }
    else if(averange >= 70 && averange <= 1){
        let sckore = 'd'
    }
    averange = Math.floor(averange)
    return sckore + ' ' + averange

}
console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96])); */

/* function  logItems(items){
    for(let i = 0;i < items.length; i++ ){
        console.log(items[i])
    }
}
logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);
 */



/* function findSmallesNumber(numbers){
    let firstNumber = numbers[0]
    for(let i = 0;i < numbers.length; i++){
        if(numbers[i] < firstNumber){
            firstNumber = numbers[i]
        }
    }
    return firstNumber
}
console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4 */

/* function changeCase(string){
    for(let i = 0;i < string.length; i++ ){
        if(string[i.toUpperCase() == string]){
            NewWord += string[i].toLowerCase()
        }
        else{
            NewWord +=string[i].toUpperCase()
        }
    }
    return NewWord
}
console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX */


/* 1
function logItems(array){
    for (let i = 0;i < array.length;i++)
    console.log(`[${i + 1}] - ${array[i]}`)
}
const myArray = ["Mango", "Poly", "Ajax"];
logItems(myArray) */

/* 3
    function findLongesword(string){
        let array = string.split("")
        array
    } */


    /* let logins = ['Mango', 'Poly', 'Ajax','qwerty' ]
    function addloginUser(allLogins,login){
        function isLoginValid(login){
            login.lenght <=4 && login.lenght<=16
            return

        }
        function isLoginsUnique(alllogins,Login){
            allLogins.incLudes(logins)
            return
        }
        if(!isLoginValid(login)){
            return "trba 4 do 16"

        }
        if(isLoginsUnique(allLogins,login)){
            return "ne podet"
        }
        allLogins.push(login)
        return "login podoydet"
    }
console.log(addloginUser(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addloginUser(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addloginUser(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addloginUser(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів' */

/* function show(show){
    setTimeout(("aoe")=>{
    show()
    },2000);
    show()
    console.log(gggg)
}
function ant(){
    setTimeout(()=>){
        console.log("sdasd")
    }
}
show(ant) */
/* let mass = [1,2,3,4,5]
function SumArray(array,callSum){
    let sum = 0
    for(let i = 0;i < array.length;i++ ){
        if(array[i] % 2 !== 0){
            sum += array[i]
        }
    }
    callSum(sum)
}
function callSum(result){
    console.log('number',result)
}
SumArray(mass,callSum) */

/* function multiplyArrayByNumber(array, number, callback) {
    let sum = [];
    for(let i = 0;i < array.length;i++){
        sum.push (array[i] * number)   
        

    }
    callback(sum)
    
}
const numbers = [1, 2, 3, 4, 5];
const multiplier = 2;
function multiplyByNumber(element) {
    console.log(element) ;
}
    multiplyArrayByNumber(numbers, multiplier, multiplyByNumber);
 */

    /* let objectStars = {
        name: "jonny deb",
        age : 58,
        moove: "pirati", 
        height: 189,
        
    }
    objectStars = {
        moove:"adcvard haahahah"
    }
    delete objectStars.name
    console.log(objectStars.age)
    
    console.log(objectStars)
 */

    /* let objectLessons = {
        name: "ICT", 
        time: 120,
        grade: "A",
        massageKey(){
            console.log(this.name,this.time,this.grade)
        }
    }
    objectLessons.massageKey() */
    /* let students = [
        { name: "Анна", age: 20, gender: "жінка", grade: 85 },
        { name: "Олег", age: 22, gender: "чоловік", grade: 78 },
        { name: "Марія", age: 21, gender: "жінка", grade: 92 },
        { name: "Іван", age: 23, gender: "чоловік", grade: 80 },
        { name: "Ольга", age: 19, gender: "жінка", grade: 88 },
    ]
    function vichuisSredniyBall (students){
        let mediumBall = 0
        for(let i = 0; i < students.length; i++){
            mediumBall += students[i].grade
        }
        let sum = mediumBall / students.length
        return sum
        
    }
    console.log(vichuisSredniyBall(students))
     */
    /* let book = {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Дистопія",
      
        // Метод для зміни значень властивостей
        changeProperty: function(prop, value) {
          if (prop in this) {
            this[prop] = value;
            console.log(`Значення властивості ${prop} було змінено на ${value}.`);
          } else {
            console.log(`Властивість ${prop} не існує у цьому об'єкті.`);
          }
        }
      };
      
      // Перевірка початкових значень властивостей
      console.log("Початкові значення:");
      console.log(book);
      
      // Зміна значень властивостей за допомогою методу
      book.changeProperty("title", "Animal Farm");
      book.changeProperty("author", "George Orwell");
      book.changeProperty("year", 1945);
      book.changeProperty("genre", "Алегорія");
      
      // Перевірка нових значень властивостей
      console.log("Нові значення:");
      console.log(book);
       */


      /* let restaurant = {
        name: "bendigts",
        cuisine: "Ital",
        address: "312",
        rating: 4.5,
        changeAddress(newAddress) {
            this.address = newAddress
        },
        changeRating(newRating) {
            this.rating = newRating
        }
    }
    console.log("Початкова адреса:", restaurant.address)
    console.log("Початковий рейтинг:", restaurant.rating)
    restaurant.changeAddress("45")
    restaurant.changeRating(4.1)
    console.log("Оновлена адреса:", restaurant.address)
    console.log("Оновлений рейтинг:", restaurant.rating) */


    /* let bankAccoun =  {
        ownerName: "bob" ,
        accountNumber: "867",
        balance:97567,

        deposit:function(depositCash){
            this.balance += depositCash
            console.log(this.balance + "groshi dodani na rahunok tochno")
            
        },
        snatie:function(){
            if(this.balance < snatie){
                console.log("стільки не має на балансі" + this.balance)
            }
        

            
            else{
                console.log("стільки грошей є на балансі " + balance)
            
            }
                
            
        }
    } */
    /* let stovp = {
        name: "antonio",
        age:100,
        ehe: " yahz", 
    }
    for(let i = 0; i < stovp.length;i++){
    }
    console.log(stovp)
    console.log(stovp.length) */
    /* let planet = {
        name: "merkcury",
        year: 88885553555,
        popular: "nemnogo dohli krisi",
        klimat:"suhoi"
    }
    let newPlanet = Object.keys(planet)
    console.log(newPlanet) */

    /* let numbers = {
        keyBirsday: 2200,
        keyYears : 15,
        keyHeight:187,

    }
    let newNumders = Object.values(numbers)
    console.log(newNumders)
    let xhils = Math.max(...newNumders)
    console.log(xhils) */
    /* let restaun = {
        name: 3123,
        cuiside:123123,
        adres:45134123,
    }
    let newRestoran = Object.keys(restaun)
    console.log(newRestoran)
    let tworestoran = Object.values(restaun)
    console.log(tworestoran)
 */

    /* const user = {
        name: 'Mango',
        age: 20,
        hobby: 'html',
        premium: true,
        
      }
    user.mood = 'happpy'
    user.hobby = 'uit'
    user.premium = false
    for()
    console.log(user) */



    
    /* const Transaction = {
        DEPOSIT: 'deposit',
        WITHDRAW: 'withdraw',
      };
      
      const account = {
        balance: 0,
        transactions: [],
        
        createTransaction(amount, type) {
        return {
            id: this.transactions.length + 1,
            amount,
            type,
        };
        },
      
        deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
        },
      
        withdraw(amount) {
        if (amount > this.balance) {
            console.log("Неможливо зняти таку суму. Недостатньо коштів.");
            return;
        }
    
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
        this.balance -= amount;
        },
    
        getBalance() {
        return this.balance;
        },
    
        getTransactionDetails(id) {
        return this.transactions.find(transaction => transaction.id === id);
        },
    
        getTransactionTotal(type) {
        return this.transactions
            .filter(transaction => transaction.type === type)
            .reduce((total, transaction) => total + transaction.amount, 0);
        },
    }; */

    /* const calculateTotalPrice = function (allProducts, productName) {
        for (const product of allProducts) {
            
          if (product.name === productName) {
            return product.price * product.quantity;
          }
        }
        return 0; // Повертаємо 0, якщо продукт не знайдено
      };
      
      console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроїд')); // 2800
 */

/* let hotel = {
    name :'dsad',
    stars :1112,
    food : "klasna",
}
let{name:hotelmane,stars,food,dekan} = hotel
console.log(hotelmane,stars,dekan   ) */

/* const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
    }
    let{name, ...rest} = user
    console.log(name)
    console.log(rest) */

    /* let car = {
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        features: ['power windows', 'rear camera', 'navigation'],
        safety: {
        airbags: true,
        antilock_brakes: true,
        stability_control: true
        }
        }
        
        let{
        make,
        model,
        year,
        features: [power, rear, nav],
        safety: {
        airbags,
        antilock_brakes: anti,
        stability_control: control,
        }
        } = car
        
        console.log(make, model, year, power, rear, nav, airbags, anti, control) */

        /* const movie = {
            title: 'The Shawshank Redemption',
            director: {
            name: 'Frank Darabont',
            nationality: 'American'
            },
            actors: ['Tim Robbins', 'Morgan Freeman'],
            release_year: 1994,
            ratings: {
            imdb: 9.3,
            rotten_tomatoes: 90
            }
            }
            let{
                title:poppada,
                director:{name,nationality},
                actors:[Timdasdaasd, Morganbuhlo],
                release_year:years,
                ratings:{imdb,rotten_tomatoes},

            } = movie
            console.log(title,director,actors,release_year,ratings) */

            /* const books = {
                count: 3,
                list: [
                {
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                year: 1925
                },
                {
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                year: 1960
                },
                {
                title: '1984',
                author: 'George Orwell',
                year: 1949
                }
                ]
                }
                let={
                    const,
                    list:[title,author,year],
                    
                        title:{ 'To Kill a Mockingbird',
                        author: 'Harper Lee',
                        year: 1960
                    }
                    }
                 */
                    /* const bankAccount = {
                        ownerName: "",
                        accountNumber: "",
                        balance: 0,
                        deposit: function(amount) {
                        this.balance += amount;
                        console.log(`Гроші успішно додані на рахунок. Залишок: ${this.balance}`);
                        },
                        withdraw: function(amount) {
                        if (this.balance >= amount) {
                            this.balance -= amount;
                            console.log(`Гроші успішно зняті з рахунку. Залишок: ${this.balance}`);
                        } else {
                            console.log("Недостатньо коштів на рахунку.");
                        }
                        }
                    };
                    
                      // Приклад використання методів
                    bankAccount.ownerName = "John Doe";
                    bankAccount.accountNumber = "123456789";
                      bankAccount.deposit(100); // Додаємо 100 грошей на рахунок
                      bankAccount.withdraw(50); // Знімаємо 50 грошей з рахунку
                    
                     */


                        /* let movie ={
                            titlle:"fast boots",
                            direcktor:"vin dizil",
                            year:2213,
                            ratninght: 9,
                            findRate(){
                                if (ratninght >= 8) {

                                    
                                }
                                else

                            }
                        } */
                        /* const book = {
                            title: 'To Kill a Mockingbird',
                            author: 'Harper Lee'
                            };
                        const readers = [
                            { name: 'Alice', booksRead: ['1984', 'To Kill a Mockingbird', 'The Catcher in the Rye'] },
                            { name: 'Bob', booksRead: ['To Kill a Mockingbird', 'Pride and Prejudice', 'The Great Gatsby'] },
                            { name: 'Charlie', booksRead: ['The Catcher in the Rye', 'The Great Gatsby', 'Brave New World'] }
                            ];
                            function checkBookReader(book, readers) {
                                for (const reader of readers) {
                                    if (reader.booksRead.includes(book.title)) {
                                        return `Книжку "${book.title}" прочитав(ла) ${reader.name}.`;
                                    }
                                }
                                return `Книжку "${book.title}" ще не прочитали.`;
                            }
                            
                            // Виклик функції
                            console.log(checkBookReader(book, readers));
                             */

                          /*   const person = {
                                name: 'Alice',
                                age: 25,
                                address: {
                                city: 'London',
                                country: 'UK',
                                coordinates: {
                                latitude: 51.5074,
                                longitude: -0.1278
                                }
                                },
                                interests: ['coding', 'reading', 'traveling'],
                                education: {
                                degree: 'Bachelor',
                                major: 'Computer Science',
                                university: 'University of London'
                                },
                                friends: [
                                {
                                name: 'Bob',
                                age: 27,
                                hobbies: ['football', 'painting']
                                },
                                {
                                name: 'Charlie',
                                age: 24,
                                hobbies: ['cooking', 'gardening']
                                },
                                {
                                name: 'David',
                                age: 26,
                                hobbies: ['photography', 'hiking']
                                },
                                {
                                name: 'Emma',
                                age: 25,
                                hobbies: ['dancing', 'yoga']
                                },
                                {
                                name: 'Frank',
                                age: 28,
                                hobbies: ['fishing', 'playing guitar']
                                },
                                {
                                name: 'Grace',
                                age: 23,
                                hobbies: ['writing', 'playing piano']
                                }
                                ]
                                }; */

    
    /* let nums = [1,2,3,4,6,5,]
    let newNums = nums.foreah(nums >= nums)
    console.log(nums) */
    /* let arr = [1,2,3,4,5,6,7]
    console.log(arr.find(namber => 2)  ) */

    /* const players = [
        { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
        { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
        { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
        { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
        { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
        ]
        console.log(players.filter(player => player.name)) */

        // Початковий масив поінтів
/* let points = [100, 150, 200, 250];

// Збільшення кількості поінтів кожного гравця на 10%
for (let i = 0; i < points.length; i++) {
    points[i] = Math.round(points[i] * 1.10);
}

// Виведення результату
console.log("Нова кількість поінтів:", points);
 */

/* const people = [
    { name: 'John', age: 32, occupation: 'programmer' },
    { name: 'Jane', age: 26, occupation: 'teacher' },
    { name: 'Mike', age: 42, occupation: 'engineer' },
    { name: 'Emily', age: 17, occupation: 'designer' }
    ];
    function pepoo (men){
        let numAduls = men.filter(men => men.age  > 17)
        let AdultsName = numAduls.map(numAduls => numAduls.name)
        return AdultsName
    }
    console.log(pepoo) */
    /* const array = [1,24,34,678,42234]
    function filterRange(arr,a,b){
    return arr.filter(item => item => a  & item <= b ); 

    }

    console.log(titlleFinal(array, 3, 10)) */

    /* const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
const array2 = [5,12, 3, 14, 4, 5, 6, 6, 7];
let arraySum = array1.concat(array2)
let corekctArray = arraySum.filter()

console.log(arraySum.filter(num  => num  > 0)) */

/* let numbers  = [1,2,3,4,412,5,6,7,78,999,1000]
function calculatorMegaPuper(sum){
    return sum.filter(number => number % 2 !== 0  )
}
console.log(calculatorMegaPuper(numbers)) */

/* const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];
function getFrutsMega(fruckti){
    return fruckti.map((word)=> word[0] = word[word.length - 1])

}
console.log(getFrutsMega(array2)) */

/* let chuVaki = [ */
    /* {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
    },
    {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
    },
    {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
    },
    {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
    },
    {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
    },
    {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
    },
    {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
    }, */
   /*  ]; */
    /* let usernamas = chuVaki.map(usernamas => usernamas.name)
    console.log(usernamas) */
    /* function userColorEye(users, eyecolor) {
        return users.filter(user => user.eyecolor === eyecolor);
    }
    
    console.log(userColorEye)
     */
    /* function invalidUsers(users) {
        return users.filter(user => !user.isActive);
    }
    console.log(invalidUsers)
    function emailUsers(users, email) {
        return users.find(user => user.email === email);
    }
    function userage(users, minAge, maxAge) {
        return users.filter(user => user.age >= minAge && user.age <= maxAge);
    }
    console.log(userage)
    function balanceuser(users) {
        return users.reduce((sumbalance, user) => sumbalance + user.balance, 0);
    }
    console.log(balanceuser) */

    /* const numbers = [5, 10, 15, 20, 25];
    let allnam = numbers.reduce((total,number) => {return total +- number},0)
    console.log(allnam) */

    /* let numbers =[
        {danill:1,
        zp: 1909,
        rik:1488,


        }
        
    ]
    let allnam = numbers.reduce((total,number))
    for(let user in numbers)(
        total +- numbers[numbers]
    )
    console.log(allnam) */

    /* const players = [
        { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
        { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
        { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
        { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
        { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
        ];
        players.sort(players.sort((a,b)=> a.timePlayed - b.timePlayed))
        console.log (players) */




        /* const arr = [
            { name: 'John', age: 32 },
            { name: 'Jane', age: 26 },
            { name: 'Mike', age: 42 },
            { name: 'Emily', age: 29 }
            ];
            
            
            let age = arr.sort((a,b) => a.age - b.age )
            console.log(age)
 */
    

            /* let total ={
                let one : 1000,
                let two : 2000,
                let three : 3000
                allmon = ( one, two,three) => {
                    return  one + two + three
                }
            }
            
            
            console. *//* log(allmon) */

            /* class person{
                constructor(firstName,lastName){
                    this.firstName=firstName
                    this.lastName=lastName

                }
                getFullName(){
                    alert(this.firstName + " " + this.lastName)
                }
            }
            let name = new person("makedonski,","Gdanskiy")
            name.getFullName() */
            /* class Redempti{
                constructor(withg,height){
                    this.withg=withg
                    this.height=height
                }
                getArea(){
                    return this.withg + this.height
                }
            }
            let info = new Redempti(10,10)
            console.log(info(getArea)) */

            /* class Calculator{
                constructor(a, b){
                    this.a = a
                    this.b = b
                }
                add(){
                    return this.a + this.b
                }
                subtract(){
                    return this.a - this.b 
                }
                multiply(){
                    return this.a * this.b
                }
                divide(){
                    return this.a / this.b
                }
            }
            let multi = new Calculator(9,10)
            console.log(multi.add())
            console.log(multi.subtract())
            console.log(multi.multiply())
            console.log(multi.divide())
 */
/* class Probukt{
    constructor(name,price,discount){
        this.name = name 
        this.price = price
        this.discount = discount
    }
    getDiscountPrice(){
        if(this.discount === 0){
            console.log("знижки не мае")

        }
        else{
            let discountSum = this.price
        }
    }
} */
/* class Bookstore {
    constructor(){
    this.books = []
    }
    addBook (book) {
    return this.books.push(book)
    }
    removeBook (book) {
    this.books.filter(oneBook => oneBook !== book)
    }
    listBooks() {
    this.books.forEach(booker => {
    `${booker.title}, ${booker.author}, ${booker.price}`
    })
    }
    }
    let newSome = new Bookstore()
    let newBook1 = new Book("Harry Pother", "Joanha Rouling", 100)
    let newBook2 = new Book("To Kill a Mockingbird", "Lee", 30)
    let newBook3 = new Book("Best book by Ivan", "Ivan Kohan", 40)
    newSome.addBook(newBook1)
    newSome.addBook(newBook2)
    newSome.addBook(newBook3)
    console.log(newSome.listBooks()) */

    /* class Account {
        constructor(login,email){
            this.login = login
            this.email = email
        }
        getInfo(){
            return `Login :${this.login},email :${this.email}`
        }
    }
    let newaccount = new Account("dadasd","dddddd")
    console.log(newaccount.getInfo()) */
    /* class User {
        constructor(name,age,folowers){
            this.name = name
            this.age = age
            this.folowers = folowers
        }
        getInfo(){
            console.log(User `${this.name} is ${this.age} years old and has ${this.followers} followers"`)
        }
        
    }
    const mango = new User('Mango', 2, 20)
    mango.getInfo() */

    /* class Storage {
        constructor(initialItems) {
            this.items = initialItems
        }
    
        getItems() {
            return this.items
        }
    
        addItem(item) {
            this.items.push(item)
        }
    
        removeItem(item) {
            const index = this.items.indexOf(item)
            if (index !== -1) {
                this.items.splice(index, 1)
            }
        }
    }
    const storage = new Storage(['apple', 'banana', 'orange'])
    console.log(storage.getItems()) */

    /* let bull = false
let centerX = window.innerWidth / 2
let centerY = window.innerHeight / 2
let block = document.querySelector('.block')
block.addEventListener('mousedown', function(){
bull = true
})
document.addEventListener('mousemove', function(event){
if(bull){
let X = event.clientX
let Y = event.clientY
let minusX = X - centerX
let minusY = Y - centerY
block.style.transform = `translate(${minusX}px,${minusY}px)`
}
})
document.addEventListener('mouseup', function(){
bull = false
}) */

/* let title = document.createElement('h1')
title.className = ' title'

title.textContent = "halom "
document.body.append(title)


let button = document.createElement('button')
title.className = 'button'

title.textContent = "shmak me pls "
document.body.append(button)

let img = document.createElement('img')
title.className = 'img'

document.body.append(img)
 */


/* let formContainer  = document.createElement('div')
document.body.appendChild(formContainer)
let emptty = document.createElement('ul')
formContainer.appendChild(emptty)
let inputOne = document.createElement('input')
inputOne.type = "text"
formContainer.appendChild(inputOne)

let button = document.createElement('button')
button.textContent = "click"
formContainer.appendChild(button)
button.addEventListener("click",function(){
    let notEmptty = document.createElement("li")
    let inputOne
    if(imputOne === " "){
        alert("please fill form")
    }
    else{
        notEmptty.textContent - inputOne
        emptty.appendChild(notEmptty)
    }
}) */
/* const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  /* ]; */
/* const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');
console.log(`У списку ${items.length} категорії.`);
items.forEach(item => {
const categoryTitle = item.querySelector('h2').textContent
const elementsCount = item.querySelectorAll('li').length
console.log(`Категорія: ${categoryTitle}`)
console.log(`Кількість елементів: ${elementsCount}`)
})
 */

/* let input = document.querySelector(".input-elements")
let buttonAdd = document.querySelector(".add-element")
let buttonRem = document.querySelector(".button remove")
let divSize = 30
let randomColor = Math.random() * 256 
function createBoxes(amount){
    let boxElemets = document.getElementById("boxes")
    let inputValue = input.value
    boxElemets.array.forEach(amount => {
        let divnew = document.createElement("div")
        divnew.style.width = `${divSize}px`
        divnew.style.height = `${divSize}px`
        divnew.style.color = `rgb(${randomColor},${randomColor},${randomColor})`
        divSize +- 10
    })

}
function destroyBox(boxesElements){
    boxElemets.innerHtml = ""
} */



    /* const image = document.querySelector('.main__img')
    
        window.addEventListener('scroll', () => {
        
            if(window.scrollY > 100){
                image.style.transform = `rotate(360deg)`
            }
            else{
                image.style.transform = `rotate(-360deg)`
            }
        })
        const tap = document.querySelector('.main__img')
    
        window.addEventListener('clickk', () => {
        
            if(tap.s > 1){
                if(window.scrollY > 100){
                    image.style.transform = `rotate(360deg)`
                }
                else{
                    image.style.transform = `rotate(-360deg)`
                }
            }
            if(tap.scrollX > 1){
                if(window.scrollX > 100){
                    image.style.transform = `rotateX(360deg)`
                }
                else{
                    image.style.transform = `rotateX(-360deg)`_
                }
            }
        }) */
/*     let button1 = document.querySelector(".main__calculator-any-button-titlle1")
    let button2 = document.querySelector(".main__calculator-any-button-titlle2")
    let button3 = document.querySelector(".main__calculator-any-button-titlle3")
    let button4 = document.querySelector(".main__calculator-any-button-titlle4")
    let button5= document.querySelector(".main__calculator-any-button-titlle5")
    let button6 = document.querySelector(".main__calculator-any-button-titlle6")
    let button7 = document.querySelector(".main__calculator-any-button-titlle7")
    let button8 = document.querySelector(".main__calculator-any-button-titlle8")
    let button9 = document.querySelector(".main__calculator-any-button-titlle9")
    let button0 = document.querySelector(".main__calculator-any-button-titlle0")
    let buttonplus = document.querySelector(".main__calculator-any-button-titlleplus")
    let buttonminus = document.querySelector(".main__calculator-any-button-titlle-")
    let buttondilen = document.querySelector(".main__calculator-any-button-titlledil")
    let buttonknopka = document.querySelector(".main__calculator-any-button-titlleknp")
    let result = document.querySelector(".main__calculator-any-button-titlle-result")
    let relog = document.querySelector(".main__calculator-any-button-titlle-relog")
    let win = sum
    let suma = document.querySelector(".main__calculator-any-text")
     */
    
const OPERATION = {
    sum:'+',
    subtract:'-',
    multi:'*',
    division:'/',


};


function calculete({a,b,operation}){
    let result = null;
    switch (operation) {
        case OPERATION.sum:
            result = sum(a,b)
            break;
            case OPERATION.subtract:
            result = subtract(a,b)
            break;
            case OPERATION.multi:
            result = multi(a,b)
            break;
            case OPERATION.division:
            result = division(a,b)
            break;
        default:
            break;
    }


    return result

}
