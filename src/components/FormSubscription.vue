<script setup>
import Title from './Title.vue'
import {ref} from 'vue';
import {ElMessage} from 'element-plus';

// Данные формы
const formData = ref({
  name: '',
  email: '',
});

// Правила валидации
const rules = {
  name: [
    {required: true, message: 'Имя обязательно для заполнения.', trigger: 'blur'},
    {min: 2, message: 'Имя должно быть не менее 2 символов.', trigger: 'blur'},
  ],
  email: [
    {required: true, message: 'Email обязателен для заполнения.', trigger: 'blur'},
    {
      type: 'email',
      message: 'Введите корректный email.',
      trigger: ['blur', 'change'],
    },
  ],
};

// Референс формы
const formRef = ref(null);

// Флаг успешной отправки
const submitted = ref(false);

// Обработка отправки формы
const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      console.log('Подписка оформлена:', formData.value);
      ElMessage.success('Подписка успешно оформлена!');
      submitted.value = true;

      // Очистка формы
      onReset();
    } else {
      ElMessage.error('Пожалуйста, исправьте ошибки в форме.');
    }
  });
};

// Сброс формы
const onReset = () => {
  formRef.value.resetFields();
  submitted.value = false;
};
</script>

<template>
  <section class="main__form form-subscription">
    <div class="form-subscription__container">
      <div class="form-subscription__left">
        <div class="left-wrapper">
          <div class="form-subscription__title">
            <Title title="Узнавайте первыми"/>
          </div>
          <p class="form-subscription__description">
            Подпишитесь на новостную рассылку с самыми интересными новостями и акциями
          </p>
          <div class="feedback-form">
            <el-form
                :model="formData"
                :rules="rules"
                ref="formRef"
                label-width="80px"
                class="form-container"
            >
              <!-- Поле для имени -->
              <el-form-item label="Имя" prop="name">
                <el-input
                    class="input input-name"
                    v-model="formData.name"
                    placeholder="Введите ваше имя"
                ></el-input>
              </el-form-item>

              <!-- Поле для email -->
              <el-form-item label="Email" prop="email">
                <el-input
                    class="input input-email"
                    v-model="formData.email"
                    placeholder="Введите ваш email"
                ></el-input>
              </el-form-item>

              <!-- Кнопка отправки -->
              <el-form-item
              >
                <el-button class="form-subscription__button" type="primary" @click="onSubmit">Подписаться</el-button>
              </el-form-item>
            </el-form>

            <!-- Уведомление об успешной отправке -->
            <el-alert
                v-if="submitted"
                title="Форма успешно отправлена!"
                type="success"
                show-icon
                class="success-message"
            />
          </div>
        </div>
      </div>
      <div class="form-subscription__right">
        <img src="/public/form-img.png" alt="subscribe" class="subscribe-img">
      </div>

    </div>
  </section>
</template>

<style scoped>

.form-subscription__container {
  width: 100%;
  max-height: 562px;
  display: flex;
  justify-content: space-between;
}

.form-subscription__left,
.form-subscription__right {
  width: 50%;
}

.form-subscription__left {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.left-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 704px;
  padding: 0 90px;
}

.form-subscription__title {
  margin-bottom: 20px;
}

.form-subscription__description {
  font-size: 25px;
  text-align: left;
  line-height: 29px;
  color: #3E424B;
}

.form-subscription__right img {
  width: 100%;
  height: 100%;
}


.feedback-form {
  max-width: 400px;
  width: 100%;
  padding: 20px 0;
}
.feedback-form .el-form-item {
  display: flex;
  flex-direction: column;
}



.feedback-form .input {
  height: 70px;
}


.success-message {
  margin-top: 20px;
}

.form-subscription__button {
  align-items: center;
}

.form-subscription__button {
  padding: 25px;
  font-size: 16px;
  cursor: pointer;
  background-color: #eeeeee;
  color: #BB8C5F;
  border: 1px solid #BB8C5F;
  border-radius: 0;
  transition: all 0.3s ease-in-out;
  outline: none;
}

.form-subscription__button:hover {
  background-color: #BB8C5F;
  color: #ffffff;
}

</style>