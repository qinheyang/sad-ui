<template>
  <el-dialog :title="dialogFormTitle"
             :visible.sync="dialogFormVisible"
             :close-on-click-modal="$globeValue.clickModalClose"
             class="save-form-div"
             @closed=closed()>
    <el-form v-loading='loading'
             :model="saveForm"
             :rules="rules"
             ref="saveForm"
             label-width="100px"
             size="medium">
      <el-form-item prop="userName"
                    label="用户名">
        <el-input placeholder="请输入用户名"
                  v-model="saveForm.userName"
                  maxlength=50
                  auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="nickName"
                    label="昵称">
        <el-input placeholder="请输入昵称"
                  v-model="saveForm.nickName"
                  maxlength=50
                  auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="password"
                    label="密码"
                    auto-complete="off">
        <el-input type="password"
                  placeholder="请输入密码"
                  v-model="saveForm.password"
                  maxlength=20
                  auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="email"
                    label="邮箱">
        <el-input placeholder="请输入邮箱"
                  v-model="saveForm.email"
                  maxlength="50"
                  auto-complete="off">
        </el-input>
      </el-form-item>
      <el-form-item prop="phone"
                    label="电话号码">
        <el-input placeholder="请输入电话号码"
                  v-model="saveForm.phone"
                  maxlength="11"
                  auto-complete="off">
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer"
         class="dialog-footer">
      <el-button type="primary"
                 @click="submitForm('saveForm')">确 定</el-button>
      <el-button @click="cancel">取 消</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { addUser, updateUser, getUserInfo } from '@/api/system/user';
import regex from '@/utils/regex';
import { isEmpty } from '@/utils/string-util';
export default ({
  data () {
    var phoneValiadte = (rule, value, callback) => {
      if (regex.phone_regex(value) || isEmpty(value)) {
        callback();
      }
      callback(new Error("请输入正确格式的电话号码"));
    };
    var emailValiadte = (rule, value, callback) => {
      if (regex.email_regex(value) || isEmpty(value)) {
        callback();
      }
      callback(new Error("请输入正确格式的邮箱"));
    };
    return {
      saveForm: {
        id: undefined,
        userName: undefined,
        nickName: undefined,
        password: 123456,
        email: undefined,
        phone: undefined
      },
      loading: false,
      dialogFormVisible: false,
      dialogFormTitle: undefined,
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },

        ],
        nickName: [{
          required: true, message: '请输入昵称', trigger: 'blur',
        }],
        password: [{
          required: true, message: '请输入密码', trigger: 'blur'
        }],
        email: [{
          trigger: 'blur', validator: emailValiadte
        }],
        phone: [{
          trigger: 'blur', validator: phoneValiadte
        }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.loading = true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.saveForm.userId === undefined) {
            addUser(this.saveForm).then(() => {
              this.cancel();
              this.$globeValue.loadingDelay(this);
              this.$emit('refresh-list');
              this.$message.success("保存成功");
            })

          } else {
            updateUser(this.saveForm).then(() => {
              this.cancel();
              this.$globeValue.loadingDelay(this);
              this.$emit('refresh-list');
              this.$message.success("保存成功");
            })
          }


        } else {
          this.loading = false;
          return false;
        }
      });
    },
    resetForm (formName) {
      this.saveForm = {
        userId: undefined,
        userName: undefined,
        nickName: undefined,
        password: 123456,
        email: undefined,
        phone: undefined

      };
      this.$refs[formName].resetFields();

    },
    openDialog (userId) {
      if (userId === undefined) {
        this.dialogFormTitle = '用户新增';

      } else {
        this.dialogFormTitle = '用户修改';
        getUserInfo(userId).then((resp) => {
          this.saveForm = resp.data;
        })
      }
      this.dialogFormVisible = true;

    },

    cancel () {
      this.dialogFormVisible = false;
    },
    closed () {
      this.resetForm('saveForm');
    }

  }
})
</script>
