
<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="glossy">

      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>Fluency</q-toolbar-title>
      <div ref="target" class="b-user">
        <div class="b-user__status"></div><div class="b-user__name">Welcome, Jane</div>
        <q-popover ref="popover">
          <q-list item-separator link>
            <router-link class="b-routeLink" to="/profile" >
              <q-item @click="doSomething(), $refs.popover.close()">
                <div class="q-item-side q-item-side-left q-item-section">
                  <i aria-hidden="true" class="q-item-icon q-icon material-icons">settings</i>
                </div>
                <div class="q-item-main q-item-section">
                  <div class="q-item-label">Profile</div>
                </div>
              </q-item>
            </router-link>
            <router-link class="b-routeLink" to="/logout" >
              <q-item @click="doSomething(), $refs.popover.close()">
                <div class="q-item-side q-item-side-left q-item-section">
                  <i aria-hidden="true" class="q-item-icon q-icon material-icons">power_settings_new</i>
                </div>
                <div class="q-item-main q-item-section">
                  <div class="q-item-label">Logout</div>
                </div>
              </q-item>
            </router-link>
          </q-list>
        </q-popover>
      </div>

    </q-toolbar>

    <div slot="left">

      <q-list-header>Menu</q-list-header>
      <q-list link class="b-list">
        <div class="q-list-header">Source</div>
        
          <router-link class="b-routeLink" to="/source/subnet" >
            <q-item>
              <div class="q-item-side q-item-side-left q-item-section">
                <i aria-hidden="true" class="q-item-icon q-icon material-icons">network_check</i>
              </div>
              <div class="q-item-main q-item-section">
                <div class="q-item-label">Subnets</div>
              </div>
              <div class="q-item-side q-item-side-right q-item-section">
                <i aria-hidden="true" class="q-item-icon q-icon material-icons">chevron_right</i>
              </div>
            </q-item>
          </router-link>
          <router-link class="b-routeLink" to="/source/assets">
            <q-item>
              <div class="q-item-side q-item-side-left q-item-section">
                <i aria-hidden="true" class="material-icons q-item-icon q-icon">network_wifi</i>
              </div>
              <div class="q-item-main q-item-section">
                <div class="q-item-label">Assets</div>
              </div>
              <div class="q-item-side q-item-side-right q-item-section">
                <i aria-hidden="true" class="q-item-icon q-icon material-icons">chevron_right</i>
              </div>
            </q-item>
          </router-link>
          <router-link class="b-routeLink" to="/source/search">
            <q-item>
              <div class="q-item-side q-item-side-left q-item-section">
                <i aria-hidden="true" class="material-icons q-item-icon q-icon">visibility</i>
              </div>
              <div class="q-item-main q-item-section">
                <div class="q-item-label">Search</div>
              </div>
              <div class="q-item-side q-item-side-right q-item-section">
                <i aria-hidden="true" class="q-item-icon q-icon material-icons">chevron_right</i>
              </div>
            </q-item>
          </router-link>
          <router-link class="b-routeLink" to="/source/filter">
            <q-item>
              <div class="q-item-side q-item-side-left q-item-section">
                <i aria-hidden="true" class="material-icons q-item-icon q-icon">filter_list</i>
              </div>            
              <div class="q-item-main q-item-section">
                <div class="q-item-label">Filter</div>
              </div>
              <div class="q-item-side q-item-side-right q-item-section">
                <i aria-hidden="true" class="q-item-icon q-icon material-icons">chevron_right</i>
              </div>
            </q-item>
          </router-link>
          <router-link class="b-routeLink" to="/source/alert_filter">
            <q-item>
              <div class="q-item-side q-item-side-left q-item-section">
                <i aria-hidden="true" class="material-icons q-item-icon q-icon">filter_list</i>
              </div>
              <div class="q-item-main q-item-section">
                <div class="q-item-label">Alert Filter</div>
              </div>
              <div class="q-item-side q-item-side-right q-item-section">
                <i aria-hidden="true" class="q-item-icon q-icon material-icons">chevron_right</i>
              </div>
            </q-item>
          </router-link>
          <router-link class="b-routeLink" to="/source/anomaly">
            <q-item>
              <div class="q-item-side q-item-side-left q-item-section">
                <i aria-hidden="true" class="material-icons q-item-icon q-icon">warning</i>
              </div>
              <div class="q-item-main q-item-section">
                <div class="q-item-label">Anomaly</div>
              </div>
              <div class="q-item-side q-item-side-right q-item-section">
                <i aria-hidden="true" class="q-item-icon q-icon material-icons">chevron_right</i>
              </div>
            </q-item>
          </router-link>
          <router-link class="b-routeLink" to="/source/files">
            <q-item>
              <div class="q-item-side q-item-side-left q-item-section">
                <i aria-hidden="true" class="material-icons q-item-icon q-icon">insert_drive_file</i>
              </div>
              <div class="q-item-main q-item-section">
                <div class="q-item-label">Files</div>
              </div>
              <div class="q-item-side q-item-side-right q-item-section">
                <i aria-hidden="true" class="q-item-icon q-icon material-icons">chevron_right</i>
              </div>
            </q-item>
          </router-link>
          <router-link class="b-routeLink" to="/source/upload_live">
            <q-item>
              <div class="q-item-side q-item-side-left q-item-section">
                <i aria-hidden="true" class="material-icons q-item-icon q-icon">file_upload</i>
              </div>
              <div class="q-item-main q-item-section">
                <div class="q-item-label">Upload Live</div>
              </div>
              <div class="q-item-side q-item-side-right q-item-section">
                <i aria-hidden="true" class="q-item-icon q-icon material-icons">chevron_right</i>
              </div>
            </q-item>
          </router-link>
        <!--<div class="q-item-separator-component"></div>-->
      </q-list>

    </div>

    <!--Replace following <div> with <router-view /> component if using subRoutes-->
    <div class="layout-padding">
      <router-view /> 
    </div>
  </q-layout>

