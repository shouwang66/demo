<template>
<div class="counter">
  <span class="btn sub-btn" v-if="showSub" @click="counterSub">-</span>
  <span class="btn sub-btn" :class="{ disabled: !showSub }" v-if="!showSub">-</span>
  <span class="input">
    <input type="number" @keyup="keyup" v-model.number.trim="count">
  </span>
  <span class="btn add-btn" v-if="showAdd" @click="counterAdd">+</span>
  <span class="btn add-btn" v-if="!showAdd">+</span>
</div>
</template>
<script>
export default {
  name: 'counter',
  props: ['counter'],
  data () {
    return {
      count: 1,
      showSub: false,
      showAdd: true
    }
  },
  created () {
    this.count = this.counter
  },
  watch: {
    counter (v) {
      this.count = v
    }
  },
  methods: {
    checkType () {
      if (typeof this.count !== 'number') {
        this.count = 1
        this.showSub = false
        this.$emit('getCounter', this.count)
      }
    },
    counterSub () {
      console.log(typeof this.count)
      if (typeof this.count === 'number') {
        if (this.count > 1) {
          this.count--
          if (this.count === 1) {
            this.showSub = false
          } else {
            this.showSub = true
          }
          this.$emit('getCounter', this.count)
        }
      } else {
        this.checkType()
      }
    },
    counterAdd () {
      if (typeof this.count === 'number') {
        this.count++
        this.showSub = true
        this.$emit('getCounter', this.count)
      } else {
        this.checkType()
      }
    },
    keyup () {
      if (typeof this.count === 'number') {
        if (this.count > 1) {
          this.showSub = true
        } else {
          this.showSub = false
        }
        this.$emit('getCounter', this.count)
      } else {
        this.checkType()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.counter {
  display: flex;
  height: 50px;
  width: 290px;
  border-radius: 5px;
  border: 1px solid #ccc;/*no*/
  .btn {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &.disabled {
      background-color: #f9f9f9;
    }
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #888;
      transform: translate3d(-50%, -50%, 0);
    }
  }
  .sub-btn {
    border-radius: 5px 0 0 5px;
    &::after {
      content: '-';
    }
    border-right: 1px solid #ccc;
  }
  .add-btn {
    border-radius: 0 5px 5px 0;
    &::after {
      content: '+';
    }
    border-left: 1px solid #ccc;
  }
  .input {
    flex: 1;
    input {
      height: 100%;
      width: 100%;
      text-align: center;
      color: #262b4f;
      border: none;
    }
  }
}
</style>
