<template>
  <div>
    <div class="columns is-mobile has-text-centered">
      <div class="column is-half is-offset-one-quarter">
        <img src="logo.jpg">
      </div>
    </div>
    <h1 class="title">LIFF Showcase</h1>
    <div class="columns is-mobile">
      <div class="column is-12 has-text-centered buttons">
        <button @click="openWindow()" class="button is-primary">Open Window</button>
        <button @click="closeWindow()" class="button is-info">Close Window</button>
        <button @click="sendMessage()" class="button is-success">Send Message</button>
        <button @click="getProfile()" class="button is-danger">Get Profile</button>
      </div>
    </div>
    <h2 class="subtitle">Profile</h2>
      <div class="columns is-mobile">
        <div class="column is-half is-offset-one-quarter">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">User ID:</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <label class="label">{{ profile.userId || '-' }}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Display Name</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <label class="label">{{ profile.displayName || '-' }}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Picture URL</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <label class="label">{{ profile.pictureUrl || '-' }}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Status Message</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <label class="label">{{ profile.statusMessage || '-' }}</label>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  data: () => ({
    profile: {
      userId: '',
      displayName: '',
      pictureUrl: '',
      statusMessage: ''
    }
  }),
  methods: {
    openWindow () {
      this.$liff.openWindow({
        url: 'https://developers.line.me/en/docs/liff/overview/'
      })
    },
    closeWindow () {
      this.$liff.closeWindow()
    },
    sendMessage () {
      this.$liff.sendMessages([
        {
          type: 'text',
          text: 'You/\'ve successfully sent a message! Hooray!'
        },
        {
          type: 'sticker',
          packageId: '2',
          stickerId: '144'
        }
      ]).then(function () {
        window.alert('Message sent')
      }).catch(function (error) {
        window.alert('Error sending message: ' + error)
      })
    },
    getProfile () {
      let _this = this
      this.$liff.getProfile().then(function (profile) {
        _this.profile = profile
      }).catch(function (error) {
        alert('Error getting profile: ' + error)
      })
    }
  }
}
</script>
