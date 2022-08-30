// Зробити свій розпорядок дня.
//
//     У вас має бути більше ніж 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь-яка. При тому ваші дії мають бути синхронізовані.
//
//     Наприклад.
//     Прокинутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі...

function wakeUp(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Wake up');
    },700);
    });
}
function toWash(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Wash your face');
    },400);
    });
}
function getDressed(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Get clothes on');
    },100);
    });
}
function goToStadium(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Walk to stadium');
    },1000);
    });
}
function running(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Cardio and walking');
    },950);
    });
}
function takeAShower(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Taking shower after running');
    },650);
    });
}
function haveBreakfast(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Have a lunch');
    },730);
    });
}
function doHousework(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Doing some home stuff');
    },1500);
    });
}
function haveDinner(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Having taste dinner');
    },1200);
    });
}
function studying(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Having time on learning something');
    },1350);
    });
}
function workout(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Do some workouts');
    },570);
    });
}
function haveALecture(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Having lecture with Sergey');
    },930);
    });
}
function haveSupper(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Having light supper');
    },666);
    });
}
function goToSleep(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve('Going to sleep');
    },245);
    });
}

//Синхронізація за допомогою промісів
// wakeUp()
//     .then((value1) => {
//         console.log(value1);
//         return getDressed(value1);
//     })
//     .then((value2) => {
//         console.log(value2);
//         return goToStadium(value2);
//     })
//     .then((value3) => {
//         console.log(value3);
//         return running(value3);
//     })
//     .then((value4) => {
//         console.log(value4);
//         return takeAShower(value4);
//     })
//     .then((value5) => {
//         console.log(value5);
//         return haveBreakfast(value5);
//     })
//     .then((value6) => {
//         console.log(value6);
//         return doHousework(value6);
//     })
//     .then((value7) => {
//         console.log(value7);
//         return haveDinner(value7);
//     })
//     .then((value8) => {
//         console.log(value8);
//         return studying(value8);
//     })
//     .then((value9) => {
//         console.log(value9);
//         return workout(value9);
//     })
//     .then((value10) => {
//         console.log(value10);
//         return haveALecture(value10);
//     })
//     .then((value11) => {
//         console.log(value11);
//         return haveSupper(value11);
//     })
//     .then((value12) => {
//         console.log(value12);
//         return goToSleep(value12);
//     })
//     .then((final_value) => {
//         console.log(final_value);
//     });

//Синхронізація за допомогою async await
//
// async function dayRoutine(){
//     try {
//         const first_action = await wakeUp();
//         console.log(first_action);
//
//         const second_action = await toWash();
//         console.log(second_action);
//
//         const third_action = await getDressed();
//         console.log(third_action);
//
//         const fourth_action = await goToStadium();
//         console.log(fourth_action);
//
//         const fifth_action = await running();
//         console.log(fifth_action);
//
//         const sixth_action = await takeAShower();
//         console.log(sixth_action);
//
//         const seventh_action = await haveBreakfast();
//         console.log(seventh_action);
//
//         const eighth_action = await doHousework();
//         console.log(eighth_action);
//
//         const ninth_action = await haveDinner();
//         console.log(ninth_action);
//
//         const tenth_action = await studying();
//         console.log(tenth_action);
//
//         const eleventh_action = await workout();
//         console.log(eleventh_action);
//
//         const twelfth_action = await haveALecture();
//         console.log(twelfth_action);
//
//         const thirteenth_action = await haveSupper();
//         console.log(thirteenth_action);
//
//         const fourteenth_action = await goToSleep();
//         console.log(fourteenth_action);
//     } catch (e) {
//         console.log('Something went wrong');
//     }
// }
// dayRoutine();