</template>

<script>
import {
  dom,
  event,
  openURL,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QPopover
} from 'quasar'

const
  { viewport } = dom,
  { position } = event,
  moveForce = 30,
  rotateForce = 40,
  RAD_TO_DEG = 180 / Math.PI

function getRotationFromAccel (accelX, accelY, accelZ) {
  /* Reference: http://stackoverflow.com/questions/3755059/3d-accelerometer-calculate-the-orientation#answer-30195572 */
  const sign = accelZ > 0 ? 1 : -1
  const miu = 0.001

  return {
    roll: Math.atan2(accelY, sign * Math.sqrt(Math.pow(accelZ, 2) + miu * Math.pow(accelX, 2))) * RAD_TO_DEG,
    pitch: -Math.atan2(accelX, Math.sqrt(Math.pow(accelY, 2) + Math.pow(accelZ, 2))) * RAD_TO_DEG
  }
}

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QPopover
  },
  data () {
    return {
      orienting: window.DeviceOrientationEvent && !this.$q.platform.is.desktop,
      rotating: window.DeviceMotionEvent && !this.$q.platform.is.desktop,
      moveX: 0,
      moveY: 0,
      rotateY: 0,
      rotateX: 0
    }
  },
  computed: {
    position () {
      const transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`
      return {
        top: this.moveY + 'px',
        left: this.moveX + 'px',
        '-webkit-transform': transform,
        '-ms-transform': transform,
        transform
      }
    }
  },
  methods: {
    launch (url) {
      openURL(url)
    },
    move (evt) {
      const
        {width, height} = viewport(),
        {top, left} = position(evt),
        halfH = height / 2,
        halfW = width / 2

      this.moveX = (left - halfW) / halfW * -moveForce
      this.moveY = (top - halfH) / halfH * -moveForce
      this.rotateY = (left / width * rotateForce * 2) - rotateForce
      this.rotateX = -((top / height * rotateForce * 2) - rotateForce)
    },
    rotate (evt) {
      if (evt.rotationRate &&
          evt.rotationRate.beta !== null &&
          evt.rotationRate.gamma !== null) {
        this.rotateX = evt.rotationRate.beta * 0.7
        this.rotateY = evt.rotationRate.gamma * -0.7
      }
      else {
        /* evt.acceleration may be null in some cases, so we'll fall back
           to evt.accelerationIncludingGravity */
        const
          accelX = evt.acceleration.x || evt.accelerationIncludingGravity.x,
          accelY = evt.acceleration.y || evt.accelerationIncludingGravity.y,
          accelZ = evt.acceleration.z || evt.accelerationIncludingGravity.z - 9.81,
          rotation = getRotationFromAccel(accelX, accelY, accelZ)

        this.rotateX = rotation.roll * 0.7
        this.rotateY = rotation.pitch * -0.7
      }
    },
    orient (evt) {
      if (evt.beta === null || evt.gamma === null) {
        window.removeEventListener('deviceorientation', this.orient, false)
        this.orienting = false

        window.addEventListener('devicemotion', this.rotate, false)
      }
      else {
        this.rotateX = evt.beta * 0.7
        this.rotateY = evt.gamma * -0.7
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.orienting) {
        window.addEventListener('deviceorientation', this.orient, false)
      }
      else if (this.rotating) {
        window.addEventListener('devicemove', this.rotate, false)
      }
      else {
        document.addEventListener('mousemove', this.move)
      }
    })
  },
  beforeDestroy () {
    if (this.orienting) {
      window.removeEventListener('deviceorientation', this.orient, false)
    }
    else if (this.rotating) {
      window.removeEventListener('devicemove', this.rotate, false)
    }
    else {
      document.removeEventListener('mousemove', this.move)
    }
  }
}
</script>

<style lang="stylus">
/*new styles*/
.b-list 
  padding-bottom: 0
  padding-top: 0
  
.b-routeLink,  .b-routeLink:hover
  color: #0c0c0c

.b-routeLink:hover .q-item
  background: #d6d6d6

.b-routeLink.router-link-active
  cursor: default

.b-routeLink.router-link-active .q-item, .b-routeLink.router-link-active:hover .q-item
  background: #dcdcdc

.b-table {
  width: 100%;
}
.b-table thead {
  background: #000;
  color: #fff;
}
.b-user {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.b-user__name {
  padding: 0 12px;
}
.b-user__status {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #04e604;
}
</style>
