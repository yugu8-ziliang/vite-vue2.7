<template>
    <div class="home-item">
        <div class="header">
            <span class="title">
                更多服务
            </span>
        </div>
        <div class="content">
            <div class="item">
                <div class="item-tags">
                    <span>货车共享</span>
                    <span>筐子共享</span>
                </div>
            </div>
            <div class="item">
                <div class="item-title">市场服务</div>
                <div class="item-tags">
                    <span>账单</span>
                    <span>充值</span>
                    <span>更多服务</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
        };
    },
    methods: {
    },
    created() {
    },
};
</script>

<style lang="scss" scoped>
.content {
    height: 445px;
    padding: 0px 24px;

    .item {
        .item-title {
            margin-top: 24px;
            font-size: 14px;
            color: rgba(1, 6, 33, 0.75);
        }

        .item-tags {
            display: flex;

            span {
                margin: 16px 24px 0 0;
                width: 96px;
                height: 40px;
                border-radius: 2px;
                border: 1px solid #D0D0D2;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                color: rgba(1,6,33,0.75);
            }
        }
    }
}</style>
