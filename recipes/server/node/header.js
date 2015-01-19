var KalturaConstants = require('./kaltura/KalturaTypes.js');
var Kaltura = require('./kaltura/KalturaClient.js');

var config = new Kaltura.KalturaConfiguration(secrets.partner_id);
KalturaClient = new Kaltura.KalturaClient(config);
KalturaClient.session.start(function(session) {
  KalturaClient.setKs(session);
  Session = session;
  callback();
}, secrets.admin_secret, secrets.user_id, KalturaConstants.KalturaSessionType.ADMIN,
   secrets.partner_id, secrets.session_length);
