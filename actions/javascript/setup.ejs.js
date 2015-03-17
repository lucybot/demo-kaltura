<script type="text/javascript" src="https://lucybot.com/kaltura/kaltura.min.js"></script>
<script type="text/javascript">
  var KalturaConfig = new KalturaConfiguration(<%- Lucy.code.variable('answers.partnerID') %>);
  KalturaConfig.serviceUrl = "http://www.kaltura.com/";
  var KalturaClient = new KalturaClient(KalturaConfig);
  KalturaClient.session.start(function(success, session) {
    KalturaClient.setKs(session);
  },
  <%- Lucy.variable('answers.adminSecret') %>,
  <%- Lucy.variable('answers.userID') %>,
  KalturaSessionType.ADMIN,
  <%- Lucy.variable('answers.partnerID') %>);
</script>
