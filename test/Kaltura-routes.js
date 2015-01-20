var KalturaConstants = require('./Kaltura/lib/KalturaTypes.js');
var Kaltura = require('./Kaltura/lib/KalturaClient.js');

var KalturaCreds = {
  partner_id: 1760921,
  user_id: 'anonymous',
  admin_secret: '8d6cb692ab0f41bfa6bde373204c4b40',
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
      filter.nameLike = "Kaltura";
      var pager = new Kaltura.objects.KalturaFilterPager();
      KalturaClient.media.listAction(function(results) {
        console.log('list media:' + JSON.stringify(results));
        if (results.objectType === 'KalturaAPIException') { console.log('err:' + JSON.stringify(results)); throw results; }
        res.json(results.objects);
      }, filter, pager);
   })
}