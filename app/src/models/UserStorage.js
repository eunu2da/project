"use strict";

class UserStorage {
  static #users = {
    id: ["이은우", "테스트", "김팀장"],
    psword: ["1234", "test", "0000"],
    nams: ["우리밋", "네임", "이은우2"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
