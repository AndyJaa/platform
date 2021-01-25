<template>
    <div id="home_index">
        <el-row :gutter="20" style="margin: 0 0.15rem; height: calc(100% - 1.25rem); padding-bottom: 0.23rem;">
            <el-col :span="18" :xl="18" :lg="16" :md="14" style="height: 100%;">
                <page-main title="招商公告" style="margin: 0 0 0.22rem 0; height: 60%;"></page-main>
                <page-main @click.native="open" style="margin: 0 0 0.22rem 0; height: 40%; border-radius: 0.2rem;">
                    <p style="margin: 0 0 0.2rem 0.23rem;">商户权限<span style="color: #999; font-size: 0.2rem; margin-left: 0.1rem;">完善资料可开通高级权限</span></p>
                    <el-row :gutter="10" style="margin: 0 0.1rem;">
                        <el-col :span="8">
                            <page-main class="permission" style="margin: 0;">
                                游客权限
                            </page-main>
                        </el-col>
                        <el-col :span="8">
                            <page-main class="permission" style="margin: 0;">
                                <router-link :to="{name: 'detail'}">普通合作商权限</router-link>
                            </page-main>
                        </el-col>
                        <el-col :span="8">
                            <page-main class="permission" style="margin: 0;">
                                采购合作商权限
                            </page-main>
                        </el-col>
                    </el-row>
                </page-main>
            </el-col>
            <el-col :span="6" :xl="6" :lg="8" :md="10" style="height: calc(100% - 0.31rem);">
                <page-main style="margin: 0 0 0.25rem 0; height: 35%;">
                    <div class="igs-flex">
                        <span class="igs-flex igs-flex4">
                            <p style="background-color: #d1e8fe; padding: 0 0.086rem; font-size: 0.2rem; border-radius: 0.12rem; color: #3b7af2; margin-right: 0.16rem;">招商</p>
                            <p>广东尚博信信息科技有限公司</p>
                        </span>
                    </div>
                </page-main>
                <page-main title="我的投标" style="margin: 0 0 0.25rem 0; height: 30%;"></page-main>
                <page-main title="平台公告" style="margin: 0 0 0.22rem 0; height: 35%;"></page-main>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            open() {
                this.$router.push('/home/empty')
            }
        }
    }
</script>

<style lang="scss">
    #home_index {
        margin: 0.25rem 0;
        height: 100%;
        position: absolute;
        width: 100%;
        .el-col-pull-0,
        .el-col-pull-1,
        .el-col-pull-10,
        .el-col-pull-11,
        .el-col-pull-13,
        .el-col-pull-14,
        .el-col-pull-15,
        .el-col-pull-16,
        .el-col-pull-17,
        .el-col-pull-18,
        .el-col-pull-19,
        .el-col-pull-2,
        .el-col-pull-20,
        .el-col-pull-21,
        .el-col-pull-22,
        .el-col-pull-23,
        .el-col-pull-24,
        .el-col-pull-3,
        .el-col-pull-4,
        .el-col-pull-5,
        .el-col-pull-6,
        .el-col-pull-7,
        .el-col-pull-8,
        .el-col-pull-9,
        .el-col-push-0,
        .el-col-push-1,
        .el-col-push-10,
        .el-col-push-11,
        .el-col-push-12,
        .el-col-push-13,
        .el-col-push-14,
        .el-col-push-15,
        .el-col-push-16,
        .el-col-push-17,
        .el-col-push-18,
        .el-col-push-19,
        .el-col-push-2,
        .el-col-push-20,
        .el-col-push-21,
        .el-col-push-22,
        .el-col-push-23,
        .el-col-push-24,
        .el-col-push-3,
        .el-col-push-4,
        .el-col-push-5,
        .el-col-push-6,
        .el-col-push-7,
        .el-col-push-8,
        .el-col-push-9,
        .el-row {
            /* height: 100%; */
            flex: 1;
        }
        .el-col-8 {
            height: 100%;
        }
        .page-main {
            border-radius: 0.1rem;
            display: flex;
            flex-direction: column;
        }
        .permission {
            background-color: #fafafa;
            height: 100%;
            border-radius: 0.2rem;
        }
    }
</style>
