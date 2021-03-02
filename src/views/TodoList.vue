<template>
  <div class="todo-list tc m20">
    <h3 class="m10">Todo List</h3>
    <div class="flex fc ac">
      <input ref="todoinput" v-focus="200" v-model="addTodoName" />
      <a-button @click="addTodoAction" size="small" type="primary">新增清单</a-button>
    </div>
    <div>
      <h3 class="m10">任务清单</h3>
      <a-list>
        <a-list-item :key="item.id" v-for="item in undoneTodoList">
          <template #title>
            <span>---{{ item.name }}---</span>
          </template>
          <template #right-icon>
            <a-button @click="doneTodo(item)" size="small" type="success">已完成</a-button>
            <a-button @click="delTodoAction(item, true)" size="small" type="danger">删除</a-button>
          </template>
        </a-list-item>
      </a-list>
    </div>
    <div class="done-todo-area">
      <h3 class="m10">已完成的任务清单</h3>
      <a-list>
        <a-list-item :key="item.id" v-for="item in completedTodoList">
          <template #title>
            <span>---{{ item.name }}---</span>
          </template>
          <template #right-icon>
            <a-button @click="delTodoAction(item, false)" size="small" type="danger">删除</a-button>
          </template>
        </a-list-item>
      </a-list>
    </div>
    <div class="m10">
      <a-button @click="goAddress" block type="primary">地址列表</a-button>
    </div>
    <div class="m10 mt20">
      <a-button @click="goChat" block type="primary">聊天室</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, getCurrentInstance } from "vue";
// import { a-button, a-list-item, a-list } from "vant";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ToDoList",
  components: {
    // a-button,
    // a-list-item,
    // a-list,
  },
  setup() {
    const CurrentInstance = getCurrentInstance();
    const { push } = useRouter();
    const addTodoName = ref(""); // input 绑定值

    // 清单列表
    const undoneTodoList = reactive([
      {
        id: Date.now(),
        name: "吃饭",
      },
    ]);

    // 已完成的清单列表
    const completedTodoList = reactive([
      {
        id: Date.now(),
        name: "睡觉",
      },
    ]);

    const addTodoAction = () => {
      if (addTodoName.value === "")
        return (CurrentInstance?.refs?.todoinput as HTMLInputElement).focus();
      // if (addTodoName.value === "") return todoinput.focus();
      const obj = {
        id: Date.now(),
        name: addTodoName.value,
      };
      undoneTodoList.push(obj);
      addTodoName.value = "";
    };

    const delTodoAction = (item: { id: number }, todo: boolean) => {
      if (todo) {
        undoneTodoList.splice(
          undoneTodoList.findIndex((i) => i.id === item.id),
          1
        );
      } else {
        completedTodoList.splice(
          completedTodoList.findIndex((i) => i.id === item.id),
          1
        );
      }
    };

    const doneTodo = (item: { id: number; name: string }) => {
      undoneTodoList.splice(undoneTodoList.findIndex((i) => i.id === item.id), 1);
      completedTodoList.push(item);
    };

    function goAddress() {
      push("/about");
    }

    function goChat() {
      push("/");
    }

    return {
      addTodoName,
      addTodoAction,
      delTodoAction,
      doneTodo,
      undoneTodoList,
      completedTodoList,
      goAddress,
      goChat
    };
  },
});
</script>