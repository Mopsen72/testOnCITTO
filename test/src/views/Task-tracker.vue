<template>
  <div class="container">
    <div class="taskManager">
      <h1 class="taskManager__header">Задачи</h1>
      <div class="taskManager__box">
        <div
          class="taskManager__task"
          v-bind:key="task.id"
          v-for="task of tasks"
        >
          <p class="taskManager__id">ИД: {{ task.id }}</p>
          <p class="taskManager__capt">{{ task.caption }}</p>
          <p class="taskManager__desc">{{ task.description }}</p>
          <p class="taskManager__date">
            Дата: {{ task.date.getFullYear() }} {{ task.date.getMonth() }}
            {{ task.date.getDate() }}
          </p>
          <p class="taskManager__perform">
            Исполнитель: {{ task.performer.username }}
          </p>
        </div>
        <button class="taskManager__btn" v-on:click="openCreateForm">
          Создать задачу
        </button>
      </div>
      <div class="taskManager__create createForm">
        <form onsubmit="return false;" class="createForm__form">
          <label for="createTaskCapt" class="createForm__label"
            >Название задачи</label
          >
          <input
            type="text"
            id="createTaskCapt"
            class="createForm__input"
            v-model="createForm.caption"
          />
          <label for="createTaskDesc" class="createForm__label"
            >Описание задачи</label
          >
          <textarea
            type="text"
            id="createTaskDesc"
            class="createForm__input createForm__input_textarea"
            v-model="createForm.description"
          />
          <label for="createTaskDate" class="createForm__label"
            >Дата выполнения</label
          >
          <input
            type="date"
            id="createTaskDate"
            class="createForm__input"
            v-model="createForm.date"
          />
          <label for="createTaskIdPerform" class="createForm__label"
            >Идентификатор исполнителя</label
          >
          <input
            type="text"
            id="createTaskIdPerform"
            class="createForm__input"
            v-model="createForm.performer.id"
          />
          <div class="createForm__btnBox">
            <button class="createForm__btn" v-on:click="createTask">
              Создать
            </button>
            <button class="createForm__btn" v-on:click="openCreateForm">
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskManager",
  components: {},
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
    createForm() {
      return this.$store.getters.getCreateForm;
    },
  },
  methods: {
    openCreateForm() {
      document
        .querySelector(".taskManager__create")
        .classList.toggle("taskManager__create_active");
    },
    createTask() {
      this.$store.dispatch("createTask");
    },
  },
  mounted() {
    this.$store.dispatch("loadTask");
  },
};
</script>

<style lang="scss">
.taskManager {
  position: relative;
  &__header {
    margin-top: 40px;
  }
  &__task {
    display: flex;
    align-items: center;
    height: 48px;
    border-radius: 6px;
    &:hover {
      background-color: rgb(212, 241, 255);
    }
  }
  &__id {
    width: 120px;
  }
  &__capt {
    width: 240px;
  }
  &__desc {
    width: 390px;
  }
  &__date {
    width: 130px;
  }
  &__perform {
    width: 200px;
  }
  &__create {
    display: none;
    &_active {
      display: block;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 400px;
      left: 50%;
      animation-name: open-create-form;
      animation-duration: 1s;
    }
  }
  &__btn {
    box-sizing: border-box;
    padding: 5px 10px;
    background-color: rgb(215, 217, 241);
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #000;
    border-radius: 10px;
  }
}
.createForm {
  width: 340px;
  &__form {
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid rgb(202, 202, 202);
    border-radius: 20px;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
  }

  &__label {
    align-self: flex-start;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: rgb(112, 112, 112);
  }
  &__input {
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(70, 70, 70);
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #000;
    width: 300px;
    padding: 5px;
    &_textarea {
      resize: none;
    }
  }
  &__btnBox {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  &__btn {
    box-sizing: border-box;
    padding: 5px 10px;
    background-color: rgb(215, 217, 241);
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #000;
    border-radius: 10px;
  }
}
@keyframes open-create-form {
  0% {
    top: -400px;
  }
  100% {
    top: 400px;
  }
}
</style>
