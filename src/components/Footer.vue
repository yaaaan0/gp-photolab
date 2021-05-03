<template lang="pug">
  #footer
      v-footer(dark padless)
        v-card.indigo.lighten-1.white--text.text-center(flat tile)
          v-card-text
            v-btn.mx-4.white--text(v-for='(icon, index) in icons' :key="icon" :href="src[index]" target='_blank' icon)
              v-icon(size='24px') {{ icon }}
          v-card-text.white--text.pt-0(icon)
            p
              | GP Photolab | Garland Pheasant
              br
              span.mdi.mdi-email  gp.fotofaq@gmail.com
          v-divider
          v-card-text.white--text.text-center
            |{{ new Date().getFullYear() }} —
            strong 此網站為學習用途，並無商業使用，如需預約請洽粉絲專頁。
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-youtube',
      'mdi-camera',
      'mdi-email-variant'
    ],
    src: [
      'https://www.facebook.com/GPphotolab',
      'https://www.youtube.com/channel/UCXF-OiGXSYmhgHwcleS2wTw/videos',
      'https://docs.google.com/forms/d/e/1FAIpQLSe71grT0H-8Sp_P2bxHnRkFgmk5HdkTHFX8-2DDnwX3wyNOZg/viewform',
      'mailto:gp.fotofaq@gmail.com',
    ]
  })
}
</script>
