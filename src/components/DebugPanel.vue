<template>
    <div class="cvr-debug-panel">
        <div class="title">Debug panel</div>
        <div class="content"></div>
    </div>
</template>

<script>
    import Debug from './CvrDebugEvent';

    export default {
        name: 'debug-panel',

        mounted () {
            Debug.on((text) => {
                let date = new Date();
                text = '[' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '] ' + text;
                this.insertDebugStr(text);
            });
        },

        methods: {
            insertDebugStr (text) {
                let $text = document.createElement('div');
                $text.className = 'cvr-debug-text';
                let $p = document.createElement('p');
                $p.innerText = text;
                $text.appendChild($p);
                this.$el.querySelector('.content').insertBefore($text, this.$el.querySelector('.content').firstChild);
            }
        }
    }
</script>

<style lang="sass">
    .cvr-debug-panel {
        width: 90%;
        height: 50%;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 3px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
        overflow-y: auto;

        .title {
            font-size: 16px;
            padding: 3px;
            border-bottom: 1px solid #ccc;
            font-weight: 700;
        }

        .cvr-debug-text {
            color: #000;
            margin: 0 3px;
            padding: 3px 0;
            border-bottom: 1px solid #fff;
        }

        p {
            margin: 0;
            line-height: 16px;
            font-size: 14px;
        }
    }
</style>