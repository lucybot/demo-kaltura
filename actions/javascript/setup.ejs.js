<script type="text/javascript" src="http://bbrennan.info/kaltura/ox.ajast.js"></script>
<script type="text/javascript" src="http://bbrennan.info/kaltura/webtoolkit.md5.js"></script>
<script type="text/javascript" src="http://bbrennan.info/kaltura/KalturaClientBase.js"></script>
<script type="text/javascript" src="http://bbrennan.info/kaltura/KalturaTypes.js"></script>
<script type="text/javascript" src="http://bbrennan.info/kaltura/KalturaVO.js"></script>
<script type="text/javascript" src="http://bbrennan.info/kaltura/KalturaServices.js"></script>
<script type="text/javascript" src="http://bbrennan.info/kaltura/KalturaClient.js"></script>
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
