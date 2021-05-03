<template lang="pug">
  #footer
      v-footer(dark padless)
        v-card.indigo.lighten-1.white--text.text-center(flat tile)
          v-card-text
            v-btn.mx-4.white--text(v-for='icon in icons' :key="icon" icon)
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
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>
