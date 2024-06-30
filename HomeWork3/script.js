let users = [
    {
        id: 1,
        name: 'Василий',
        role: 'user'
    },
    {
        id: 5,
        name: 'Анвар',
        role: 'admin'
    },
    {
        id: 2,
        name: 'Игорь',
        role: 'user'
    },
    {
        id: 3,
        name: 'Елена',
        role: 'user'
    },
    {
        id: 4,
        name: 'Владислав',
        role: 'user'
    },
    {
        id: 6,
        name: 'Виталий',
        role: 'user'
    },
    {
        id: 8,
        name: 'Николай',
        role: 'admin'
    },
    {
        id: 9,
        name: 'Светлана',
        role: 'user'
    },
    {
        id: 7,
        name: 'Андраник',
        role: 'user'
    },
    {
        id: 11,
        name: 'Джеймс',
        role: 'admin'
    },
    {
        id: 10,
        name: 'Гульнара',
        role: 'user'
    },
    {
        id:12,
        name: 'Полина',
        role: 'guest'
    }
]
//1) Проверка прав пользователя
//...........................................................
// function isAdmin(userId){
//     for(let user of users){
//         if(user.id == userId && user.role == 'admin'){
//             return true;
//         }
//     }
//     return false;

// }

// console.log(isAdmin(7));
// console.log(isAdmin(8));
// console.log(isAdmin(13));
//...........................................................

//2) Список имён
//...........................................................
// function getNames(){

//     let newUsers = [];
//     users.forEach(element => newUsers.push(element.name));
//     return newUsers;
// }

// console.log(getNames());
//...........................................................

//3*) Разделить по ролям
//...........................................................
function splitUsersByRole(){
    let userIds = [];
    let adminIds = [];

    for (let user of users) {
        if (user.role === 'user') {
            userIds.push(user.id);
        } else if (user.role === 'admin') {
            adminIds.push(user.id);
        }
    }

    return [userIds, adminIds];
}

function splitUsersByRoleUniversal() {
    let result = {};

    for (let user of users) {
        let role = user.role;
        if (!result[role]) {
            result[role] = [];
        }
        result[role].push(user.id);
    }

    return result;
}
console.log(splitUsersByRole());
console.log(splitUsersByRoleUniversal());