var KalturaConstants = require('./Kaltura/lib/KalturaTypes.js');
var Kaltura = require('./Kaltura/lib/KalturaClient.js');

var KalturaCreds = {
  partner_id: undefined,
  user_id: undefined,
  admin_secret: undefined,
}

var config = new Kaltura.KalturaConfiguration(KalturaCreds.partner_id);
KalturaClient = new Kaltura.KalturaClient(config);
KalturaClient.session.start(function(session) {
  KalturaClient.setKs(session);
  Session = session;
}, KalturaCreds.admin_secret, KalturaCreds.user_id, KalturaConstants.KalturaSessionType.ADMIN,
   KalturaCreds.partner_id, KalturaCreds.session_length);

exports.setRoutes = function(App) {
   App.post('/media-list', function(req, res) {
      var filter = new Kaltura.objects.KalturaMediaEntryFilter();
      filter.nameLike = "fdsa";
      var pager = new Kaltura.objects.KalturaFilterPager();
      KalturaClient.media.listAction(function(results) {
        if (results.objectType === 'KalturaAPIException') return callback(results);
        callback(null, results.objects);
      }, filter, pager);
   })
}