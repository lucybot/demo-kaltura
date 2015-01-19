var KalturaConstants = require('./kaltura/KalturaTypes.js');
var Kaltura = require('./kaltura/KalturaClient.js');

var KalturaCreds = {
  partner_id: <%- header.partner_id %>,
  user_id: <%- header.user_id %>,
  admin_secret: <%- header.admin_secret %>,
}

var config = new Kaltura.KalturaConfiguration(KalturaCreds.partner_id);
KalturaClient = new Kaltura.KalturaClient(config);
KalturaClient.session.start(function(session) {
  KalturaClient.setKs(session);
  Session = session;
  callback();
}, KalturaCreds.admin_secret, KalturaCreds.user_id, KalturaConstants.KalturaSessionType.ADMIN,
   KalturaCreds.partner_id, KalturaCreds.session_length);
