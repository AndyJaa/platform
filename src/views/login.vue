<template>
    <div id="page_login">
        <div class="bg-banner"/>
        <div class="igs-flex pre_box">
            <img src="../assets/images/logo_register.png" style="width: 32%; margin-top: 3%; margin-bottom: 0.2rem;">
            <div id="login-box">
                <div class="login-banner"/>
                <el-form ref="form" :model="form" :rules="rules" class="login-form" auto-complete="on"
                         label-position="left">
                    <div style="height: 12rem; display: flex; flex-direction: column; overflow-y: auto;">
                        <el-form-item prop="company" style="height: 2.4rem;">
                            <span class="tip_name">企业名称</span>
                            <el-input ref="name" v-model="form.company" placeholder="请输入公司名称" type="text" tabindex="1"
                                      auto-complete="on">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="credit" style="height: 2.4rem;">
                            <span class="tip_name">统一信用代码</span>
                            <el-input ref="name" v-model="form.credit" placeholder="请输入统一信用代码" type="text" tabindex="2"
                                      auto-complete="on">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="principal" style="height: 2.4rem;">
                            <span class="tip_name">业务负责人姓名</span>
                            <el-input ref="name" v-model="form.principal" placeholder="请输入负责人姓名" type="text"
                                      tabindex="3" auto-complete="on">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="phone" style="height: 2.4rem;">
                            <span class="tip_name">手机号码</span>
                            <el-input ref="name" v-model="form.phone" maxlength="11" placeholder="请输入手机号码" type="text" tabindex="4" onkeyup="this.value = this.value.replace(/[^\d.]/g,'');"
                                      auto-complete="on">
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="verification" style="height: 2.4rem;">
                            <span class="tip_name">验证码</span>
                            <el-input ref="name" v-model="form.verification" maxlength="6" placeholder="请输入验证码" type="text"
                                      tabindex="5" auto-complete="on">
                            </el-input>
                        </el-form-item>
                        <!--<el-form-item prop="password">-->
                        <!--<el-input ref="password" v-model="form.password" :type="passwordType" placeholder="密码" tabindex="2" auto-complete="on" @keyup.enter.native="handleLogin">-->
                        <!--</el-input>-->
                        <!--</el-form-item>-->
                    </div>
                    <!--<el-checkbox v-model="form.remember">记住我</el-checkbox>-->
                    <div class="igs-flex igs-flex2" style="height: 1rem; margin-top: 5px;">
                        <el-button :loading="loading" style="width: 50%;" @click.native.prevent="handleLogin('form')">登 录
                        </el-button>
                        <el-button :loading="loading" type="primary" style="width: 50%;"
                                   @click.native.prevent="handleLogin">注 册
                        </el-button>
                    </div>
                    <!--<div style="margin-top: 20px; margin-bottom: -10px; color: #666; font-size: 14px; text-align: center; font-weight: bold;">-->
                    <!--<span style="margin-right: 5px;">演示帐号一键登录：</span>-->
                    <!--<el-button type="danger" size="mini" @click="testAccount('admin')">admin</el-button>-->
                    <!--<el-button type="danger" size="mini" plain @click="testAccount('test')">test</el-button>-->
                    <!--</div>-->
                </el-form>
            </div>
        </div>
        <Copyright v-if="$store.state.settings.showCopyright"/>
    </div>
</template>

