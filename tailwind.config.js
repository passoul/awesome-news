module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.svelte',
    ],
    defaultExtractor: content => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
    
      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
    
      return broadMatches.concat(innerMatches)
    }
  },
  variants: {},
  theme: {
    extend: {
      fontFamily: {
        'body': ['Helvetica Neue', 'Arial', 'Noto Sans']
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  plugins: [],
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
}
