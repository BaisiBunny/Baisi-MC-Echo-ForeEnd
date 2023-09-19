<template>
    <div class="total">
        <div class="block" @click="readmeVisible = true">
            <h2 class="title">
                游玩须知
            </h2>
            <p>
                必看！
            </p>
            <el-dialog v-model="readmeVisible" title="游玩须知" width="60%">
                <div style="margin: -2.5rem 0 -1.5rem 0;">
                    <h1>基本规则</h1>
                    <h2>不允许破坏他人的游戏体验。</h2>
                    <!-- <h3>在规则内可以自由游玩。</h3> -->
                    <p>禁止熊，禁止单方面PVP，禁止偷盗。</p>
                    <p>关于地皮使用，请友善协商。</p>
                    <p>难度：普通，死亡不掉落</p>
                    <h1>服务器性能</h1>
                    <p>服务器性能不算很好，但也不算很差。</p>
                    <p>不过也请谨慎建造大量耗费性能的机器。</p>
                    <h1>硬币</h1>
                    <p>硬币不会与现实货币相关联。</p>
                    <p>你可以通过一些方式来获取硬币。（见下一个板块）</p>
                    <p>硬币可以在网页中购买许多许多的物品。</p>
                    <p>（请等待腐竹慢慢上架商品。）</p>
                    <h1>生电</h1>
                    <p>服务器对于专业的生电玩家来说可能并不算友好，</p>
                    <p>但是！硬币或许可以进行大部分的替代。</p>
                </div>
            </el-dialog>
        </div>

        <div class="block" @click="coinVisible = true">
            <h2 class="title">
                如何获得硬币？
            </h2>
            <p>
                有多种途径可以获得硬币。<br>
                硬币不会与现实货币相关联。
            </p>
            <el-dialog v-model="coinVisible" title="硬币相关" width="60%">
                <div style="margin: -2.5rem 0 -1.5rem 0;">
                    <h2>游戏中自动获取</h2>
                    <p>玩家在正常游戏中会随机自动获得硬币，</p>
                    <p>同时玩家不会收到任何提示。</p>
                    <h2>参与服务器活动获取</h2>
                    <p>具体获取方式视情况而定。</p>
                    <h2>建筑</h2>
                    <p>建造特定建筑可以向腐竹申请硬币奖励。</p>
                    <h2>服务器维护</h2>
                    <p>服务器维护会补偿玩家一定硬币，</p>
                    <p>一般会于服务器维护完毕后上线领取。</p>
                    <h2>签到</h2>
                    <p>玩家连续签到可获得硬币奖励。</p>
                </div>
            </el-dialog>
        </div>

        <div class="block" @click="cmdVisible = true">
            <h2 class="title">
                QQ群
            </h2>
            <p>
                搜索不到群号的话，点我查看二维码。
            </p>
            <el-dialog v-model="cmdVisible" title="加入QQ群" width="60%">
                <div style="margin: -2.5rem 0 -1.5rem 0;">
                    <p>群号：864206168（无需审核）</p>
                    <img src="/webFiles/qq.jpg" style="max-width: 50%;">
                </div>
            </el-dialog>
        </div>

        <div class="block" @click="qqVisible = true">
            <h2 class="title">
                插件使用方法
            </h2>
            <p>
                查询/箱子锁/传送/皮肤
            </p>
            <el-dialog v-model="qqVisible" title="插件使用方法" width="60%">
                <div style="margin: -2.5rem 0 -1.5rem 0;">
                    <h2>查询插件</h2>
                    <P>
                        输入 <span class="code">/co i</span> 来开启或关闭检查器。<br>
                        检查器开启状态下：<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;左键：查看该位置的放置/破坏记录。<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;右键：查看该位置的物品存取记录。
                    </P>
                    <h2>箱子锁</h2>
                    <p>
                        手持告示牌右键箱子，即可对其上锁。<br>
                        右键告示牌即可在其他空白行写上其他玩家的名字，对应的玩家也可以打开箱子。<br>
                        一个箱子可以贴多个告示牌，可以写更多的名字。<br>
                        不只有箱子，其他很多可交互方块也可以上锁。<br>
                        如果需要漏斗等方块生效，需要加上<span class="code"> [红石] </span>的名字。（需带上英文中括号[ ]，过几秒生效）
                    </p>
                    <h2>传送</h2>
                    <p>
                        设置新家<span class="code"> /sethome (家名) </span><br>
                        传送到某个家<span class="code"> /home (家名) </span><br>
                        传送到某位玩家<span class="code"> /tpa (玩家) </span><br>
                        让某位玩家传送过来<span class="code"> /tpahere (玩家) </span><br>
                        回到上个地点<span class="code"> /back </span><br>
                        显示所有家<span class="code"> /homelist </span>此处可以鼠标点击编辑/删除。
                    </p>
                    <h2>皮肤</h2>
                    <p>
                        默认皮肤为对应游戏ID的正版账号的皮肤。<br>
                        设置某正版账号同款皮肤<span class="code"> /skin set (游戏ID)</span><br>
                        设置自定义皮肤(较难)<span class="code"> /skin url (皮肤的网页链接) (经典/瘦)</span>
                    </p>
                    <h2>查看TPS</h2>
                    <p>输入<span class="code"> /tps</span></p>
                </div>
            </el-dialog>
        </div>

        <div class="block" @click="goSeedMap">
            <h2 class="title">
                地图种子
            </h2>
            <p>
                -8985846748452277621<br>
                点击跳转SeedMap查看各类结构的位置。
            </p>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const readmeVisible = ref(false)
const coinVisible = ref(false)
const qqVisible = ref(false)
const cmdVisible = ref(false)

const goSeedMap = () => {
    window.open("https://www.chunkbase.com/apps/seed-map#-8985846748452277621","_blank")
}

</script>

<style scoped>
    .total{
        padding: 0% 25%;
        margin: 0 auto;
        overflow: scroll;
    }

    .block{
        background-color: #F1F3F4;
        border-radius: 1.5rem;
        padding: 0.001rem 1rem;
        margin: 1rem;
    }
    .block:hover{
        background-color: #DFE1E5;
    }
    .block:active{
        background-color: #CDCDCD;
    }

    .title{
        margin: 0.7rem 0 -0.5rem 0;
    }

    .code{
        color: dodgerblue;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }

</style>