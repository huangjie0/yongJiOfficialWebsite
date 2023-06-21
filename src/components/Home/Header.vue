<template>
  <div>
    <div class="header">
      <div class="header_logo_img" @click="goHome">
        <img src="@/assets/img/header/logo.jpg" alt="" />
      </div>
      <div class="header_right">
        <div class="header_right_1">
          <div class="header_right_content">
            <div class="contact" @click="joinUs()"><i class="el-icon-phone-outline" style="margin-right: 5px;"></i>加入我们
            </div>
            <div class="about" @click="goToYongJi()"><i class="el-icon-s-custom" style="margin-right: 5px;"></i>走进永基</div>
            <div>
              <div>
                <el-input placeholder="搜索..." v-model="input3" class="input">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      input3: '',
    }
  },
  props: {
        TalentRecruitment: Array,
        recruitmentTotal: Number
  },
  methods: {
    joinUs() {
      this.$router.push({
        name: 'moreTalentRecruitment',
        query: {
          item: JSON.stringify(this.TalentRecruitment),
          total: JSON.stringify(this.recruitmentTotal)
        }
      })
    },
    goToYongJi() {
      this.$router.push('/learnMore')
    },
    goHome() {
      this.$router.push('/home')
    }
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-input .el-input__inner {
  border-color: #DCDFE6 !important;
}

.login {
  color: #7c8389;
  font-size: 14px;
}

.login:hover {
  cursor: pointer;
  color: #46a8b3;
  text-decoration: underline;
}

/deep/ .el-input-group__append {
  background-color: white;
}

/deep/ .el-input__inner {
  height: 30px;
}

.header {
  width: 100%;
  height: 70px;
  position: relative;

  .header_right {
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .header_right_1 {
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;

      .header_right_content {
        width: 100%;
        height: 45%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .contact,
        .about {
          color: #7c8389;
          font-size: 14px;
        }
      }
    }
  }

  .contact:hover {
    text-decoration: underline
  }

  .about:hover {
    text-decoration: underline;
  }

  .about:hover {
    cursor: pointer;
    color: #2c7dc3 !important;
  }

  .contact:hover {
    cursor: pointer;
    color: #2c7dc3 !important;
  }

  .header_logo_img {
    width: 5%;
    height: 100%;
    position: absolute;
    left: 200px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }
}</style>