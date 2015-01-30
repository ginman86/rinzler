
var config = {
  downloaders: {
    kickass: {
      enabled: true,
    },
    tbp: {
      enabled:false
    }
  },
  activeClient: "deluge",
  clients: {
    deluge: {
      url: "http://192.168.0.109:8112/json",
      downloadLocation: "/media/USBHDD1/share/downloading"
    }
  }
};

module.exports = config;
