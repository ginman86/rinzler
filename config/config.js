var config = {
  downloaders: {
    kickass: {
      enabled: false,
      prefix: 'https://kickass.so/search/',
      suffix: '/?field=seeders&sorder=desc&rss=1'
    },
    bay: {
      enabled: true,
      search: {
        prefix: 'http://thepiratebay.gd/search/',
        suffix: '/0/7/0' // sort by seeders desc 
      },
      top: {
        prefix: 'http://thepiratebay.gd/top/',
        movies: '201',
        tvShows: '205'
      },
      categories: [
        'movies',
        'tvShows'
      ]
    }
  },
  twilio: {
    accountSid: 'ACca9390943711d6c62d3040d325dc97b2'
  },
  activeClient: 'deluge',
  clients: {
    deluge: {
      url: 'http://192.168.0.109:8112/json',
      downloadLocation: '/media/USBHDD1/share/downloading'
    }
  }
}

module.exports = config
