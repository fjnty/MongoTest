import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

const state = {// 要设置的全局访问的state对象
  people: [{
    name: 'asdf',
    age: '23',
    birthday: '1992-03-07',
    email: 'ewij@qq.com'
  }]
  // 要设置的初始属性值
}

const getters = { // 实时监听state值的变化(最新状态)
  getPeople (state) {
    return state.people
  },
  // findPeople (state, peopleId) {
  //
  // }
  isShow (state) { // 方法名随意,主要是来承载变化的showFooter的值
    return state.showFooter
  },
  getChangedNum () { // 方法名随意,主要是用来承载变化的changableNum的值
    return state.changebleNum
  }
}
const mutations = {
  addPeople (state, people) {
    state.people.push(people)
  },
  deletePeople (state, people) {
    state.people.splice(state.people.indexOf(people), 1)
  },
  show (state) { // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.showFooter = true
  },
  hide (state) { // 同上
    state.showFooter = false
  },
  newNum (state, sum) { // 同上，这里面的参数除了state之外还传了需要增加的值sum
    state.changableNum += sum
  }
}

const actions = {
  addPeopleAction (context, people) {
    context.commit('addPeople', people)
  },
  getPeopleAction (context) {
    context.commit('getPeople')
  },
  hideFooter (context) { // 自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('hide')
  },
  showFooter (context) { // 同上注释
    context.commit('show')
  },
  getNewNum (context, num) { // 同上注释，num为要变化的形参
    context.commit('newNum', num)
  }
}
const store = new vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
