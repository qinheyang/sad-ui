<template>
  <el-dialog :title="dialogFormTitle"
             :visible.sync="dialogFormVisible"
             class="save-form-div"
             :close-on-click-modal="$globeValue.clickModalClose"
             @closed=closed()>
    <el-form v-loading='loading'
             :model="saveForm"
             :rules="rules"
             ref="saveForm"
             label-width="100px"
             size="medium">
      <el-form-item prop="roleName"
                    label="角色名">
        <el-input placeholder="请输入角色名"
                  v-model="saveForm.roleName"
                  maxlength=50
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
import { updateRole, addRole, getRoleInfo } from '@/api/system/role';
export default ({
  data () {
    return {
      saveForm: {
        roleId: undefined,
        roleName: undefined,
      },
      loading: false,
      dialogFormVisible: false,
      dialogFormTitle: undefined,
      rules: {
        roleName: [
          { required: true, message: '请输入角色名', trigger: 'blur' },

        ],
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.loading = true;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.saveForm.roleId === undefined) {
            addRole(this.saveForm).then(() => {
              this.cancel();
              this.$globeValue.loadingDelay(this);
              this.$emit('refresh-list');
              this.$message.success("保存成功");
            })

          } else {
            updateRole(this.saveForm).then(() => {
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
        roleId: undefined,
        roleName: undefined,
      };
      this.$refs[formName].resetFields();

    },
    openDialog (roleId) {
      if (roleId === undefined) {
        this.dialogFormTitle = '角色新增';

      } else {
        this.dialogFormTitle = '角色修改';
        getRoleInfo(roleId).then((resp) => {
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
