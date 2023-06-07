<template>
    <div class="home-item">
        <div class="header">
            <span class="title">
                通知<i class="el-icon-arrow-right" />
            </span>
        </div>
        <div class="content">
            <!-- <div class="item">农批管家新版上线了农批管家新版上线了农批管家新版上线了农批管家新版上线了</div>
            <div class="item">农批管家新版上线了</div>
            <div class="item">农批管家新版上线了</div>
            <div class="item">农批管家新版上线了</div>
            <div class="item">农批管家新版上线了</div>
            <div class="item">农批管家新版上线了</div>
            <div class="item">农批管家新版上线了</div> -->
            <el-scrollbar style="height: 100%">
                <div class="item" v-for="(item,index) in formData" :key="index">
                    <div class="item">{{ item.messageContent }}</div>
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
import { systemMessageListAll } from "@/api/homePage/index";

export default {
    data() {
        return {
            formData:[]
        };
    },
    methods: {
        init(){
            systemMessageListAll({sendUserId:1}).then(res=>{
                this.formData=res.data
            })
        }
    },
    created() {
        this.init()
    },
};
</script>

<style lang="scss" scoped>
:deep(.el-scrollbar) {
    .el-scrollbar__wrap .el-scrollbar__view {
        padding: 0 24px !important;
    }
}
.content{
    height: 445px;
    padding: 8px 24px;
    .item{
        margin-top: 8px;
        font-size: 14px;
        color: rgba(0,0,0,0.85);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
</style>