<script>
    import {isPhoneNumber} from '../util'

    export default {
        name: 'Login',
        data() {
            let checkPhone = (rule, value, callback) => {
                let isPhone = isPhoneNumber(value)
                if (!value || (value && value.length !== 11) || !isPhone) {
                    return callback(new Error('请输入正确的手机号'))
                } else {
                    callback();
                }
            }
            return {
                title: process.env.VUE_APP_TITLE,
                form: {
                    account: localStorage.login_account || '',
                    company: '',
                    credit: '',
                    principal: '',
                    phone: '',
                    verification: '',
                    password: '',
                    remember: !!localStorage.login_account
                },
                rules: {
                    company: [
                        {required: true, trigger: 'blur', message: '请输入公司名称'}
                    ],
                    credit: [
                        {required: true, trigger: 'blur', message: '请输入统一信用代码'}
                    ],
                    principal: [
                        {required: true, trigger: 'blur', message: '请输入负责人姓名'}
                    ],
                    phone: [
                        {validator: checkPhone, trigger: 'blur'},
                        // {required: true, trigger: 'blur', message: '请输入手机号码'},
                        // {min: 11, max: 11, trigger: 'blur', message: '手机号码为11位'}
                    ],
                    verification: [
                        {required: true, trigger: 'blur', message: '请输入验证码'},
                        {min: 4, max: 6, trigger: 'blur', message: '验证码长度为6位'}
                    ],
                    password: [
                        {required: true, trigger: 'blur', message: '请输入密码'},
                        {min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位'}
                    ]
                },
                loading: false,
                passwordType: 'password',
                redirect: undefined
            }
        },
        watch: {
            $route: {
                handler: function(route) {
                    this.redirect = route.query && route.query.redirect
                },
                immediate: true
            }
        },
        methods: {
            showPassword() {
                this.passwordType = this.passwordType === 'password' ? '' : 'password'
                this.$nextTick(() => {
                    this.$refs.password.focus()
                })
            },
            handleLogin(formName) {
                console.log(this.$refs.form)
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        console.log('0---')
                        this.loading = true
                        this.form.account = this.form.company
                        this.$store.dispatch('user/login', this.form).then(() => {
                            this.loading = false
                            this.form.remember && localStorage.setItem('login_account', this.form.company)
                            this.$router.replace({path: this.redirect || '/'})
                        }).catch(() => {
                            this.loading = false
                        })
                    } else {
                        this.$message({
                            message: '失败',
                            type: 'info'
                        })
                    }
                })
            },
            testAccount(account) {
                this.form.account = account
                this.form.password = '123456'
                this.handleLogin()
            }
        }
    }
</script>

<style lang="scss">
    #page_login {
        .el-input__inner {
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border: transparent;
            border-radius: 0;
            padding: 0;
            border-bottom: 1px solid #dcdfe6;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            height: 0.6rem;

            /* font-size: inherit; */
            line-height: 0.6rem;
            outline: 0;
            -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            width: 100%;
        }
        .el-form-item {
            /* margin-bottom: 5%; */
        }
        .el-form-item__content {
            line-height: 0.5rem;
        }
        #login-box[data-v-7589b93f] .el-input {
            /* line-height: 10%; */
        }
        #login-box[data-v-7589b93f] .el-input input {
            /* line-height: 10%; */
        }
        .tip_name {
            font-size: 0.2rem;
        }
        .el-input {
            font-size: 0.3rem;
        }
        .el-button {
            line-height: 0.3rem;
            font-size: 0.2rem;
        }
    }
</style>

<style lang="scss" scoped>
    [data-mode=mobile] {
        #login-box {
            max-width: 80%;
            .login-banner {
                display: none;
            }
        }
    }
    ::v-deep input[type=password]::-ms-reveal {
        display: none;
    }
    .bg-banner {
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        background-image: url(../assets/images/login-bg.png);
        background-size: cover;
        background-position: center center;
    }
    .pre_box {
        width: 58%;
        height: 70%;
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        overflow: hidden;
    }
    #login-box {
        display: flex;
        justify-content: space-between;
        height: 15rem;

        /* height: 87%; */

        /* position: absolute; */
        top: 50%;
        left: 50%;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 0 5px #999;
        .login-banner {
            width: 55%;
            background-image: url(../assets/images/login-banner.png);
            background-size: cover;
            background-position: center center;
        }
        .login-form {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 45%;
            padding: 0.5rem 0.5rem 0.4rem;
            overflow: hidden;
            .svg-icon {
                vertical-align: -0.35em;
            }
        }

        /* ::v-deep .el-input { */

        /* display: inline-block; */

        /* height: 48px; */

        /* width: 100%; */

        /* input { */

        /* height: 48px; */

        /* } */

        /* .el-input__prefix { */

        /* left: 10px; */

        /* } */

        /* .el-input__suffix { */

        /* right: 10px; */

        /* } */

        /* } */
        .el-checkbox {
            margin: 20px 0;
        }
    }
    .copyright {
        position: absolute;
        bottom: 30px;
        width: 100%;
        margin: 0;
        mix-blend-mode: difference;
    }
</style>
