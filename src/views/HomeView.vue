<template>
  <div class="c">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize"
      status-icon>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          登录
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { loginApi } from '../api/index'
import { useRouter } from 'vue-router';

interface RuleForm {
  username: string
  password: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: 'demo',
  password: 'zh@hm#23',

})

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 4, max: 5, message: '账号为4-5个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 5, max: 10, message: '密码为5-10个字符', trigger: 'blur' },
  ],
})
const router = useRouter()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      loginApi(ruleForm).then((res: any) => {
        // console.log(res);
        localStorage.setItem('token', res.data.token)
        router.push('/about')

      })
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}


</script>


<style lang="scss" scoped>
.c {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>