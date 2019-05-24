const app = getApp();

Page({
  data: {
  },
  onLoad: function (options) {
    let route = decodeURIComponent(options.route);
    app.login((res) => {
      app.user_data.token = res;

      switch (route) {
        case 'pages/index/index':
        case 'pages/art/art':
        case 'pages/notes/notes':
        case 'pages/mine/mine':
          wx.switchTab({ url: '/' + route });
          break;
        default:
          wx.redirectTo({ url: '/' + route })
          break;
      }
    });
  }
})